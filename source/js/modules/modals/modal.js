const openModalBtn = document.querySelector('[data-modal="open-modal"]');
const modalContainer = document.querySelector('[data-modal="feedback"]');
const closeModalBtn = document.querySelector('[data-modal="close-modal"]');
const userName = document.getElementById('modal-input-name');
const body = document.getElementById('body');

let lastFocus;
lastFocus = document.activeElement;

function openModal() {
  if (openModalBtn && modalContainer && body && userName) {
    openModalBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      e.preventDefault();
      modalContainer.classList.toggle('is-closed');
      body.style.overflow = 'hidden';
      modalContainer.setAttribute('tabindex', '0');
      userName.focus();
    });
  }
}

function prepareClosingModal() {
  modalContainer.classList.toggle('is-closed');
  body.style.overflow = 'scroll';
}

function closeModal() {
  if (modalContainer) {
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        prepareClosingModal();
        modalContainer.classList.add('is-closed');
        lastFocus.focus();
      }
    });

    modalContainer.addEventListener('keydown', function (e) {
      if (e.keyCode === 9) {
        let focusable = modalContainer.querySelectorAll('input,textarea, button');
        if (focusable.length) {
          let first = focusable[0];
          let last = focusable[focusable.length - 1];
          let shift = e.shiftKey;
          if (shift) {
            if (e.target === first) {
              last.focus();
              e.preventDefault();
            }
          } else {
            if (e.target === last) {
              first.focus();
              e.preventDefault();
            }
          }
        }
      }
    });

    document.addEventListener('click', function (e) {
      if (e.target === modalContainer || e.target === closeModalBtn) {
        prepareClosingModal();
      }
    });
  }
}

function focusRestrict() {
  document.addEventListener('focus', function (e) {
    if (openModalBtn && !modalContainer.contains(e.target)) {
      e.stopPropagation();
      modalContainer.focus();
    }
  }, true);
}

focusRestrict();

export {openModal, closeModal};
