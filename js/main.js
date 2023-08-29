const subscribeBtn = document.getElementById('subscribe-btn');
const dismissBtn = document.getElementById('dismiss-btn');
const emailEntered = document.getElementById('email-entered');
const emailInsert = document.getElementById('email-insert');
const container = document.querySelector('.container');
const toaster = document.querySelector('.success-message');

let email;

subscribeBtn.addEventListener('click', () => {
  
  container.classList.toggle('d-none');
  toaster.classList.toggle('d-none');
});
