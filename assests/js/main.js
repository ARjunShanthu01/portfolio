function toggleDarkMode() {
    document.body.classList.toggle('light-mode'); 
    var icon = document.getElementById('brightnessIcon');
    icon.classList.toggle('rotateIcon');

}



const navbar = document.getElementById('Navbar');
const toggleButton = document.getElementById('NavButton');

// Add event listener to the toggle button
toggleButton.addEventListener('click', function() {
  // Toggle the 'active' class on the navbar
  navbar.classList.toggle('active');
});
