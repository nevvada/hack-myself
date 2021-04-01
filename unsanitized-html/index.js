const form = document.querySelector('#form');
const textArea = document.querySelector('#text-area');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const textInputValue = event.target[0].value;

  textArea.innerHTML = textInputValue;
});
