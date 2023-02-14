document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldAmountString = withdrawField.value;
    const newWithdrawFieldAmount = parseFloat(withdrawFieldAmountString);

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalAmountString = withdrawTotalElement.innerText;
    const previousWithdrawTotalAmount = parseFloat(previousWithdrawTotalAmountString);

    const currentWithdrawTotalAmount = previousWithdrawTotalAmount + newWithdrawFieldAmount;
    withdrawTotalElement.innerText = currentWithdrawTotalAmount;

    const totalBalance = document.getElementById('balance-total');
    const totalBalanceAmountString = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceAmountString);

    const currentBalanceAmountTotal = totalBalanceAmount - newWithdrawFieldAmount;
    totalBalance.innerText = currentBalanceAmountTotal;

    if(currentBalanceAmountTotal <= 0){
        alert('You have not much Money, please deposit!')

    }

    withdrawField.value ='';
})