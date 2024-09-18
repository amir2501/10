let id_text = document.getElementById('id');
let advice_text = document.getElementById('advice');
let btn = document.getElementById('btn');


(async function () {
    fetch("https://api.adviceslip.com/advice").then(res => res.json()).then(function (data) {
        let {id, advice} = data.slip;
        id_text.textContent = id;
        advice_text.textContent = `"${advice}"`;
    })
})();

btn.addEventListener('click', async function () {
    id_text.textContent = "";
    advice_text.textContent = `Loading`;
    fetch("https://api.adviceslip.com/advice").then(res => res.json()).then(function (data) {
        let {id, advice} = data.slip;
        id_text.textContent = id;
        advice_text.textContent = `"${advice}"`;

        let width = screen.width;

        if(width > 800) {

        }
    })

})





