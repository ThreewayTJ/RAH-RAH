// scripts.js

async function confirmPayment() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const paymentCode = document.getElementById('payment-code').value;
  
    if (username && email && paymentCode) {
      const response = await fetch('/confirm-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, paymentCode })
      });
  
      const data = await response.json();
  
      if (data.success) {
        alert(`Payment confirmed! Your access code is: ${data.accessCode}`);
        // Store the access code in localStorage or prompt the user to save it
        localStorage.setItem('accessCode', data.accessCode);
      } else {
        alert(data.message);
      }
    } else {
      alert('Please fill in all fields and enter a valid payment confirmation code.');
    }
  }
  
  async function verifyAccessCode() {
    const accessCode = prompt('Enter your access code:');
    
    if (accessCode) {
      const response = await fetch('/verify-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accessCode })
      });
  
      const data = await response.json();
  
      if (data.success) {
        alert(data.message);
        // Grant access to perks here, e.g., redirect to exclusive content
        document.getElementById('perks').innerText = data.perks;
      } else {
        alert(data.message);
      }
    } else {
      alert('Please enter a valid access code.');
    }
  }
  
  // Add event listener to the payment form button
  document.addEventListener('DOMContentLoaded', function() {
    const confirmButton = document.querySelector('button');
    confirmButton.addEventListener('click', confirmPayment);
  
    // Verify access code on page load or user action
    const verifyButton = document.querySelector('#verify-button');
    if (verifyButton) {
      verifyButton.addEventListener('click', verifyAccessCode);
    }
  });
  