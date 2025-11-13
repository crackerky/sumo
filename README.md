# SUMO Cultural Web Project

A comprehensive, educational website dedicated to introducing Japanese Sumo wrestling culture to a global audience. This project showcases the history, traditions, rules, and cultural significance of Sumo through a modern, minimalist web design.

## Project Overview

**Project Name:** SUMO Cultural Web Project
**Purpose:** To introduce Sumo wrestling as a Japanese cultural heritage to international users through an educational and entertaining platform
**Target Audience:** International users interested in Japanese culture (primarily English-speaking)

## Features

### Content Sections

1. **Hero Section** - Eye-catching introduction with Japanese and English typography
2. **What is Sumo?** - Introduction to the sport and its cultural significance
3. **Sacred Rituals** - Explanation of traditional ceremonies and their meanings
4. **The Basics** - Rules, winning conditions, and prohibited actions
5. **Legendary Rikishi** - Profiles of greatest sumo wrestlers in history
6. **Sumo Life** - Daily life and training routine of wrestlers
7. **Watch Live** - Honbasho tournament schedule and ticket information
8. **Beyond the Ring** - Cultural context, mythology, and spiritual aspects
9. **Photo Gallery** - Visual showcase of sumo culture
10. **Call to Action** - Engagement opportunities for visitors

### Interactive Features

- Smooth scrolling navigation
- Responsive hamburger menu for mobile devices
- Intersection Observer animations for content reveal
- Active navigation link highlighting based on scroll position
- Scroll-to-top button for easy navigation
- Hover effects and transitions throughout

## Design Specifications

### Color Palette

The color scheme reflects traditional Japanese sumo culture:

| Color | Hex Code | Meaning |
|-------|----------|---------|
| Black | `#333C3D` | Strength and Tradition |
| White | `#E5E0D6` | Purity and Ritual |
| Red | `#96320E` | Dohyo, Sacred Space, Ceremonies |
| Blue | `#496199` | Stability |
| Purple | `#765291` | Prestige and Divinity |

### Typography

- **Headings:** Montserrat (Modern, high visibility)
- **Body Text:** Open Sans (International standard, highly readable)
- **Japanese Text:** Noto Sans JP (Japanese font support)

### Design Philosophy

"Japanese Tradition × Minimal Design × International Readability"

The design balances traditional color schemes with modern typography to create an accessible, culturally authentic experience.

## Project Structure

```
sumo-website/
│
├── index.html              # Main HTML file (single-page structure)
├── css/
│   └── styles.css          # Complete stylesheet with responsive design
├── js/
│   └── script.js           # Interactive functionality
├── assets/
│   ├── images/            # Image assets (placeholder ready)
│   ├── videos/            # Video content (placeholder ready)
│   └── icons/             # Icon assets
└── README.md              # This file
```

## Installation & Usage

### Quick Start

1. Clone or download this repository
2. Open `index.html` in a modern web browser
3. No build process or dependencies required!

### Local Development

For local development with live reload, you can use any static server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

### Deployment

This is a static website and can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront
- Any static hosting service

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization Guide

### Adding Images

Replace the `.image-placeholder` elements in HTML with actual images:

```html
<!-- Before -->
<div class="image-placeholder">Photo</div>

<!-- After -->
<img src="assets/images/your-image.jpg" alt="Description" loading="lazy">
```

### Modifying Colors

Update CSS variables in `css/styles.css`:

```css
:root {
    --color-black: #333C3D;
    --color-white: #E5E0D6;
    --color-red: #96320E;
    --color-blue: #496199;
    --color-purple: #765291;
}
```

### Adding New Sections

Follow the existing section structure:

```html
<section id="your-section" class="section">
    <div class="container">
        <div class="section-header">
            <span class="section-tag">Category</span>
            <h2>Section Title</h2>
        </div>
        <!-- Your content here -->
    </div>
</section>
```

## Responsive Design

The website is fully responsive with breakpoints:
- Desktop: 968px and above
- Tablet: 600px - 968px
- Mobile: Below 600px

## Performance Optimization

- Lazy loading for images
- Debounced scroll events
- Intersection Observer for efficient animations
- Minimal external dependencies
- Optimized CSS with variables
- Smooth transitions without JavaScript animation frameworks

## Future Enhancements

Potential additions for future versions:

- [ ] Interactive quiz about Sumo knowledge
- [ ] Video player integration for match highlights
- [ ] Interactive glossary of Sumo terminology
- [ ] Multi-language support (Japanese, Spanish, French)
- [ ] Sumo techniques visualization
- [ ] Live tournament results integration
- [ ] Newsletter subscription
- [ ] Social media integration

## Cultural Notes

This project aims to respectfully represent Sumo wrestling as a significant part of Japanese cultural heritage. Sumo is:

- Over 1,500 years old
- Deeply connected to Shinto religion
- Japan's national sport (Kokugikan)
- A UNESCO Intangible Cultural Heritage candidate
- A living tradition that preserves ancient customs

## Resources

### Official Organizations
- Japan Sumo Association: [sumo.or.jp](http://www.sumo.or.jp/)
- Grand Sumo Tournament Information
- Ryogoku Kokugikan (Tokyo's Sumo Hall)

### Educational Content
- NHK Sumo broadcasts
- Sumo terminology guides
- Historical archives

## Credits

**Project Type:** Educational Web Design
**Purpose:** Cultural education and international awareness
**Design:** Minimalist approach respecting Japanese aesthetics
**Content:** Based on traditional Sumo knowledge and public information

## License

This project is created for educational purposes. Images and content about Sumo wrestling should respect copyright and cultural sensitivity guidelines.

---

**Built with respect for Japanese cultural heritage 🇯🇵**

*相撲 - More than a sport, a living tradition*
