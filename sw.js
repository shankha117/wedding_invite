// Service Worker for Bengali Wedding Invitation Website
// Provides offline functionality and caching

const CACHE_NAME = 'bengali-wedding-v1.0';
const urlsToCache = [
    './',
    './index.html',
    './styles.css',
    './script.js',
    'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    // Add other static assets here
];

// Install Service Worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
            .catch(err => {
                console.log('Cache failed: ', err);
            })
    );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return cached version or fetch from network
                if (response) {
                    return response;
                }

                return fetch(event.request)
                    .then(response => {
                        // Check if we received a valid response
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // Clone the response
                        const responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    })
                    .catch(() => {
                        // If both cache and network fail, show offline page
                        if (event.request.destination === 'document') {
                            return caches.match('./offline.html');
                        }
                    });
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];

    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Background sync for RSVP forms
self.addEventListener('sync', event => {
    if (event.tag === 'rsvp-sync') {
        event.waitUntil(syncRSVP());
    }
});

async function syncRSVP() {
    try {
        // Get pending RSVP data from IndexedDB
        const pendingRSVPs = await getPendingRSVPs();

        for (const rsvp of pendingRSVPs) {
            try {
                // Send RSVP to server
                await fetch('/api/rsvp', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(rsvp.data)
                });

                // Remove from pending list
                await removePendingRSVP(rsvp.id);
            } catch (error) {
                console.log('Failed to sync RSVP:', error);
            }
        }
    } catch (error) {
        console.log('Background sync failed:', error);
    }
}

// Helper functions for IndexedDB operations
async function getPendingRSVPs() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('WeddingDB', 1);

        request.onerror = () => reject(request.error);

        request.onsuccess = () => {
            const db = request.result;
            const transaction = db.transaction(['rsvps'], 'readonly');
            const store = transaction.objectStore('rsvps');
            const getAllRequest = store.getAll();

            getAllRequest.onsuccess = () => resolve(getAllRequest.result);
            getAllRequest.onerror = () => reject(getAllRequest.error);
        };

        request.onupgradeneeded = () => {
            const db = request.result;
            if (!db.objectStoreNames.contains('rsvps')) {
                db.createObjectStore('rsvps', { keyPath: 'id', autoIncrement: true });
            }
        };
    });
}

async function removePendingRSVP(id) {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('WeddingDB', 1);

        request.onsuccess = () => {
            const db = request.result;
            const transaction = db.transaction(['rsvps'], 'readwrite');
            const store = transaction.objectStore('rsvps');
            const deleteRequest = store.delete(id);

            deleteRequest.onsuccess = () => resolve();
            deleteRequest.onerror = () => reject(deleteRequest.error);
        };
    });
}

// Push notifications for wedding reminders
self.addEventListener('push', event => {
    const options = {
        body: event.data ? event.data.text() : 'আমাদের বিশেষ দিনের কথা মনে রাখুন!',
        icon: './icons/icon-192x192.png',
        badge: './icons/badge-72x72.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            {
                action: 'explore',
                title: 'View Invitation',
                icon: './icons/checkmark.png'
            },
            {
                action: 'close',
                title: 'Close',
                icon: './icons/xmark.png'
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('Bengali Wedding Reminder', options)
    );
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
    event.notification.close();

    if (event.action === 'explore') {
        // Open the wedding invitation
        event.waitUntil(
            clients.openWindow('/')
        );
    } else if (event.action === 'close') {
        // Just close the notification
        event.notification.close();
    } else {
        // Default action - open the app
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});

// Message handling from main thread
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

// Network status change handling
self.addEventListener('online', () => {
    console.log('Back online');
    // Trigger background sync when back online
    self.registration.sync.register('rsvp-sync');
});

self.addEventListener('offline', () => {
    console.log('Gone offline');
});
