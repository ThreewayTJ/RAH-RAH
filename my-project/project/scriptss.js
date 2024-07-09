// scripts.js

// Function to handle Stripe payment method submission
function stripePaymentMethodHandler(paymentMethod) {
    // For demonstration purposes, you can alert the payment method ID.
    alert('Payment successful! Payment Method ID: ' + paymentMethod.id);

    // Optionally, you can send the payment method ID to your server for further processing.
    // Replace '/process-payment' with your server endpoint URL.
    fetch('/process-payment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ payment_method_id: paymentMethod.id }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        // Handle successful payment response as needed.
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle error
    });
}
