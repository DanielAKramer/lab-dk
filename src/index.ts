import './styles.css';

const amountPaid = document.getElementById('amountPaid') as HTMLInputElement;

// tip info
const tipPercent = document.getElementById('tipPercent') as HTMLSpanElement;
const tenPercent = document.getElementById('tipTen') as HTMLInputElement;
const fifteenPercent = document.getElementById('tipFifteen') as HTMLInputElement;
const twentyPercent = document.getElementById('tipTwenty') as HTMLInputElement;

// total display info
const billAmount = document.getElementById('billAmount') as HTMLSpanElement;
const tipPercentTotal = document.getElementById('tipPercentTotal') as HTMLSpanElement;
const tipTotal = document.getElementById('tipTotal') as HTMLSpanElement;
const totalToPay = document.getElementById('totalToPay') as HTMLSpanElement;


tenPercent.addEventListener('click', function () {
    const tipAmount = 10;
    const amtPaid = amountPaid.valueAsNumber;
    const result = amtPaid * .10;
    const total = result + amtPaid;

    totalToPay.innerHTML = total.toString();
    billAmount.innerText = amtPaid.toString();
    tipPercentTotal.innerText = tipAmount.toString();
    tipPercent.innerText =  tipAmount.toString() ;
    tipTotal.innerText = result.toString();

});

fifteenPercent.addEventListener('click', function () {
    const tipAmount = 15;
    const amtPaid = amountPaid.valueAsNumber;
    const result = amtPaid * .15;
    const total = result + amtPaid;

    totalToPay.innerHTML = total.toString();
    billAmount.innerText = amtPaid.toString();
    tipPercent.innerText =  tipAmount.toString() ;
    tipPercentTotal.innerText = tipAmount.toString();
    tipTotal.innerText = result.toString();
});

twentyPercent.addEventListener('click', function () {
    const tipAmount = 20;
    const amtPaid = amountPaid.valueAsNumber;
    const result = amtPaid * .20;
    const total = result + amtPaid;

    totalToPay.innerHTML = total.toString(); 
    billAmount.innerText = amtPaid.toString();
    tipPercentTotal.innerText = tipAmount.toString();
    tipPercent.innerText =  tipAmount.toString() ;
    tipTotal.innerText = result.toString();
});



