// Wedding Invitation JavaScript - Enhanced Functionality
// Modern Bengali Wedding Website

document.addEventListener("DOMContentLoaded", function () {
  // Initialize all components
  initScrollProgress();
  initRevealAnimations();
  initParallaxEffects();
  initLoadingAnimation();
  initSmoothScroll();
  initCountdown();
  initMusicPlayer();
  initTypingEffect();
});

// Loading Animation
function initLoadingAnimation() {
  const loadingOverlay = document.createElement("div");
  loadingOverlay.className = "loading-overlay";
  loadingOverlay.innerHTML =
    '<div class="loading-spinner"></div>' +
    '<div class="loading-text">আমন্ত্রণ লোড হচ্ছে...</div>';
  document.body.appendChild(loadingOverlay);

  window.addEventListener("load", () => {
    setTimeout(() => {
      loadingOverlay.classList.add("hidden");
      setTimeout(() => {
        loadingOverlay.remove();
      }, 500);
    }, 1500);
  });
}

// Scroll Progress Bar
function initScrollProgress() {
  const scrollProgress = document.querySelector(".scroll-progress");

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const maxHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (scrolled / maxHeight) * 100;
    scrollProgress.style.width = `${progress}%`;
  });
}

// Enhanced Reveal Animations
function initRevealAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add staggered delay for multiple elements
        setTimeout(() => {
          entry.target.classList.add("active");
        }, index * 100);

        // Trigger confetti for special sections
        if (entry.target.id === "events") {
          createConfetti();
        }
      }
    });
  }, observerOptions);

  document
    .querySelectorAll(".reveal, .fade-in-left, .fade-in-right")
    .forEach((el) => {
      observer.observe(el);
    });
}

// Parallax Effects
function initParallaxEffects() {
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;

    // Hero parallax
    const hero = document.querySelector(".hero");
    if (hero) {
      hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }

    // Floating elements
    document.querySelectorAll(".bengali-motif").forEach((motif, index) => {
      const speed = 0.1 + index * 0.05;
      motif.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
  });
}

// Smooth Scroll Enhancement
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

