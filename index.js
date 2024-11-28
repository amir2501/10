const id_text = document.getElementById("id");
const advice_text = document.getElementById("advice");
const btn = document.getElementById("btn");
const width = window.innerWidth;

btn.removeAttribute("href");

function get_advice() {
  id_text.textContent = "";
  advice_text.textContent = `Loading`;
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then(function (data) {
      let { id, advice } = data.slip;
      id_text.textContent = id;
      advice_text.textContent = `"${advice}"`;
    });

  if (width < 800) {
    btn.style.boxShadow = "0 0 20px hsl(150, 100%, 66%)";
    btn.style.scale = "0.9";

    setTimeout(() => {
      btn.style.boxShadow = "none";
      btn.style.scale = "1";
    }, 300);
  }
}

get_advice();

btn.addEventListener("click", get_advice);
