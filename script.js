const btnQuote = document.getElementById('quote');
const modal = document.querySelector('.modal-get-a_quote');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.btn-close');
btnQuote.addEventListener('click', function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

closeBtn.addEventListener('click', function (e) {
  e.preventDefault();
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
