const modalContainer = document.querySelector('[data-modal="feedback"]');
const username = document.querySelector('#modal-input-name');
const phone = document.querySelector('#modal-input-phone');
const modalForm = document.querySelector('#modal-form');
const checkbox = document.querySelector('#modal-agreement');

function validateForm() {
  if (modalContainer && username && phone && modalForm && checkbox) {
    modalContainer.addEventListener('submit', function () {
      if (username.value && phone.value && checkbox.checked) {
        localStorage.setItem('username', username.value);
        localStorage.setItem('phone', phone.value);
        modalForm.submit();
      }
      modalForm.reset();
    });
  }
}

export {validateForm};
