// scripts.js

function confirmPayment() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const paymentCode = document.getElementById('payment-code').value;

    if (username && email && paymentCode) {
        // This is where you would typically send the data to your server for validation
        // For demonstration, we'll just show an alert
        alert(`Payment confirmed for ${username} with email ${email}. Thank you!`);
    } else {
        alert('Please fill in all fields and enter a valid payment confirmation code.');
    }
}

// Add an event listener to the form submit button
document.addEventListener('DOMContentLoaded', function() {
    const confirmButton = document.querySelector('button');
    confirmButton.addEventListener('click', confirmPayment);
});
