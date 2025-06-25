// Responsive Navbar Toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.querySelector('.navbar nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function() {
      nav.classList.toggle('show');
    });
  }

  // Pricing Toggle (Monthly/Yearly)
  const priceSwitch = document.getElementById('price-switch');
  if (priceSwitch) {
    const cards = document.querySelectorAll('.pricing-card .price');
    const monthlyLabel = document.getElementById('monthly-label');
    const yearlyLabel = document.getElementById('yearly-label');
    priceSwitch.addEventListener('change', function() {
      cards.forEach(card => {
        const monthly = card.getAttribute('data-monthly');
        const yearly = card.getAttribute('data-yearly');
        card.textContent = priceSwitch.checked ? yearly : monthly;
      });
      // Visual feedback for toggle labels
      if (priceSwitch.checked) {
        yearlyLabel.classList.add('active');
        monthlyLabel.classList.remove('active');
      } else {
        monthlyLabel.classList.add('active');
        yearlyLabel.classList.remove('active');
      }
    });
  }
});