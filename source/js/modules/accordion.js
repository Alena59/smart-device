function initAccordion() {

  const accBtns = document.querySelectorAll('.accordion__btn');
  const accTouch = document.querySelectorAll('.accordion__wrapper');
  const listLinks = document.querySelectorAll('.accordion__link');

  accTouch .forEach((item) => item.classList.remove('no-js'));
  accBtns.forEach((item) => item.classList.remove('no-js'));

  function setTabindex() {
    listLinks.forEach((itemLink) => itemLink.setAttribute('tabindex', '-1'));
  }

  function removeTabindex() {
    listLinks.forEach((itemLink) => itemLink.removeAttribute('tabindex'));
  }

  if (screen.width < 768) {
    setTabindex();
  } else {
    removeTabindex();
  }

  accBtns.forEach((item) => {
    item.addEventListener('click', () => {
      let content = item.nextElementSibling;
      if (content.style.maxHeight && item.classList.contains('open')) {
        accBtns.forEach(function (el) {
          el.classList.remove('open');
        });
        accTouch.forEach(function (el) {
          el.style.maxHeight = null;
        });
        setTabindex();
      } else {
        accBtns.forEach(function (el) {
          el.classList.remove('open');
          item.classList.add('open');
        });
        accTouch.forEach(function (el) {
          el.style.maxHeight = null;
          content.style.maxHeight = content.scrollHeight + 'px';
        });
        removeTabindex();
      }
    });
  });
}

export {initAccordion};
