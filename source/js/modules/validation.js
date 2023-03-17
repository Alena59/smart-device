const username = document.querySelector('.modal [name=username]');
const phone = document.querySelector('.modal [name=phone]');
const modalForm = document.querySelector('#modal-form');
const checkbox = document.querySelector('#modal-agreement');

function validateForm() {
  if (username && phone && modalForm && checkbox) {
    modalForm.addEventListener('submit', function () {
      if (username.value && phone.value && checkbox.checked) {
        localStorage.setItem('username', username.value);
        localStorage.setItem('phone', phone.value);
        modalForm.submit();
      }
    });
    modalForm.reset();
  }
}

export {validateForm};
