const modalContainer = document.querySelector('[data-modal="feedback"]');
const username = modalContainer.querySelector('[name=username]');
const phone = modalContainer.querySelector('[name=phone]');
const modalForm = modalContainer.querySelector('#modal-form');
const checkbox = modalContainer.querySelector('#modal-agreement');

function validateForm() {
  modalForm.addEventListener('submit', function () {
    if (username.value && phone.value && checkbox.checked) {
      localStorage.setItem('username', username.value);
      localStorage.setItem('phone', phone.value);
      modalForm.submit();
    }
  });
  modalForm.reset();
}


export {validateForm};
