const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Set up multer for file uploads
const upload = multer({
    dest: 'uploads/' // Destination folder for uploaded files
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle POST request to '/upload'
app.post('/upload', upload.single('video'), (req, res) => {
    // Handle the uploaded video here
    const videoFile = req.file;
    console.log('Received video:', videoFile);

    // Example: Send back a success response
    res.status(200).send('Video received and saved!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
