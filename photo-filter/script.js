let inputs = document.querySelectorAll(".filters input");
function hand() {
  let index = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + index);
  let output = document.querySelector(`input[name="${this.name}"] + output`);
  output.value = this.value;
}
inputs.forEach(input => input.addEventListener("input", hand));

const fulls = document.querySelector(".fullscreen");
function fullScreen(){
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {document.exitFullscreen();
    }
}
fulls.addEventListener('click', fullScreen);

let bthreset = document.querySelector(".btn-reset");
let outputs = document.querySelectorAll(".filters output");

bthreset.addEventListener('click', () => {
  inputs.forEach((input, i) => {
    if (input.name=="saturate") {
      input.value = 100;
      outputs[i].value = 100;
    } else {
      input.value = 0;
      outputs[i].value = 0;
    }
  });
  document.documentElement.style = "";
});



