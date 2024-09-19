let id_text = document.getElementById('id');
let advice_text = document.getElementById('advice');
let btn = document.getElementById('btn');


function get_advice() {
    id_text.textContent = "";
    advice_text.textContent = `Loading`;
    fetch("https://api.adviceslip.com/advice").then(res => res.json()).then(function (data) {
        let {id, advice} = data.slip;
        id_text.textContent = id;
        advice_text.textContent = `"${advice}"`;
    })

}

get_advice();

btn.addEventListener('click', get_advice)





