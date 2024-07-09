<?php
// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Validate email address (optional)
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email format");
    }

    // Email details
    $to = "otabbayon08@gmail.com"; // Replace with your email address
    $subject = "New Message from RecipeWonders Contact Form";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    // Send email
    if (mail($to, $subject, $body)) {
        echo "Message sent successfully. We will get back to you soon!";
    } else {
        echo "Failed to send message. Please try again later.";
    }
} else {
    // Redirect back to the contact form if accessed directly
    header("Location: contact-us.html");
    exit;
}
?>
