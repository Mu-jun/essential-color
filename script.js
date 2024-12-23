function toggleMenu() {
  const menu = document.getElementById('floatingMenu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

const carousel = document.querySelector('#reviewCarousel');
let startX, endX;

// Handle touchstart event
carousel.addEventListener('touchstart', (event) => {
  startX = event.touches[0].clientX;
});

// Handle touchend event
carousel.addEventListener('touchend', (event) => {
  endX = event.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  if (startX - endX > 50) {
    // Swipe left
    const nextButton = carousel.querySelector('.carousel-control-next');
    nextButton.click();
  } else if (endX - startX > 50) {
    // Swipe right
    const prevButton = carousel.querySelector('.carousel-control-prev');
    prevButton.click();
  }
}
