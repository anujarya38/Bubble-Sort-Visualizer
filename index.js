const it0 = document.getElementById("it0");
const it1 = document.getElementById("it1");
const it2 = document.getElementById("it2");
const it3 = document.getElementById("it3");
const it4 = document.getElementById("it4");
const btn = document.getElementById("btn");
var input = document.getElementsByName("array[]");
let j = 0;

function getid(i) {
    if (i == 0) return it0;
    else if (i == 1) return it1;
    else if (i == 2) return it2;
    else if (i == 3) return it3;
    else return it4;
}

function sort(k) {
    i = 0;
    for (; i < 4 - k; i++) {
        task(i);
    }
    setTimeout(() => {
        getid(4 - k).style.backgroundColor = 'green';
    }, (4 - k) * 1000);
}

btn.addEventListener("click", () => {
    setInterval(() => {
        sort(j++);
    }, 5000);
});

function task(i) {
    setTimeout(function() {
        getid(i).classList.add('scale');
        setTimeout(() => {
            getid(i).classList.remove('scale');
        }, 600);
        if (parseInt(getid(i).value) > parseInt(getid(i + 1).value)) {
            getid(i).classList.add('blink');
            getid(i + 1).classList.add('blink');
            temp = getid(i).value;
            getid(i).value = getid(i + 1).value;
            getid(i + 1).value = temp;
        }
    }, 1000 * i);
}