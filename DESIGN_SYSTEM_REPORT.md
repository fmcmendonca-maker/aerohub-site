# AeroHub Design System Report
## Comprehensive Style Guide & Brand Documentation

**Project**: AeroHub Aviation Services Platform  
**Repository**: https://github.com/fmcmendonca-maker/aerohub-site  
**Version**: 1.0  
**Date**: November 2025  
**Purpose**: Complete design documentation for developers, designers, and AI agents

---

## 🎨 Brand Identity

### Company Name & Positioning
- **Brand Name**: **AeroHub**
- **Industry**: Aviation Services & Consultancy
- **Target Audience**: Airlines, aircraft operators, aviation professionals
- **Brand Personality**: Professional, trustworthy, innovative, sophisticated

### Core Services
1. **Charter Flights** - Personalized air travel solutions
2. **ACMI Wet Leasing** - Aircraft, crew, maintenance, insurance packages
3. **Dry Lease** - Aircraft leasing without operational services
4. **Aviation Consultancy** - Strategic guidance and expertise

---

## 🏷️ Brand Tagline & Messaging

### Primary Tagline
**"Your Personal Gateway to Complex Aviation Solutions"**

### Extended Tagline
**"Charters • ACMI • Dry Lease • Strategic Consultancy"**

### Subtitle Brand Elements
**"CONSULTANCY • BROKERAGE • DEVELOPMENT"**
- Uses bullet separators with orange accent on middle element
- Letter spacing: 3px
- Font weight: 500
- Transform: uppercase

### Contact CTA
**"Contact: info@aerohub.it"** - Prominent orange button in hero section

---

## 🎯 Logo Design & Usage

### Logo Files
- **Primary Logo**: `aerohub_new_black.png` (Dark version)
- **Secondary Logo**: `aerohub_new_grey.png` (Light/gray version)
- **Location**: Root directory and `/images/` folder
- **Dimensions**: Height 180px (responsive)

### Logo Behavior
```css
.logo {
    height: 180px;
    width: auto;
    filter: drop-shadow(0 10px 28px rgba(0,0,0,.5));
    transition: all .45s ease;
}

/* Hover Animation */
.logo:hover img {
    transform: translateY(-8px) scale(1.04);
    filter: drop-shadow(0 16px 38px rgba(0,0,0,.6));
}
```

### Logo Specifications
- **Format**: PNG with transparency
- **Usage**: Switches automatically between dark/light versions based on theme
- **Hover Effect**: Subtle lift and scale animation (translateY -8px, scale 1.04)
- **Drop Shadow**: Professional depth effect that enhances on hover

---

## 🎨 Color Palette

### Primary Colors
```css
:root {
    --primary: #0f172a;     /* Deep Navy Blue - Headers, primary text */
    --secondary: #1e293b;    /* Slate Blue - Secondary elements */
    --accent: #F47C20;       /* Orange - CTAs, highlights, brand accent */
    --light: #f8fafc;        /* Off White - Backgrounds */
    --dark: #020617;         /* Near Black - Body text */
}
```

### Supporting Colors
```css
--gray: #64748b;             /* Medium Gray - Secondary text */
--border: #e2e8f0;           /* Light Gray - Borders, dividers */
--green: #10b981;            /* Success Green - Positive states */
--red: #ef4444;              /* Error Red - Alerts, warnings */
--orange: #f97316;           /* Secondary Orange - Variations */
```

### Dark Theme Colors
```css
[data-theme="dark"] {
    --primary: #f1f5f9;      /* Light text on dark background */
    --secondary: #e2e8f0;    /* Secondary light text */
    --light: #0f172a;        /* Dark background */
    --dark: #f8fafc;         /* Light text */
    --gray: #94a3b8;         /* Lighter gray for dark mode */
    --border: #334155;       /* Dark mode borders */
}
```

