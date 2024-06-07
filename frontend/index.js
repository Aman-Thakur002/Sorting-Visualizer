const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "frontend/public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to set the correct Content-Type for JavaScript files
app.use((req, res, next) => {
    if (req.url.endsWith('.js')) {
        res.setHeader('Content-Type', 'text/javascript');
    }
    next();
});

// Send the main HTML file for any other request
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
