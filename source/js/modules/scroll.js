const introButton = document.querySelector('.intro__link-btn');
const feedback = document.getElementById('feedback');

function initScroll() {
  if (introButton && feedback) {
    introButton.addEventListener('click', function (e) {
      e.preventDefault();
      feedback.scrollIntoView({behavior: 'smooth'});
    });
  }

}

export {initScroll};
