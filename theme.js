// DARK MODE
document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("dark-mode-toggle");

  console.log("Dark mode toggle script running...");

  // Function to enable dark mode
  function enableDarkMode() {
    console.log("Enabling dark mode...");
    document.body.classList.add("dark-mode");
    document
      .querySelectorAll(
        ".hero, .green, #my, #pro-link-btn, #hb-menu, .contact-btn, .pro, .project-image, #about, .contact-header, #contact-section, .contact_form, .skill, .skill-icon, .stack, .ft-icon, .box"
      )
      .forEach((section) => {
        section.classList.add("dark-mode");
      });
  }

  // Function to disable dark mode
  function disableDarkMode() {
    console.log("Disabling dark mode...");
    document.body.classList.remove("dark-mode");
    document
      .querySelectorAll(
        ".hero, .green, #my, #pro-link-btn, #hb-menu, .contact-btn, .pro, .project-image, #about, .contact-header, #contact-section, .contact_form, .skill, .skill-icon, .stack, .ft-icon, .box"
      )
      .forEach((section) => {
        section.classList.remove("dark-mode");
      });
  }

  // Check localStorage and apply dark mode if enabled
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  console.log("Is dark mode set?", isDarkMode);

  if (isDarkMode) {
    enableDarkMode();
    if (darkModeToggle) darkModeToggle.checked = true; // Set toggle checked if in dark mode
  } else {
    disableDarkMode();
    if (darkModeToggle) darkModeToggle.checked = false; // Set toggle unchecked if in light mode
  }

  // Add event listener to the toggle switch
  if (darkModeToggle) {
    darkModeToggle.addEventListener("change", () => {
      if (darkModeToggle.checked) {
        enableDarkMode();
        localStorage.setItem("darkMode", "true"); // Save dark mode state in localStorage
      } else {
        disableDarkMode();
        localStorage.setItem("darkMode", "false"); // Save light mode state in localStorage
      }
      console.log(
        "Updated dark mode setting:",
        localStorage.getItem("darkMode")
      );
    });
  }
});

// Function to disable dark mode
/* function disableDarkMode() {
  document.body.classList.remove("dark-mode");
  document
    .querySelectorAll(".hero, .pro, #about, #contact-section")
    .forEach((section) => {
      if (section) section.classList.remove("dark-mode");
    });
}
 */
