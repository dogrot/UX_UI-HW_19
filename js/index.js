console.log("Your index.js file is loaded correctly!");
const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = 'magenta';
  btn.style.color = 'white';
});
