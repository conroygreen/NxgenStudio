/*
 * JavaScript interactions for the portfolio site. Handles the parallax
 * scrolling effect by adjusting the background position on scroll and allows
 * visitors to toggle the parallax effect on or off for accessibility.
 */

// Ensure the DOM is loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.getElementById('hero');
  const toggleBtn = document.getElementById('toggle-parallax');

  // Update the background position on scroll for a subtle parallax effect
  function handleScroll() {
    // Only apply the effect when the user has not disabled parallax
    if (!document.body.classList.contains('no-parallax')) {
      const offset = window.pageYOffset;
      // Move the background at half the scroll speed to create depth
      hero.style.backgroundPosition = `center calc(50% + ${offset * 0.5}px)`;
    }
  }

  // Attach the scroll handler
  window.addEventListener('scroll', handleScroll);

  // Toggle parallax on or off when the button is clicked
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('no-parallax');
    // Change button label depending on state
    if (document.body.classList.contains('no-parallax')) {
      toggleBtn.textContent = 'Enable Parallax';
    } else {
      toggleBtn.textContent = 'Disable Parallax';
      // Immediately update position to avoid jump when re-enabling
      handleScroll();
    }
  });

  // On initial load, ensure the parallax positions are set correctly
  handleScroll();
});