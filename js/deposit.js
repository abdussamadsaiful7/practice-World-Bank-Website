document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    const depositTotalElement =document.getElementById('deposit-total');
    const previousDepositAmountString = depositTotalElement.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountString);

    const currentDepositTotalAmount = previousDepositAmount + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotalAmount;


    



    depositField.value ='';
})