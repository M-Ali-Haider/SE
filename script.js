const espresso=document.getElementById('espresso');
const latte=document.getElementById('latte')
const americano=document.getElementById('americano')
const special=document.getElementById('special')
const mocha=document.getElementById('mocha')

const espressoSub=document.getElementById('espresso-sub');
const latteSub=document.getElementById('latte-sub')
const americanoSub=document.getElementById('americano-sub')
const specialSub=document.getElementById('special-sub')
const mochaSub=document.getElementById('mocha-sub')

const billDetails = document.querySelector('.total-bill');
const espressoBill = document.querySelector('.espresso-bill');
const mochaBill = document.querySelector('.mocha-bill');
const latteBill = document.querySelector('.latte-bill');
const specialBill = document.querySelector('.special-bill');
const americanoBill = document.querySelector('.americano-bill');

let numberEspresso=0;
let numberMocha=0;
let numberLatte=0;
let numberAmericano=0;
let numberSpecial=0;
let amount=0;
billDetails.innerHTML = `<span>Total Amount:</span> $${amount}`;

// Add to Cart Functionality

espresso.addEventListener('click',()=>{
    numberEspresso++;
    amount+=30;
    billDetails.innerHTML = `Total Amount: $${amount}`;
    espressoBill.innerHTML = `<span>Espresso </span> x${numberEspresso}`;
    console.log(amount);
})
mocha.addEventListener('click',()=>{
    numberMocha++;
    amount+=70;
    billDetails.innerHTML = `Total Amount: $${amount}`;
    console.log(amount);
    mochaBill.innerHTML = `<span>Mocha </span> x${numberMocha}`;

})
latte.addEventListener('click',()=>{
    numberLatte++;
    amount+=50;
    billDetails.innerHTML = `Total Amount: $${amount}`;
    console.log(amount);
    latteBill.innerHTML = `<span>Latte </span> x${numberLatte}`;

})
americano.addEventListener('click',()=>{
    numberAmericano++;
    amount+=60;
    billDetails.innerHTML = `Total Amount: $${amount}`;
    console.log(amount);
    americanoBill.innerHTML = `<span>Americano </span> x${numberAmericano}`;

})
special.addEventListener('click',()=>{
    numberSpecial++;
    amount+=100;
    billDetails.innerHTML = `Total Amount: $${amount}`;
    console.log(amount);
    specialBill.innerHTML = `<span>Special </span> x${numberSpecial}`;

})


// Remove From Card Functionality

espressoSub.addEventListener('click',()=>{
    if(numberEspresso!=0){
        numberEspresso--;
        amount-=30;
        if(numberEspresso==0){
            espressoBill.innerHTML=``;
        }
        else{
            espressoBill.innerHTML = `<span>Espresso </span> x${numberEspresso}`;
        }
        billDetails.innerHTML = `Total Amount: $${amount}`;
        console.log(amount);
    }
})
mochaSub.addEventListener('click',()=>{
    if(numberMocha!=0){
        numberMocha--;
        amount-=70;
        if(numberMocha==0){
            mochaBill.innerHTML=``;
        }
        else{
            mochaBill.innerHTML = `<span>Mocha </span> x${numberMocha}`;
        }
        console.log(amount);
        billDetails.innerHTML = `Total Amount: $${amount}`;
    }
})
latteSub.addEventListener('click',()=>{
    if(numberLatte!=0){
        numberLatte--;
        amount-=50;
        if(numberLatte==0){
           latteBill.innerHTML=``;
        }
        else{
            latteBill.innerHTML = `<span>Latte </span> x${numberLatte}`;
        }
        console.log(amount);
        billDetails.innerHTML = `Total Amount: $${amount}`;
    } 
})
americanoSub.addEventListener('click',()=>{
    if(numberAmericano!=0){
        numberAmericano--;
        amount-=60;
        if(numberAmericano==0){
            americanoBill.innerHTML = ``;
        }
        else{
            americanoBill.innerHTML = `<span>Americano </span> x${numberAmericano}`;
        }
        console.log(amount);
        billDetails.innerHTML = `Total Amount: $${amount}`;
    }
})
specialSub.addEventListener('click',()=>{
    if(numberSpecial!=0){
        numberSpecial--;
        amount-=100;
        if(numberSpecial==0){
            specialBill.innerHTML = ``;
        }
        else{
            specialBill.innerHTML = `<span>Special </span> x${numberSpecial}`;
        }
        console.log(amount);
        billDetails.innerHTML = `Total Amount: $${amount}`;
    }
})

