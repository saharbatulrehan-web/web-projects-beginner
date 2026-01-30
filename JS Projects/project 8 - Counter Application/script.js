let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
  btn.addEventListener("click", e => {
    if (e.currentTarget.id === 'decrease') count--;
    else if (e.currentTarget.id === 'increase') count++;
    else count = 0;

    value.textContent = count;
    value.style.color = count > 0 ? "green" : count < 0 ? "red" : "black";
  });
});