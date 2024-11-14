document
  .getElementById("contactForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const submitButton = document.getElementById("submitButton");
    const formData = new FormData(form);

    // Change button to "Submitting..." and disable it
    submitButton.textContent = "Submitting...";
    submitButton.disabled = true;

    try {
      // Send the form data to Formspree
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        // Show success message
        const successMessage = document.getElementById("successMessage");
        successMessage.style.display = "block";

        // Hide success message after 3 seconds
        setTimeout(() => {
          successMessage.style.opacity = "0"; // Fade out
          setTimeout(() => {
            successMessage.style.display = "none";
            successMessage.style.opacity = "1"; // Reset opacity for future messages
          }, 500); // Matches the transition duration in CSS
        }, 3000); // Display duration

        form.reset(); // Clear form fields
      } else {
        alert("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Oops! There was a problem submitting your form.");
    }

    // Revert button to "Send Message" and enable it again
    submitButton.textContent = "Submit";
    submitButton.disabled = false;
  });
