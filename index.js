let currentForm = 0;
let btn1 = document.getElementById('btn_1');
let sub = document.getElementsByClassName("subcription_panel");

btn1.addEventListener('click', () => determineForm(currentForm));

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
    currentForm++;

    showForm(currentForm);
}

showForm(currentForm);






