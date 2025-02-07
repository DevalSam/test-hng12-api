const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the HNG12 API! Visit <a href="/api/info">/api/info</a> for the API response.');
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