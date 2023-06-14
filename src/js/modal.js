import { Report } from 'notiflix/build/notiflix-report-aio';

const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};

(() => {
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('visually-hidden');
  }
})();

const submitFromBtn = document.querySelector('.modal-submit-button');

const userNameInput = document.querySelector('.name');
const userSurnameInput = document.querySelector('.surname');
const userPhoneInput = document.querySelector('.phone');
const userCommentInput = document.querySelector('.comment');

const user = {
  name: '',
  surname: '',
  phone: '',
  comment: '',
};

submitFromBtn.addEventListener('click', event => {
  event.preventDefault();

  if (
    userNameInput.value < 1 ||
    userSurnameInput.value < 1 ||
    userPhoneInput.value < 1
  ) {
    Report.failure(
      `We can't to call you (`,
      'Please fill out the request form',
      'Okay'
    );
  }
  user.name = userNameInput.value;
  user.surname = userSurnameInput.value;
  user.phone = userPhoneInput.value;
  user.comment = userCommentInput.value;

  refs.modal.classList.toggle('visually-hidden');

  // Зберігаємо об'єкт user на локальному сховищі
  localStorage.setItem('user', JSON.stringify(user));

  Report.success(
    `Thanks for your order, ${user.surname} ${user.name}`,
    'We call you in 5 minutes',
    'Okay'
  );
});

// Перевіряємо, чи є збережений об'єкт user у локальному сховищі при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
  const savedUser = localStorage.getItem('user');
  if (savedUser) {
    // Розпаковуємо збережений об'єкт з локального сховища
    const parsedUser = JSON.parse(savedUser);
    // Оновлюємо значення полів форми збереженими даними
    userNameInput.value = parsedUser.name;
    userSurnameInput.value = parsedUser.surname;
    userPhoneInput.value = parsedUser.phone;
    userCommentInput.value = parsedUser.comment;
  }
});
