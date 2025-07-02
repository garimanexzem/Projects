const balanceEl = document.getElementById('balance');
const incomeEl = document.getElementById('income');
const expensesEl = document.getElementById('expenses');
const transactionListEl = document.getElementById('transaction-list');
const transactionFormEl = document.getElementById('transaction-form');
const discrptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');


let transaction = JSON.parse(localStorage.getItem('transaction')) || [];

transactionFormEl.addEventListener("submit, addTransaction");

function addTransaction(e) {
    e.preventDefault();
}