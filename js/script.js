// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector("#contact-form");
  
    // Handle form submit event
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const nameInput = document.querySelector("#name");
      const messageInput = document.querySelector("#message");
  
      // Send form data to server
      fetch("https://example.com/contact", {
        method: "POST",
        body: JSON.stringify({
          name: nameInput.value,
          message: messageInput.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          // Handle response from server
          if (response.ok) {
            alert("Form submitted successfully!");
            nameInput.value = "";
            messageInput.value = "";
          } else {
            alert("Form submission failed.");
          }
        })
        .catch((error) => {
          console.error("Error submitting form: ", error);
          alert("Form submission failed.");
        });
    });
  
    const contactButton = document.querySelector("#contact");
  
    // Open contact form when contact button is clicked
    contactButton.addEventListener("click", (event) => {
      event.preventDefault();
  
      const contactForm = document.querySelector("#contact-form");
      contactForm.classList.toggle("hidden");
    });
  
    const closeButton = document.querySelector("#btn-end");
  
    // Close contact form when close button is clicked
    closeButton.addEventListener("click", (event) => {
      event.preventDefault();
  
      const contactForm = document.querySelector("#contact-form");
      contactForm.classList.toggle("hidden");
    });
  });
  