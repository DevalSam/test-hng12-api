const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Redirect root route to /api/info
app.get('/', (req, res) => {
    res.redirect('/api/info');
});

// Route to return required information
app.get('/api/info', (req, res) => {
    const response = {
        email: "your-email@domain.com", // Replace with your registered email
        timestamp: new Date().toISOString(),
        github_url: "https://github.com/yourusername/your-repo" // Replace with your actual GitHub repo URL
    };

    // Prettify JSON response with 2-space indentation
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(response, null, 2));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});