// Wedding Countdown Timer
function initCountdown() {
  const weddingDate = new Date("2025-12-15T08:00:00").getTime();

  // Create countdown element
  const countdownContainer = document.createElement("div");
  countdownContainer.className = "countdown-container";
  countdownContainer.style.cssText =
    "text-align: center; padding: 40px 20px; background: rgba(255,255,255,0.9); border-radius: 20px; margin: 40px 0; box-shadow: 0 10px 30px rgba(0,0,0,0.1);";

  // Insert after hero section
  const hero = document.querySelector(".hero");
  if (hero && hero.parentNode) {
    hero.parentNode.insertBefore(countdownContainer, hero.nextSibling);
  }

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
      countdownContainer.innerHTML =
        '<h3 style="font-family: var(--serif); color: var(--gold); margin-bottom: 10px;">💍 We are getting married! 💍</h3><p style="color: var(--dark-text);">Thank you for being part of our journey!</p>';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownContainer.innerHTML =
      '<h3 style="font-family: var(--serif); color: var(--gold); margin-bottom: 20px; font-size: 1.5rem;">সেই দিন পর্যন্ত</h3>' +
      '<div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">' +
      '<div style="text-align: center; min-width: 60px;">' +
      '<div style="font-size: 2rem; font-weight: bold; color: var(--gold);">' +
      days +
      "</div>" +
      '<div style="font-size: 0.9rem; color: var(--light-text);">Days</div></div>' +
      '<div style="text-align: center; min-width: 60px;">' +
      '<div style="font-size: 2rem; font-weight: bold; color: var(--gold);">' +
      hours +
      "</div>" +
      '<div style="font-size: 0.9rem; color: var(--light-text);">Hours</div></div>' +
      '<div style="text-align: center; min-width: 60px;">' +
      '<div style="font-size: 2rem; font-weight: bold; color: var(--gold);">' +
      minutes +
      "</div>" +
      '<div style="font-size: 0.9rem; color: var(--light-text);">Minutes</div></div>' +
      '<div style="text-align: center; min-width: 60px;">' +
      '<div style="font-size: 2rem; font-weight: bold; color: var(--gold);">' +
      seconds +
      "</div>" +
      '<div style="font-size: 0.9rem; color: var(--light-text);">Seconds</div></div></div>';
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// Background Music Player (Optional)
function initMusicPlayer() {
  const musicBtn = document.createElement("button");
  musicBtn.className = "music-toggle";
  musicBtn.innerHTML = "🎵";
  musicBtn.style.cssText =
    "position: fixed; bottom: 100px; right: 20px; width: 50px; height: 50px; border: none; border-radius: 50%; background: var(--gold); color: white; font-size: 1.2rem; cursor: pointer; z-index: 1000; box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3); transition: transform 0.3s ease; display: none;";

  document.body.appendChild(musicBtn);

  // Show music button after user interaction
  let userInteracted = false;
  document.addEventListener(
    "click",
    () => {
      if (!userInteracted) {
        musicBtn.style.display = "block";
        userInteracted = true;
      }
    },
    { once: true },
  );

  let isPlaying = false;
  musicBtn.addEventListener("click", () => {
    if (isPlaying) {
      musicBtn.innerHTML = "🎵";
      musicBtn.style.transform = "scale(1)";
    } else {
      musicBtn.innerHTML = "🔇";
      musicBtn.style.transform = "scale(0.9)";
    }
    isPlaying = !isPlaying;
  });
}

// Typing Effect for Hero Subtitle
function initTypingEffect() {
  const subtitle = document.querySelector(".hero-subtitle");
  if (!subtitle) return;

  const text = subtitle.textContent;
  subtitle.textContent = "";
  subtitle.style.opacity = "1";

  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      subtitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  // Start typing after other animations
  setTimeout(typeWriter, 1500);
}

// Confetti Animation
function createConfetti() {
  const colors = ["#D4AF37", "#D4A574", "#E8F5E8", "#F4E4D6"];

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.style.cssText =
      "position: fixed; width: 10px; height: 10px; background: " +
      colors[Math.floor(Math.random() * colors.length)] +
      "; top: -10px; left: " +
      Math.random() * 100 +
      "%; z-index: 1000; border-radius: 50%; pointer-events: none; animation: confetti-fall " +
      (Math.random() * 3 + 2) +
      "s linear forwards;";

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

// Add confetti animation keyframes
const style = document.createElement("style");
style.textContent =
  "@keyframes confetti-fall { 0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; } 100% { transform: translateY(100vh) rotate(720deg); opacity: 0; } }";
document.head.appendChild(style);

// Touch gestures for mobile
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
  touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener("touchend", (e) => {
  const touchEndX = e.changedTouches[0].screenX;
  const touchEndY = e.changedTouches[0].screenY;

  const deltaX = touchEndX - touchStartX;
  const deltaY = touchEndY - touchStartY;

  // Touch gesture handling can be added here for other features
});

// Performance optimization
function optimizeImages() {
  const images = document.querySelectorAll('img[src*="unsplash"]');
  images.forEach((img) => {
    // Add loading="lazy" for better performance
    img.loading = "lazy";

    // Add proper alt text if missing
    if (!img.alt) {
      img.alt = "Wedding celebration image";
    }

    // Add error handling
    img.addEventListener("error", function () {
      this.src =
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="100%" height="100%" fill="%23f0f0f0"/%3E%3Ctext x="50%" y="50%" text-anchor="middle" dy=".3em" fill="%23999"%3EImage not available%3C/text%3E%3C/svg%3E';
    });
  });
}

// Initialize image optimization after DOM is loaded
document.addEventListener("DOMContentLoaded", optimizeImages);

// Add accessibility improvements
function enhanceAccessibility() {
  // Add skip link
  const skipLink = document.createElement("a");
  skipLink.href = "#main-content";
  skipLink.textContent = "Skip to main content";
  skipLink.style.cssText =
    "position: absolute; top: -40px; left: 6px; background: var(--dark-text); color: white; padding: 8px; text-decoration: none; z-index: 2000; transition: top 0.3s;";
  skipLink.addEventListener("focus", () => {
    skipLink.style.top = "6px";
  });
  skipLink.addEventListener("blur", () => {
    skipLink.style.top = "-40px";
  });
  document.body.insertBefore(skipLink, document.body.firstChild);

  // Add main content ID
  const firstSection = document.querySelector("section");
  if (firstSection) {
    firstSection.id = "main-content";
    firstSection.setAttribute("tabindex", "-1");
  }

  // Enhance focus management
  document.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      document.body.classList.add("keyboard-navigation");
    }
  });

  document.addEventListener("mousedown", () => {
    document.body.classList.remove("keyboard-navigation");
  });
}

// Call accessibility enhancements
enhanceAccessibility();

// Simple performance monitoring
if ("performance" in window) {
  window.addEventListener("load", () => {
    console.log("Website loaded successfully");
  });
}
