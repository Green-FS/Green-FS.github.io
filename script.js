document
  .querySelector(".subscribe-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    console.log(`Email submitted: ${email}`);
    // You can add code here to send this email to your backend or email service
    alert("Thank you for subscribing!");
    event.target.reset(); // Reset the form
  });
