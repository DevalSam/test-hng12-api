const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Route to return required information
app.get('/api/info', (req, res) => {
    res.json({
        email: "edubsam@gmail.com", // Replace with your registered email
        timestamp: new Date().toISOString(),
        github_url: "https://github.com/DevalSam/test-hng12-api" // Replace with your actual GitHub repo URL
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});