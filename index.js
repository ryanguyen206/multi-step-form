let currentForm = 0;
let btn1 = document.getElementById('btn_1');
let subscription_panels = document.getElementsByClassName("subcription_panel");


//go back and forward buttons
let next_buttons = document.getElementsByClassName("next_button");
let prev_buttons = document.getElementsByClassName("prev_button");


//form 2 
let prev2 = document.getElementById('prev_2');

let checkbox_yearOrMonth = document.getElementById("checkbox_yearOrMonth");
checkbox_yearOrMonth.addEventListener('click', () => changePeriodSubscription(checkbox_yearOrMonth));

let spanMonthly = document.getElementsByClassName("monthlySpan");
let spanYearly = document.getElementsByClassName("yearlySpan");


let panel_chosen;

let isYearly = false;

const changePeriodSubscription = (slider) => {
    //if checked --> yearly subscription
    if (slider.checked) {
        spanMonthly[0].classList.remove("spanDarkBlue");
        spanMonthly[0].classList.add("spanGrey");
        spanYearly[0].classList.remove("spanGrey");
        spanYearly[0].classList.add("spanDarkBlue");
        isYearly = true;
        addYearlyText();
    } else if (!slider.checked) {
        spanMonthly[0].classList.remove("spanGrey");
        spanMonthly[0].classList.add("spanDarkBlue");
        spanYearly[0].classList.remove("spanDarkBlue");
        spanYearly[0].classList.add("spanGrey");
        isYearly = false;
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

Array.from(subscription_panels).forEach((panel, i) => {
    panel.addEventListener('click', () => toggleChoice(panel))
})


let isChoiceToggled = false;

 function toggleChoice(element) {
    if (!isChoiceToggled && !element.classList.contains("panel_chosen")) {
        element.classList.add("panel_chosen");
        isChoiceToggled = true;
    } else if (!element.classList.contains("panel_chosen") && isChoiceToggled) {
        //remove all classes
        Array.from(subscription_panels).forEach((panel) => {
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

    if (currentForm === 2) {
        addOnsPage();
    }

    if (currentForm === 3) {
        confirmPage();
        console.log(isYearly);
    }

    showForm(currentForm);

}

const addOnsPage = () => {
    let changeText = document.getElementsByClassName("bonus");
    if (isYearly) {
        changeText[0].textContent = "+$10/yr";
        changeText[1].textContent = "+$20/yr";
        changeText[2].textContent = "+$20/yr";
    } else {
        changeText[0].textContent = "+$1/mo";
        changeText[1].textContent = "+$2/mo";
        changeText[2].textContent = "+$2/mo";
    }
}








//form 3 page
let sum_dynamic = document.getElementById("summary_dynamic");


const confirmPage = () => {
    let monthly_or_yearly;
    let currentPlanCost;
    let intCurrentPlanCost;
    let panel_chosen = document.getElementsByClassName("panel_chosen")
    let arcade_pro_advanced = (panel_chosen[0].children[1].children[0].textContent);
    
    //get additional services
    let allServices = document.getElementsByClassName("checkbox");
    let arry = Array.from(allServices);
    let selectedAdditonalServices = arry.filter(item => item.checked);
  
   

    if (isYearly) {
        currentPlanCost = (panel_chosen[0].children[1].children[2].textContent);
        intCurrentPlanCost = parseInt(panel_chosen[0].children[1].children[2].dataset.cost);
    } else {
        currentPlanCost = (panel_chosen[0].children[1].children[1].textContent);
        intCurrentPlanCost = parseInt(panel_chosen[0].children[1].children[1].dataset.cost)
    }

    if (checkbox_yearOrMonth.checked) {
        monthly_or_yearly = "(Yearly)";
    } else {
        monthly_or_yearly = "(Monthly)"
    }

    sum_dynamic.innerHTML = 
        `<p class="bold-700">${arcade_pro_advanced} ${monthly_or_yearly} <span class="test test1">${currentPlanCost}</span></p> 
         <p id="change">Change</p>
         <hr>
         <div id="additonalServicesSummary">
         </div>`
     ;

     let totalCost = 0;
    let changeButton = document.getElementById("change");
    changeButton.addEventListener('click', () => determineForm(-2 ))
     let additonalServicesSummary = document.getElementById("additonalServicesSummary");
     selectedAdditonalServices.forEach((item, index) => {
        additonalServicesSummary.innerHTML += `<div class="eachService" <p class="spanGrey">${selectedAdditonalServices[index].parentElement.children[0].children[0].innerHTML}<span class="test">${selectedAdditonalServices[index].parentElement.children[1].innerHTML}</span> </p> </div>
        `
        let newValue = 0;
        if (isYearly) {
             newValue = parseInt(item.dataset.cost) * 10;
        } else {
             newValue = parseInt(item.dataset.cost);
        }
    
        totalCost += newValue;
   
     })

    let totalDiv = document.getElementById("total");
    totalCost += intCurrentPlanCost

    totalDiv.innerHTML = `<p> <span class="spanGrey"> Total: </span> <span class="test3 purple">$${totalCost}</span> </p>`


}


showForm(currentForm);






