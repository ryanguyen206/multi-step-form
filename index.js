let currentForm = 0;
let btn1 = document.getElementById('btn_1');
let sub = document.getElementsByClassName("subcription_panel");

let prev2 = document.getElementById('prev_2');

let next_buttons = document.getElementsByClassName("next_button");
let prev_buttons = document.getElementsByClassName("prev_button");

Array.from(next_buttons).forEach((button, i) => {
    button.addEventListener('click', () => determineForm(1))
})


Array.from(prev_buttons).forEach((button, i) => {
    button.addEventListener('click', () => determineForm(-1))
})



Array.from(sub).forEach((panel, i) => {
    panel.addEventListener('click', () => toggleChoice(panel))
})


let isChoiceToggled = false;

 function toggleChoice(element) {
    if (!isChoiceToggled && !element.classList.contains("panel_chosen")) {
        element.classList.add("panel_chosen");
        isChoiceToggled = true;
    } else if (!element.classList.contains("panel_chosen") && isChoiceToggled) {
        //remove all classes
        Array.from(sub).forEach((panel) => {
            panel.classList.remove("panel_chosen");
        })
        element.classList.add("panel_chosen");
        isChoiceToggled = true;
    } else if (isChoiceToggled && element.classList.contains("panel_chosen")) {
        element.classList.remove("panel_chosen");
        isChoiceToggled = false;
    }
 }


const showForm = (n) => {
    let x  = document.getElementsByClassName("outer-container");
    x[n].style.display = "flex"
}

const determineForm = (n) => {
    let x = document.getElementsByClassName("outer-container");
  
    x[currentForm].style.display = "none";

    currentForm = currentForm + n;
  
    showForm(currentForm);
}

showForm(currentForm);






