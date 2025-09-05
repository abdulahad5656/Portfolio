const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Abdul Ahad Portfolio',
        name: 'Abdul Ahad',
        role: 'Full Stack Developer & Flutter Developer',
        email: 'ahad26425@gmail.com',
        phone: '+92 315 6913255',
        location: 'Lahore, Pakistan'
    });
});

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    // Here you would typically send an email or save to database
    console.log('Contact form submission:', { name, email, message });
    
    // For demo purposes, just redirect back with success
    res.redirect('/?success=true');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
