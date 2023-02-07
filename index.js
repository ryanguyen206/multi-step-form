let currentForm = 0;

console.log(currentForm);

const showForm = (n) => {
    let x  = document.getElementsByClassName("outer-container");
    x[n].style.display = "flex"

}

const determineForm = (n) => {
    let x = document.getElementsByClassName("outer-container");
    x[currentForm].style.display = "none";

    currentForm++;

    showForm(currentForm);
}

showForm(currentForm);

let btn1 = document.getElementById('btn_1');
btn1.addEventListener('click', () => determineForm(currentForm));
console.log(btn1);



