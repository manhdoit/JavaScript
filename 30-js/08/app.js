
let budgetType = 'expenses';
const budgetTitleInput = document.querySelector('.budget-title-input');
const newBudgetValueInput = document.querySelector('.budget-value-input');
const totalIncomeDisplay = document.querySelector('.total-income-value')
const totalExpensesDisplay = document.querySelector('.total-expenses-value');
let totalIncomeValue = 0;
let totalExpensesValue = 0;
const totalBudgetDisplay =  document.querySelector('.total-budget');
let totalBudgetValue = 0 


let timeDisplay = document.querySelector('.time');
const date = new Date();
timeDisplay.innerText = date;
function budgetDisclosur() {

    const budgetSelector = document.querySelector('.budget-selector');
    const disclosurButton = document.querySelector('#budget-disclosure-button');
    const budgetInputTypes = document.querySelectorAll('.budget-input-type-item');
    disclosurButton.addEventListener('click', function() {
        budgetSelector.classList.toggle('disclosure-open');
    })

    window.addEventListener('click', (event) => {
        if( !disclosurButton.contains(event.target) && !budgetSelector.contains(event.target)) {
            budgetSelector.classList.remove('disclosure-open');
        }
    })
    budgetInputTypes.forEach((item) =>{
        item.addEventListener('click', () =>{
            disclosurButton.textContent = item.getAttribute('data-budget-type');
            budgetType = item.getAttribute('data-budget-type');
        })
    })
}

budgetDisclosur();

function addBudget() {
    const budgetTitleInputValue = budgetTitleInput.value
    const newBudgetValue = newBudgetValueInput.value;
    const newBudgetItem = document.createElement('li');
    const newBudgetItemLabel = document.createElement('span');
    const newBudgetItemValue = document.createElement('span');


    if(budgetTitleInputValue == '' || newBudgetValue == '') {
        return;
    }

    newBudgetItemLabel.classList.add(`budget-${budgetType}-item-label`);
    newBudgetItemValue.classList.add(`budget-${budgetType}-item-value`);
    newBudgetItem.classList.add(`budget-${budgetType}-item`);
    newBudgetItemLabel.textContent = budgetTitleInputValue;
    newBudgetItemValue.textContent = newBudgetValue;
    newBudgetItem.appendChild(newBudgetItemLabel);
    newBudgetItem.appendChild(newBudgetItemValue);

    if(budgetType == 'expenses') {
        document.querySelector('.budget-expenses-list').appendChild(newBudgetItem);
        totalExpensesValue = parseFloat(totalExpensesValue) + parseFloat(newBudgetValue);
        totalExpensesValue.toLocaleString();
        totalExpensesDisplay.textContent = totalExpensesValue.toLocaleString();

    } else {
        document.querySelector('.budget-income-list').appendChild(newBudgetItem);
        totalIncomeValue = parseFloat(totalIncomeValue) + parseFloat(newBudgetValue);
        totalIncomeValue.toLocaleString();
        totalIncomeDisplay.textContent = totalIncomeValue.toLocaleString();
    }
    totalBudget (totalIncomeValue, totalExpensesValue);
    clearBudgetValue();
}

function totalBudget (income, expense) {
    totalBudgetValue = income - expense;
    totalBudgetDisplay.textContent = totalBudgetValue;
}

document.querySelector('#add-budget').addEventListener('click', () => {
    addBudget();
})


function clearBudgetValue(){
    budgetTitleInput.value = ''
    newBudgetValueInput.value = ''
}