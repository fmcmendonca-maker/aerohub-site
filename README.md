# AeroHub - Aviation Services Platform

A professional aviation services website offering charter flights, ACMI wet leasing, and dry lease solutions.

## 🚁 Features

- **Charter Flights**: Personalized air travel solutions
- **ACMI Wet Leasing**: Complete aircraft, crew, maintenance, and insurance packages  
- **Dry Lease**: Aircraft leasing without operational services
- **Aviation Consultancy**: Expert guidance and strategic advice
- **Live Flight Tracking**: Real-time aircraft monitoring with interactive maps
- **Market Analytics**: Industry growth data and market insights

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Grid & Flexbox
- **Maps**: Leaflet.js with OpenSky Network API
- **Fonts**: Inter + Playfair Display from Google Fonts
- **Icons**: Custom aircraft icons and emoji
- **Theme**: Light/Dark mode support

## 🚀 Getting Started

### Prerequisites
- Python 3.x (for local development server)
- Modern web browser

### Local Development

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd aerohub_site
   ```

2. Start the development server:
   ```bash
   python3 -m http.server 8000
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

## 📁 Project Structure

```
aerohub_site/
├── index.html              # Main landing page
├── charter-flights.html    # Charter flights service page
├── wet-lease-acmi.html     # ACMI wet leasing page
├── dry-lease.html          # Dry lease service page
├── consultancy.html        # Aviation consultancy page
├── login.html              # User authentication page
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   └── main.js             # JavaScript functionality
├── images/                 # Image assets
├── partials/               # Reusable HTML components
│   ├── header.html
│   ├── footer.html
│   └── snapshot.html
└── *.png                   # Logo files
```

## 🎨 Design Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Orange Accent Theme**: Professional aviation-inspired color scheme
- **Interactive Elements**: Hover animations and smooth transitions
- **Live Data**: Real-time flight tracking with aircraft positions
- **Market Visualization**: SVG-based charts showing industry growth
- **Modern Typography**: Clean, readable fonts optimized for aviation content

## 🌐 Live Flight Data

The platform integrates with the OpenSky Network API to display:
- Real-time aircraft positions
- Flight headings and altitudes
- Interactive map with aircraft icons
- Live updates every 30 seconds

## 📈 Market Analytics

- ACMI market growth projections (2025-2035)
- Industry CAGR data (8.9% growth rate)
- Market size visualization ($5.44B to $13.24B)
- Credible sources and research citations

## 🔧 Customization

### Theme Colors
The website uses CSS custom properties for easy theme customization:

```css
:root {
  --primary: #1a365d;      /* Navy blue */
  --accent: #f47c20;       /* Orange */
  --gray: #64748b;         /* Medium gray */
  --light: #f8fafc;        /* Light gray */
  --border: #e2e8f0;       /* Border gray */
}
```

### Adding New Services
1. Create a new HTML file following the existing page structure
2. Add corresponding styles in `css/style.css`
3. Update navigation links in `partials/header.html`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)  
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📧 Contact

For questions or support, please contact the AeroHub team.

---

**AeroHub** - *Elevating Aviation Excellence*