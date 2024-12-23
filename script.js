const btn = document.getElementById('login');


// login button event handler
btn.addEventListener('click',(e)=>{
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';

    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
});

// deposit button event handler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click',()=>{
  
    const depositNumber = getInputNumber('depositAmount');
   
    updateSpanNumber('current-deposit', depositNumber);

    updateSpanNumber('current-balance', depositNumber);

    document.getElementById('depositAmount').value = '';
});

// withdraw button event handler
const withdrawBtn = document.getElementById('addWithdraw');

withdrawBtn.addEventListener('click',()=>{
    const withdrawNumber = getInputNumber('withdrawAmount');
    updateSpanNumber('current-withdraw', withdrawNumber);
    updateSpanNumber('current-balance', -1*withdrawNumber);

    document.getElementById('withdrawAmount').value = '';
});

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseInt(amount);
    return amountNumber;
}

function updateSpanNumber(id, addedNumber){
    let current = document.getElementById(id).innerText;
    let currNumber = parseFloat(current);
    const total = currNumber+ addedNumber;

    document.getElementById(id).innerText = total;
}

