const btnQuote = document.getElementById('quote');
const modal = document.querySelector('.modal-get-a_quote');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelectorAll('.btn-close');
const getStarted = document.querySelector('.get-started');
const getBtn = document.querySelectorAll('.get-btn');

getBtn.forEach(btn =>
  btn.addEventListener('click', function (e) {
    getStarted.classList.remove('hidden');
    overlay.classList.remove('hidden');
  })
);

btnQuote.addEventListener('click', function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

closeBtn.forEach(btn =>
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    getStarted.classList.add('hidden');
  })
);
