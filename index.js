let currentForm = 0;
let btn1 = document.getElementById('btn_1');
let sub = document.getElementsByClassName("subcription_panel");



let next_buttons = document.getElementsByClassName("next_button");
let prev_buttons = document.getElementsByClassName("prev_button");


//form 2 
let prev2 = document.getElementById('prev_2');

let checkbox_yearOrMonth = document.getElementById("checkbox_yearOrMonth");
checkbox_yearOrMonth.addEventListener('click', () => changePeriodSubscription(checkbox_yearOrMonth));

let spanMonthly = document.getElementsByClassName("monthlySlider");
let spanYearly = document.getElementsByClassName("yearlySlider");

const changePeriodSubscription = (slider) => {
    //if checked --> yearly subscription
    if (slider.checked) {

        spanMonthly[0].classList.remove("spanDarkBlue");
        spanMonthly[0].classList.add("spanGrey");
        spanYearly[0].classList.remove("spanGrey");
        spanYearly[0].classList.add("spanDarkBlue");
        addYearlyText();
    } else if (!slider.checked) {
  

        spanMonthly[0].classList.remove("spanGrey");
        spanMonthly[0].classList.add("spanDarkBlue");
        spanYearly[0].classList.remove("spanDarkBlue");
        spanYearly[0].classList.add("spanGrey");
        removeYearlyText();

    }
}

function addYearlyText () {
    let x = document.getElementsByClassName("yearly");
    let y = document.getElementsByClassName("monthly");
    Array.from(y).forEach(element => {
        element.style.display = "none";
    })
    Array.from(x).forEach(element => {
        element.style.display = "block";
    })
}

function removeYearlyText() {

    let x = document.getElementsByClassName("yearly");
    let y = document.getElementsByClassName("monthly");
    Array.from(x).forEach(element => {
        element.style.display = "none";
    })
    Array.from(y).forEach(element => {
        element.style.display = "block";
    })
}


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