### Color Usage Guidelines
- **Orange (#F47C20)**: Primary brand color, used for CTAs, highlights, accent dots
- **Navy (#0f172a)**: Professional foundation, headers, primary text
- **Gray System**: Three-tier gray scale for text hierarchy and UI elements
- **Theme Support**: Automatic color switching for light/dark modes

---

## ✍️ Typography System

### Font Families
```css
/* Primary Font - Clean & Professional */
font-family: 'Inter', sans-serif;

/* Display Font - Elegant Headers */
font-family: 'Playfair Display', serif;
```

### Typography Hierarchy

#### Headers
- **H1 (Logo)**: Playfair Display, responsive sizing
- **H2 (Section Headers)**: Playfair Display, 3rem, center-aligned
- **H3 (Subsections)**: Inter, 1.4-1.8rem, semi-bold

#### Body Text
- **Primary**: Inter, line-height 1.7, responsive sizing
- **Secondary**: Inter, 0.9-1.1rem, medium gray
- **Captions**: Inter, 0.85rem, light gray

#### Special Elements
- **Tagline**: Inter, 1.45rem, font-weight 300
- **Subtitle**: Inter, 1.2rem, letter-spacing 3px, uppercase
- **Buttons**: Inter, 1.1rem, font-weight 600

### Font Loading
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet">
```

---

## 🎭 Visual Style & Aesthetics

### Design Philosophy
- **Professional Aviation**: Clean, trustworthy, sophisticated
- **Modern Corporate**: Contemporary design with classic reliability
- **Interactive Excellence**: Subtle animations and hover effects
- **Data-Driven**: Charts, metrics, and live data integration

### Visual Characteristics

#### Spacing & Layout
- **Container Max-Width**: 1240px
- **Section Padding**: 100px vertical
- **Grid Systems**: CSS Grid and Flexbox
- **Responsive Breakpoints**: 968px, 768px, 480px

#### Border Radius & Shadows
```css
/* Standard Border Radius */
border-radius: 12px;        /* Cards, buttons */
border-radius: 8px;         /* Smaller elements */
border-radius: 20px;        /* Pills, badges */

/* Shadow System */
box-shadow: 0 8px 25px rgba(244,124,32,.4);     /* Orange accent shadows */
filter: drop-shadow(0 10px 28px rgba(0,0,0,.5));  /* Logo shadows */
```

#### Animation Philosophy
```css
/* Smooth Transitions */
transition: all .3s ease;                        /* Standard elements */
transition: all .45s cubic-bezier(0.175, 0.885, 0.32, 1.15);  /* Premium feel */

/* Hover States */
transform: translateY(-4px);                     /* Lift effect */
transform: scale(1.04);                          /* Subtle growth */
```

---

## 📱 Responsive Design Approach

### Mobile-First Strategy
- **Base Design**: Mobile optimized (320px+)
- **Tablet Enhancement**: 768px breakpoint
- **Desktop Optimization**: 968px+ breakpoint
- **Large Screens**: 1240px container maximum

### Responsive Patterns
```css
/* Mobile Adaptations */
@media (max-width: 968px) {
    .chart-header { flex-direction: column; }
    .service-grid { grid-template-columns: 1fr; }
    .x-label:nth-child(even) { display: none; }
}
```

### Touch-Friendly Elements
- **Button Sizing**: Minimum 44px touch targets
- **Hover States**: Adapted for touch devices
- **Navigation**: Accessible mobile patterns

---

## 🎬 Animation & Interaction Design

### Micro-Interactions
1. **Logo Hover**: Lift and scale with enhanced shadow
2. **Button Hover**: Lift effect with shadow enhancement
3. **Card Hover**: Subtle elevation and color shifts
4. **Data Visualization**: Animated chart drawing and point interactions

### Animation Specifications
```css
/* Logo Animation Suite */
.logo:hover img {
    transform: translateY(-8px) scale(1.04);
    filter: drop-shadow(0 16px 38px rgba(0,0,0,.6));
}

.logo:hover + .logo-subtitle {
    transform: translateY(-6px) scale(1.02);
    text-shadow: 0 8px 25px rgba(0,0,0,.8);
}

/* Chart Animations */
@keyframes drawLine {
    from { stroke-dasharray: 1000; stroke-dashoffset: 1000; }
    to { stroke-dasharray: 1000; stroke-dashoffset: 0; }
}

@keyframes popIn {
    from { opacity: 0; transform: scale(0); }
    to { opacity: 1; transform: scale(1); }
}
```

### Performance Considerations
- **GPU Acceleration**: Transform and opacity animations
- **Timing Functions**: Cubic-bezier for premium feel
- **Duration**: 300ms standard, 450ms for complex interactions

---

## 📊 Data Visualization Style

### Chart Design Language
- **Color Scheme**: Orange gradients with professional grays
- **Line Style**: Smooth SVG paths with drop shadows
- **Data Points**: Interactive circles with hover states
- **Grid System**: Subtle lines for readability

### Chart Components
```css
.market-chart-container {
    background: var(--light);
    border-radius: 16px;
    padding: 32px;
    border: 1px solid var(--border);
}

.data-point {
    fill: var(--accent);
    stroke: white;
    stroke-width: 2;
    transition: all 0.3s ease;
    cursor: pointer;
}

.data-point:hover {
    r: 8;
    fill: #e06b1a;
    stroke-width: 3;
}
```

---

## 🖼️ Image & Media Guidelines

### Image Specifications
- **Hero Background**: `hero.jpg` - Aviation-themed, high resolution
- **Service Images**: Professional aviation photography
- **Aspect Ratios**: 16:9 for headers, 4:3 for service cards
- **Optimization**: WebP preferred, JPG fallback

### Image Usage Patterns
```css
/* Background Image Pattern */
background: linear-gradient(to bottom, rgba(15,23,42,0.96), rgba(15,23,42,0.88)), 
            url('../images/hero.jpg') center/cover no-repeat;

/* Service Card Images */
.service-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 12px 12px 0 0;
}
```

### Icon System
- **Aircraft Icons**: ✈ emoji for maps and decorative elements
- **Service Icons**: Industry-relevant emoji (🛩 🚁 📊 🔍)
- **UI Icons**: Minimal, consistent with Inter font weight

---

## 🌐 Live Data Integration

### Flight Tracking Features
- **API**: OpenSky Network for real-time aircraft data
- **Map Library**: Leaflet.js with custom styling
- **Update Frequency**: 30-second intervals
- **Visual Elements**: Orange aircraft icons (✈) with heading indicators

### Map Styling
```javascript
// Custom map tile style (implied from design)
// Orange accent markers
// Professional dark/light theme adaptation
// Smooth zoom and pan interactions
```

---

## 🎯 User Experience Patterns

### Navigation Philosophy
- **Minimal Navigation**: Focus on key service areas
- **Clear Hierarchy**: Services → Details → Contact flow
- **Contextual CTAs**: Service-specific contact points

### Content Strategy
- **Professional Tone**: Authoritative but approachable
- **Data-Driven**: Market insights and industry metrics
- **Service-Focused**: Clear value propositions for each offering

### Conversion Elements
1. **Primary CTA**: Orange contact button in header
2. **Service CTAs**: Context-specific contact forms
3. **Trust Signals**: Market data, professional imagery
4. **Social Proof**: Industry statistics and growth data

---

## 🔧 Technical Implementation

### CSS Architecture
- **CSS Custom Properties**: Complete theming system
- **BEM-like Naming**: Semantic class structure
- **Component-Based**: Reusable UI patterns
- **Performance-Optimized**: Efficient selectors and animations

### JavaScript Features
- **Theme Switching**: localStorage persistence
- **Dynamic Loading**: Partial HTML includes
- **Live Data**: API integration with error handling
- **Map Integration**: Interactive flight tracking

### Build System
- **No Build Process**: Vanilla HTML/CSS/JS
- **HTTP Server**: Python simple server for development
- **GitHub Pages**: Direct deployment capability

---

## 📋 Implementation Checklist

### For Developers
- [ ] Implement color system with CSS custom properties
- [ ] Set up Inter + Playfair Display font loading
- [ ] Create responsive grid systems (1240px container)
- [ ] Build theme switching functionality
- [ ] Integrate animation system with proper timing
- [ ] Implement logo hover interaction suite
- [ ] Set up chart animation keyframes
- [ ] Create mobile-responsive breakpoints

### For Designers
- [ ] Use orange (#F47C20) as primary accent color
- [ ] Implement navy (#0f172a) for headers and primary text
- [ ] Design with 180px logo height as reference
- [ ] Create hover states for all interactive elements
- [ ] Use 12px border radius for cards and buttons
- [ ] Apply drop shadows for depth and hierarchy
- [ ] Design with letter-spacing for subtitle elements
- [ ] Ensure 44px minimum touch targets for mobile

### For Content
- [ ] Use "AeroHub" brand name consistently
- [ ] Include tagline: "Your Personal Gateway to Complex Aviation Solutions"
- [ ] Implement service hierarchy: Charter → ACMI → Dry Lease → Consultancy
- [ ] Use professional aviation imagery (16:9 ratio)
- [ ] Include market data and industry statistics
- [ ] Maintain professional, authoritative tone
- [ ] Ensure contact information: info@aerohub.it

---

## 🎨 Quick Reference

### Brand Colors (Hex)
- Orange Accent: `#F47C20`
- Navy Primary: `#0f172a`
- Light Background: `#f8fafc`
- Gray Text: `#64748b`
- Border Gray: `#e2e8f0`

### Typography
- **Primary**: Inter (300, 400, 500, 600, 700)
- **Display**: Playfair Display (400, 600, 700)
- **Line Height**: 1.7 for body text
- **Letter Spacing**: 3px for subtitles

### Key Measurements
- **Logo Height**: 180px
- **Container Width**: 1240px max
- **Section Padding**: 100px vertical
- **Border Radius**: 12px standard
- **Animation Duration**: 300ms standard, 450ms complex

### Essential Classes
- `.container` - 1240px max-width wrapper
- `.logo` - Brand logo with hover animations
- `.cta-button` - Orange call-to-action buttons
- `.service-card` - Service presentation cards
- `[data-theme="dark"]` - Dark mode overrides

---

## 📞 Contact & Usage

This design system is specifically created for the AeroHub aviation services platform. All design tokens, patterns, and specifications should be maintained consistently across any extensions or related projects.

**Repository**: https://github.com/fmcmendonca-maker/aerohub-site  
**Live Demo**: Available via GitHub Pages  
**Technology Stack**: HTML5, CSS3, JavaScript (ES6+), Leaflet.js

*Last Updated: November 2025*
*Version: 1.0*