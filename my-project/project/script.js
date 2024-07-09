// server.js

const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Mock database for access codes
const accessCodes = [];

// Generate a new access code
function generateAccessCode() {
  return crypto.randomBytes(3).toString('hex');
}

// Endpoint to confirm payment and generate access code
app.post('/confirm-payment', (req, res) => {
  const { username, email, paymentCode } = req.body;

  // Validate paymentCode with your payment gateway (Cash App API)
  // For demonstration, assume the payment is valid
  const isValidPayment = true; // Replace with actual validation

  if (isValidPayment) {
    const accessCode = generateAccessCode();
    accessCodes.push({ username, email, accessCode });
    res.json({ success: true, accessCode });
  } else {
    res.json({ success: false, message: 'Invalid payment code' });
  }
});

// Endpoint to verify access code
app.post('/verify-code', (req, res) => {
  const { accessCode } = req.body;
  const codeEntry = accessCodes.find(entry => entry.accessCode === accessCode);

  if (codeEntry) {
    res.json({ success: true, message: 'Access granted', perks: 'Your exclusive perks go here' });
  } else {
    res.json({ success: false, message: 'Invalid access code' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
