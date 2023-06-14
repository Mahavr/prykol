const leftButton = document.querySelector('.left__button');
const rightButton = document.querySelector('.right__button');
const foodCards = document.querySelectorAll('.food-card__item');

leftButton.addEventListener('click', () => {
  const activeCardIndex = getActiveCardIndex();
  if (activeCardIndex !== -1) {
    removeActiveClass();
    const prevIndex =
      activeCardIndex === 0 ? foodCards.length - 1 : activeCardIndex - 1;
    foodCards[prevIndex].classList.add('food-card__item-active');
  }
});

rightButton.addEventListener('click', () => {
  const activeCardIndex = getActiveCardIndex();
  if (activeCardIndex !== -1) {
    removeActiveClass();
    const nextIndex =
      activeCardIndex === foodCards.length - 1 ? 0 : activeCardIndex + 1;
    foodCards[nextIndex].classList.add('food-card__item-active');
  }
});

function getActiveCardIndex() {
  for (let i = 0; i < foodCards.length; i++) {
    if (foodCards[i].classList.contains('food-card__item-active')) {
      return i;
    }
  }
  return -1;
}

function removeActiveClass() {
  foodCards.forEach(card => {
    card.classList.remove('food-card__item-active');
  });
}
