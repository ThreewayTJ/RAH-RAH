const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: true }));

app.post('/submit_form.html', (req, res) => {
    const { username, email, password, diet, allergies } = req.body;
    // Handle user data, store in database, and create session
    req.session.user = { username, email, diet, allergies };
    res.redirect('/dashboard.html');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
