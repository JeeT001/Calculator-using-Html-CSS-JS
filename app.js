let input1 = document.querySelector(".screen");
let input2 = document.querySelector(".screen2");
let answer = document.querySelector(".result");

function add() {

    answer.value = (+input1.value) + (+input2.value);


};

function minus() {
    answer.value = (+input1.value) - (+input2.value);
}

function multiply() {
    answer.value = (+input1.value) * (+input2.value);
}

function divide() {
    answer.value = (+input1.value) / (+input2.value);
}

function remainder() {
    answer.value = (+input1.value) % (+input2.value);
}

function clean() {

    input1.value = "";
    input2.value = "";
    answer.value = "";
}

function exit() {
    let element = document.querySelector('.calculator');

    element.style.display = "none";

    let show = document.querySelector('.thank');
    let h1 = document.createElement('h1');
    h1.innerText = "Thank you for using the calculator. Please refresh the page to use it again :)";
    show.appendChild(h1);

}

// window.onload=function(){//from  ww w  . j a  va 2s. co m
//     var example = document.getElementById('divone');
//     var h1 = document.createElement('h1');
//     h1.innerText = "hi";
//     example.appendChild(h1);
//         }







// (function () {



// })();