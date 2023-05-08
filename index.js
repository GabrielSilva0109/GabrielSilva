<script src="https://kit.fontawesome.com/2c397d3027.js" crossorigin="anonymous"></script>

const toggleThemeButton = document.querySelector('#toggle-theme-button');
const moonIcon = document.querySelector('.fa-moon');
const sunIcon = document.createElement('i');
sunIcon.classList.add('fa-solid', 'fa-sun');

let isDarkTheme = true;

toggleThemeButton.addEventListener('click', () => {
  if (isDarkTheme) {
    moonIcon.remove();
    toggleThemeButton.appendChild(sunIcon);
    isDarkTheme = false;
  } else {
    sunIcon.remove();
    toggleThemeButton.appendChild(moonIcon);
    isDarkTheme = true;
  }
});