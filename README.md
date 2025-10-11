# Bengali Wedding Invitation Website 💍

A beautiful, mobile-first wedding invitation website inspired by modern retro + vintage Bengali aesthetics. Built for Shankha & Jayasree's wedding celebration in Siliguri. Features smooth animations, parallax effects, and PWA capabilities.

## 🌟 Features

### Design & Aesthetics
- **Modern Retro Bengali Theme**: Combines traditional Bengali motifs with contemporary design
- **Pastel Color Palette**: Cream (#FAF7F2), Blush (#F4E4D6), Mint (#E8F5E8), Gold (#D4AF37), Rose (#D4A574)
- **Typography**: Elegant combination of Cormorant Garamond (serif) and Poppins (sans-serif)
- **Paper Texture**: Subtle textured background for vintage feel
- **Bengali Elements**: Alpona patterns, Om symbols, and Bengali typography

### Interactive Features
- **Smooth Scroll Animation**: Buttery smooth scrolling between sections
- **Parallax Effects**: Beautiful depth and movement on scroll
- **Reveal Animations**: Elements fade and slide in as you scroll
- **Gallery Modal**: Full-screen image viewer with navigation
- **RSVP Form**: Comprehensive form with validation and success feedback
- **Countdown Timer**: Live countdown to the wedding day
- **Progress Bar**: Visual scroll progress indicator

### Technical Excellence
- **Mobile-First Design**: Optimized for all devices
- **Progressive Web App (PWA)**: Install on device, offline support
- **Service Worker**: Caching for faster loads and offline functionality
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **Performance Optimized**: Lazy loading, efficient animations
- **SEO Ready**: Proper meta tags and structured data

### Sections Included
1. **Hero**: Names, date, and beautiful Bengali motifs
2. **Our Story**: Love story with timeline and photos
3. **Events**: Wedding ceremony details (Gaye Holud, Wedding, Reception)
4. **Gallery**: Photo collection with modal viewer
5. **RSVP**: Form for guest responses
6. **Footer**: Social links and contact information

## 🚀 Quick Start

### Option 1: Direct Use
1. Download all files to your computer
2. Open `index.html` in a web browser
3. Customize the content for your wedding

### Option 2: GitHub Pages Deployment
1. Fork this repository
2. Edit the files with your wedding details
3. Enable GitHub Pages in repository settings
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 3: Local Development
```bash
# Clone the repository
git clone [repository-url]
cd Wedding_Invite

# Serve locally (Python 3)
python -m http.server 8000

# Or with Node.js
npx serve .

# Visit http://localhost:8000
```

## 🛠️ Customization Guide

### 1. Basic Information
Edit `index.html` to update:
- **Names**: Currently set to "Shankha" and "Jayasree"
- **Date**: Currently set to December 15, 2025
- **Venues**: Currently set to Siliguri, West Bengal
- **Bengali Text**: Update Bengali phrases and translations

### 2. Colors & Styling
In `styles.css`, modify the CSS variables:
```css
:root {
    --cream: #FAF7F2;    /* Background cream */
    --blush: #F4E4D6;    /* Light blush */
    --mint: #E8F5E8;     /* Soft mint */
    --sage: #C8D5B9;     /* Sage green */
    --gold: #D4AF37;     /* Accent gold */
    --rose: #D4A574;     /* Warm rose */
}
```

### 3. Images
Replace placeholder images:
- **Story Photo**: Update couple photo in story section
- **Gallery**: Replace with your pre-wedding photos
- **Icons**: Add your own wedding icons (72x72 to 512x512px)

### 4. Wedding Events
Update the events section in `index.html`:
```html
<div class="event-card">
    <div class="event-icon">
        <i class="fas fa-hands-praying"></i>
    </div>
    <h3>Your Event Name</h3>
    <div class="date">Your Date</div>
    <div class="time">Your Time</div>
    <div class="venue">Your Venue</div>
</div>
```

### 5. RSVP Form
The form is currently set up for frontend only. To connect to a backend:
1. Update the form action in `script.js`
2. Set up a server endpoint to handle form submissions
3. Consider services like Netlify Forms, Formspree, or Google Forms

### 6. Bengali Text
Common Bengali phrases to customize:
- `আমাদের বিবাহের আমন্ত্রণ` - Our wedding invitation
- `বিবাহ পর্যন্ত সময়` - Time until wedding
- `আপনার উপস্থিতি আমাদের আনন্দ দ্বিগুণ করবে` - Your presence will double our joy

## 📱 PWA Features

### Installation
- Visitors can install the invitation as an app on their devices
- Works offline once installed
- Provides native app-like experience

### Notifications
- Wedding reminders (requires permission)
- RSVP confirmations
- Event updates

### Offline Support
- Basic functionality works without internet
- RSVP forms sync when back online
- Cached content loads instantly

## 🎨 Design Philosophy

### Bengali Cultural Elements
- **Alpona Patterns**: Traditional floor art motifs
- **Color Significance**:
  - Gold: Prosperity and celebration
  - Red/Rose: Love and marriage
  - Green: New beginnings
- **Typography**: Mix of modern and traditional feels
- **Om Symbol**: Spiritual significance in Bengali culture

### Modern Minimalism
- Clean layouts with plenty of whitespace
- Subtle animations that enhance rather than distract
- Focus on content and user experience
- Mobile-first approach for modern users

## 🔧 Technical Stack

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern features like Grid, Flexbox, and Custom Properties
- **Vanilla JavaScript**: No frameworks, pure performance
- **Service Worker**: Offline support and caching
- **Web App Manifest**: PWA capabilities
- **Font Awesome**: Icon library
- **Google Fonts**: Cormorant Garamond & Poppins

## 📊 Performance

### Optimization Features
- **Lazy Loading**: Images load as needed
- **Minified Assets**: Compressed CSS and JS
- **Efficient Animations**: GPU-accelerated transforms
- **Caching Strategy**: Smart service worker caching
- **Image Optimization**: WebP support with fallbacks

### Lighthouse Scores (Target)
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100
- PWA: ✓

## 🌍 Browser Support

### Modern Browsers
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

### Mobile Support
- iOS Safari 13+
- Chrome Mobile 80+
- Samsung Internet 12+

### Graceful Degradation
- Older browsers get basic functionality
- Progressive enhancement for modern features
- Fallbacks for unsupported CSS properties

## 🚀 Deployment Options

### GitHub Pages (Recommended)
```bash
# Enable GitHub Pages in repository settings
# Choose source: Deploy from a branch
# Branch: main / (root)
```

### Netlify
```bash
# Connect GitHub repository
# Build command: (none needed)
# Publish directory: ./
```

### Vercel
```bash
# Import GitHub repository
# Framework preset: Other
# No build settings needed
```

### Traditional Hosting
Upload all files to any web server that supports static files.

## 📝 Customization Checklist

### Content Updates
- [x] Update couple names (Shankha & Jayasree)
- [x] Change wedding date and venues (Dec 15, 2025 in Siliguri)
- [ ] Replace story text with your story
- [ ] Update timeline events
- [ ] Add your photos to gallery
- [ ] Customize Bengali text
- [ ] Update social media links

### Technical Setup
- [ ] Update meta tags (title, description)
- [ ] Replace favicon and app icons
- [ ] Configure RSVP form backend
- [ ] Set up analytics (optional)
- [ ] Test on multiple devices
- [ ] Validate HTML/CSS
- [ ] Check accessibility

### Pre-Launch
- [ ] Test all animations
- [ ] Verify responsive design
- [ ] Check loading times
- [ ] Test offline functionality
- [ ] Proofread all text
- [ ] Test RSVP form
- [ ] Share preview with family

## 🎯 SEO & Analytics

### Meta Tags Included
- Open Graph for social sharing
- Twitter Card support
- Proper title and description
- Canonical URLs
- Mobile viewport

### Analytics Setup (Optional)
Add Google Analytics or similar:
```html
<!-- Add before closing </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
```

## 🤝 Contributing

### Bug Reports
- Check existing issues first
- Provide detailed description
- Include browser and device info
- Steps to reproduce

### Feature Requests
- Bengali cultural elements
- New animation ideas
- Performance improvements
- Accessibility enhancements

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💝 Credits

### Design Inspiration
- Traditional Bengali art and culture
- Modern minimalist design principles
- Indian wedding invitation trends
- Siliguri and North Bengal cultural elements

### Technical Resources
- Google Fonts for typography
- Font Awesome for icons
- Unsplash for placeholder images
- Modern CSS techniques and best practices

### Special Thanks
- Bengali community for cultural guidance
- Web development community for best practices
- Siliguri and North Bengal community for local insights
- Everyone who provided feedback and suggestions

---

**Made with ❤️ for Bengali couples celebrating their love**

*আপনার নতুন যাত্রায় শুভকামনা!*
*(Best wishes for your new journey!)*

## 📞 Support

For questions, suggestions, or technical support:
- Open an issue on GitHub
- Check the documentation
- Review the customization guide

*Remember: This is your special day's digital representation. Take time to make it perfectly yours!*
