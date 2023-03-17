const openModalBtn = document.querySelector('[data-modal="open-modal"]');
const modalContainer = document.querySelector('[data-modal="feedback"]');
const closeModalBtn = document.querySelector('[data-modal="close-modal"]');
const userName = document.getElementById('modal-input-name');
const body = document.getElementById('body');
const wrapper = document.getElementById('wrapper');

const INTERACTIVE_ELEMENTS = ['button', 'a', 'input', 'textarea', '[tabindex]'];
const interactiveElementsArr = wrapper.querySelectorAll(INTERACTIVE_ELEMENTS);

function openModal() {
  if (openModalBtn && modalContainer && body && userName) {
    openModalBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      e.preventDefault();
      modalContainer.classList.toggle('is-closed');
      setTimeout(userName.focus(), 2000);
      body.style.overflow = 'hidden';
      interactiveElementsArr.forEach((element) => {
        element.setAttribute('tabindex', '-1');
      });
    });
  }
}

function prepareClosingModal() {
  modalContainer.classList.toggle('is-closed');
  body.style.overflow = 'scroll';
  interactiveElementsArr.forEach((element) => {
    element.setAttribute('tabindex', '1');
  });
}

function closeModal() {
  if (modalContainer && closeModalBtn) {
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        prepareClosingModal();
        modalContainer.classList.add('is-closed');
      }
    });

    document.addEventListener('click', function (e) {
      if (e.target === modalContainer || e.target === closeModalBtn) {
        prepareClosingModal();
      }
    });
  }
}

export {openModal, closeModal};
