const dropdownBtn = document.getElementById('dropdownBtn');
const dropdown = dropdownBtn.parentElement;

dropdownBtn.addEventListener('click', () => {
  dropdown.classList.toggle('open');
  dropdownBtn.classList.toggle('open');
});

document.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('open');
    dropdownBtn.classList.remove('open');
  }
});


//модальное окно(слава богу сделал)
 // Получаем элементы
const modal = document.getElementById('modal');
const openModalBtns = document.querySelectorAll('[data-modal-open]'); // Добавьте data-modal-open к кнопкам
const closeModalBtn = document.getElementById('closeModal');

// Обработчики для открытия модального окна
openModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
  });
});

// Обработчик для закрытия модального окна
closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('active');
  document.body.style.overflow = ''; // Восстанавливаем скролл
});

// Закрытие при клике вне модального окна
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
});



document.getElementById('swap').addEventListener('click', () => {
  const fromInput = document.getElementById('from');
  const toInput = document.getElementById('to');


  const temp = fromInput.value;
  fromInput.value = toInput.value;
  toInput.value = temp;
});




const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(el => el.classList.remove('active'));
    tab.classList.add('active');
    // Здесь можно добавить переключение контента
  });
});
        // Добавляем класс active текущей вкладке и убираем inactive
        this.classList.add('active');
        this.classList.remove('inactive');
















