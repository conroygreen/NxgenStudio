/*
  script.js

  This script adds interactive behaviors to the portfolio site. It implements
  the parallax toggle switch, dynamically inserts the current year in the
  footer, and provides a simple message confirmation when the contact form
  is submitted. The parallax toggle responds to user interaction and
  automatically disables the fixed background on smaller screens to ensure
  performance and accessibility【304008305831413†L238-L263】【918071282569727†L64-L73】.
*/

document.addEventListener('DOMContentLoaded', function () {
  // Set the current year in the footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const toggle = document.getElementById('toggle-parallax');
  const hero = document.querySelector('.hero');
  const label = document.querySelector('.toggle-label');

  // Helper to update the hero's background-attachment based on state
  function updateParallax() {
    // On small screens always disable parallax for performance
    if (window.innerWidth < 768 || (toggle && toggle.checked)) {
      hero.style.backgroundAttachment = 'scroll';
      if (label) label.textContent = 'Enable Parallax';
    } else {
      hero.style.backgroundAttachment = 'fixed';
      if (label) label.textContent = 'Disable Parallax';
    }
  }

  // Listen to changes on the checkbox to toggle parallax
  if (toggle) {
    toggle.addEventListener('change', updateParallax);
  }

  // Update parallax state on resize
  window.addEventListener('resize', updateParallax);

  // Initial call to set correct state on load
  updateParallax();

  // Simple form submission handler. Prevents default submission and shows a message.
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      alert('Thank you for your message! I will get back to you soon.');
      form.reset();
    });
  }
});