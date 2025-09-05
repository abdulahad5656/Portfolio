# Portfolio Website

A modern, responsive portfolio website built with Node.js, Express, EJS, HTML, CSS, and JavaScript.

## Features

- **Responsive Design** - Works perfectly on all devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Elements** - Smooth scrolling, mobile navigation, form validation
- **Complete Sections** - Hero, About, Projects, Skills, Contact, and more
- **Contact Form** - Functional contact form with validation
- **SEO Optimized** - Proper meta tags and semantic HTML

## Sections Included

1. **Header/Navigation** - Fixed navigation with smooth scrolling
2. **Hero Section** - Introduction with call-to-action buttons
3. **About Section** - Personal information and statistics
4. **Projects Section** - Showcase of your work
5. **Skills Section** - Technical skills and technologies
6. **Contact Section** - Contact form and information
7. **Footer** - Additional links and copyright

## Technologies Used

- **Backend**: Node.js, Express.js
- **Template Engine**: EJS
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with Flexbox and Grid
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Poppins)

## Prerequisites

Before running this application, make sure you have the following installed:
- Node.js (version 14 or higher)
- npm (Node Package Manager)

## Installation

1. **Clone or download** the project files to your local machine

2. **Navigate to the project directory**:
   ```bash
   cd portfolio
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** and go to `http://localhost:3000`

## Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with nodemon (auto-restart on file changes)

## Customization

### Personal Information
Edit the `server.js` file to update your personal information:

```javascript
app.get('/', (req, res) => {
    res.render('index', {
        title: 'My Portfolio',
        name: 'Your Name',           // Change this
        role: 'Full Stack Developer', // Change this
        email: 'your.email@example.com', // Change this
        phone: '+1 (555) 123-4567',     // Change this
        location: 'City, Country'        // Change this
    });
});
```

### Content Updates
- **About Section**: Edit the text in `views/index.ejs`
- **Projects**: Add/remove project cards in the projects section
- **Skills**: Modify the skills grid in the skills section
- **Contact Form**: The form is already functional and will log submissions to the console

### Styling
- **Colors**: Update the CSS variables in `public/css/style.css`
- **Layout**: Modify the grid layouts and spacing
- **Animations**: Adjust transition timings and effects

## Project Structure

```
portfolio/
├── server.js              # Main server file
├── package.json           # Dependencies and scripts
├── views/
│   └── index.ejs         # Main EJS template
├── public/
│   ├── css/
│   │   └── style.css     # Main stylesheet
│   └── js/
│       └── script.js     # JavaScript functionality
└── README.md             # This file
```

## Features Explained

### Responsive Navigation
- Fixed header that changes background on scroll
- Mobile hamburger menu for smaller screens
- Smooth scrolling to sections

### Interactive Elements
- Hover effects on project cards and skill items
- Form validation with visual feedback
- Smooth animations on scroll
- Typing effect on the hero title

### Contact Form
- Client-side validation
- Success/error notifications
- Form submission handling (currently logs to console)

### Animations
- Intersection Observer for scroll-triggered animations
- Smooth transitions and hover effects
- Progressive skill item animations

## Deployment

### Local Development
The application runs on `http://localhost:3000` by default.

### Production Deployment
1. Set the `PORT` environment variable if needed
2. Use `npm start` to run the production server
3. Consider using a process manager like PM2 for production

### Environment Variables
- `PORT` - Server port (defaults to 3000)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

Feel free to customize this portfolio for your own use. The code is well-commented and structured for easy modification.

## License

This project is open source and available under the MIT License.

## Support

If you encounter any issues or have questions:
1. Check that all dependencies are installed
2. Ensure Node.js version is 14 or higher
3. Verify the port 3000 is not already in use

## Future Enhancements

Potential improvements you could add:
- Blog section
- Portfolio gallery with lightbox
- Dark/light theme toggle
- Multi-language support
- Blog post management system
- Image upload functionality
- Analytics integration
- SEO optimization tools

---

**Happy coding! 🚀**

