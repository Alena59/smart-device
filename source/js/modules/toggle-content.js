const hiddenText = document.querySelector('.about-company__box');
const toggleButton = document.querySelector('.about-company__btn');
const toggleTextMob = document.querySelector('.about-company__text-mob');

if (hiddenText && toggleButton) {
  toggleButton.classList.remove('no-js');
  hiddenText.classList.remove('no-js');
}


function toggleContent() {
  if (hiddenText && toggleButton && toggleTextMob) {
    toggleTextMob.classList.add('is-hidden');
    hiddenText.classList.add('is-hidden');

    toggleButton.addEventListener('click', function () {
      hiddenText.classList.toggle('is-hidden');
      toggleTextMob.classList.toggle('is-hidden');

      if (!hiddenText.classList.contains('is-hidden')) {
        toggleButton.textContent = 'Свернуть';
      } else {
        toggleButton.textContent = 'Подробнее';
      }
    });
  }
}

export {toggleContent};
