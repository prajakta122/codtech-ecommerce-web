const express = require('express');
const app = express();
const port = 5500;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('contact', (req, res) => {
    const { name, email, message } = req.body;

    // Sanitize inputs (this is basic, for full security use a library like express-validator)
    const sanitized_name = name.replace(/[<>]/g, '');
    const sanitized_email = email.replace(/[<>]/g, '');
    const sanitized_message = message.replace(/[<>]/g, '');

    // Here you would normally send an email or store the message in a database

    res.send(`Thank you, ${sanitized_name}. Your message has been received.`);
});

app.get('/', (req, res) => {
    res.send('Invalid request.');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
