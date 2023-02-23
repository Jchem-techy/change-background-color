const color = [`red`, `blue`, `crimson`, `yellow`, `green`];
const button = document.querySelector(`.button`);
const body = document.querySelector(`body`);
button.addEventListener(`click`, function (e) {
  let random = Math.floor(Math.random() * color.length);

  let simpleColor = `${color[random]}`;
  body.style.backgroundColor = simpleColor;
});
