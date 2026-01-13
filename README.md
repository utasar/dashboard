# MAYA - Utsav Acharya's Personal Portfolio

An advanced personal portfolio website featuring MAYA, an AI assistant that provides intelligent insights into Utsav's projects, skills, and achievements.



##  Features

### Interactive Dashboard
- **Personal Projects Showcase**: Hospital Management System, Notes App, E-Commerce Platform, and AI Task Manager
- **Skills Section**: Visual representation of technical expertise with animated progress bars
- **Academic Achievements**: Timeline showcasing Technology First Scholar award and other accomplishments
- **Testimonials**: Rotating testimonials from mentors and colleagues
- **Resume Download**: Easy access to downloadable resume

### MAYA AI Assistant
- **Intelligent Conversations**: AI-powered chatbot that answers questions about Utsav's background
- **Natural Language Understanding**: Processes queries about projects, skills, achievements, and contact information
- **Context-Aware Responses**: Provides detailed, relevant information based on user questions
- **Suggestion System**: Quick-access buttons for common queries

### Audio Integration
- **Background Music**: Features Gayatri Mantra and Brodha V's music
- **Interactive Controls**: Toggle button to play/pause background audio
- **Visual Feedback**: Pulsing animation when music is playing

### Modern Design
- **Responsive Layout**: Mobile-first design that works seamlessly across all devices
- **Smooth Animations**: Fade-in effects, scroll animations, and smooth transitions
- **Cultural Aesthetics**: Blends serene and vibrant tones inspired by cultural and technological themes
- **Modern CSS**: Gradient backgrounds, glassmorphism effects, and contemporary styling

### Technical Excellence
- **Pure Vanilla JavaScript**: No framework dependencies for core functionality
- **Modular Architecture**: Separated concerns with data.js, maya.js, and script.js
- **SEO Optimized**: Semantic HTML and meta tags for better search visibility
- **Performance**: Optimized loading and minimal external dependencies

##  Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: A local web server for development

### Installation

1. Clone the repository:
```bash
git clone https://github.com/utasar/dashboard.git
cd dashboard
```

2. Add your assets:
   - Add profile image to `assets/images/profile.jpg`
   - Add testimonial images to `assets/images/`
   - Add background music to `assets/audio/background.mp3`
   - Add resume PDF to `assets/resume.pdf`

3. Open in browser:
```bash
# Option 1: Direct file access
open index.html

# Option 2: Use Python's built-in server
python -m http.server 8000

# Option 3: Use Node.js http-server
npx http-server
```

4. Visit `http://localhost:8000` in your browser

##  Project Structure

```
dashboard/
├── index.html          # Main HTML structure
├── styles.css          # All CSS styles and animations
├── script.js           # Main JavaScript for interactivity
├── maya.js             # MAYA AI assistant logic
├── data.js             # Portfolio data and knowledge base
├── assets/
│   ├── images/         # Profile and testimonial images
│   ├── audio/          # Background music files
│   └── resume.pdf      # Downloadable resume
├── .gitignore          # Git ignore file
└── README.md           # This file
```

##  Customization

### Update Portfolio Data
Edit `data.js` to customize:
- Personal information
- Projects and their details
- Skills and proficiency levels
- Achievements timeline
- Testimonials
- MAYA's knowledge base

### Modify Styling
Edit `styles.css` to change:
- Color scheme (CSS variables in `:root`)
- Typography and fonts
- Spacing and layout
- Animations and transitions

### Enhance MAYA
Edit `maya.js` to:
- Add new question patterns
- Improve response logic
- Expand knowledge base
- Customize conversation flow

##  Deployment

### GitHub Pages

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial portfolio commit"
git push origin main
```

2. Enable GitHub Pages:
   - Go to repository Settings
   - Navigate to Pages section
   - Select branch: `main`
   - Select folder: `/ (root)`
   - Click Save

3. Your site will be live at: `https://utasar.github.io/dashboard/`

### Custom Domain

1. Add a `CNAME` file to the repository:
```bash
echo "yourdomain.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

2. Configure DNS:
   - Add A records pointing to GitHub's IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add CNAME record pointing to `utasar.github.io`

3. Update GitHub Pages settings to use custom domain

##  Features Breakdown

### MAYA AI Assistant
MAYA uses pattern matching and natural language understanding to:
- Identify user intent from questions
- Match queries to relevant knowledge areas
- Provide contextual, informative responses
- Maintain conversation history
- Offer quick suggestions for common queries

### Responsive Navigation
- Fixed navigation bar with scroll effects
- Active link highlighting based on scroll position
- Mobile-friendly hamburger menu
- Smooth scroll to sections

### Dynamic Content Loading
- Projects dynamically loaded from data file
- Skills with animated progress bars
- Achievement timeline with alternating layout
- Auto-rotating testimonial slider

### Audio System
- Background music integration
- Play/pause controls
- Visual feedback for playing state
- Graceful handling of autoplay restrictions

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with custom properties, Grid, Flexbox
- **JavaScript (ES6+)**: Vanilla JS for all functionality
- **Font Awesome**: Icon library
- **GitHub Pages**: Hosting platform

##  Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

##  Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


##  Author

**Utsav Acharya**
- GitHub: [@utasar](https://github.com/utasar)
- LinkedIn: [Utsav Acharya](https://linkedin.com/in/utsav-acharya)

## Acknowledgments

- Inspired by modern portfolio designs
- Special mention to Arpan Bhandari's portfolio for setting the benchmark
- Font Awesome for the icon library
- The open-source community for inspiration and tools


**Built with ❤️ by Utsav Acharya** | Powered by MAYA AI Assistant
