


// 

let Priceth = document.querySelector('.pricing-my th');
let mmobilePrice = document.querySelector('.mobile-price');
let mbasicPrice = document.querySelector('.basic-price');
let mstandardPrice = document.querySelector('.standard-price');
let mpremiumPrice = document.querySelector('.premium-price');
let my_toggle = document.querySelector('#color_mode');
let mvalue = true;
my_toggle.addEventListener('click',function(){
if(mvalue){
    Priceth.innerHTML = "Yearly Price";
    mmobilePrice.innerHTML="₹ 1000";
    mbasicPrice.innerHTML="₹ 2000";
    mstandardPrice.innerHTML="₹ 5000";
    mpremiumPrice.innerHTML="₹ 7000";
    mvalue=!mvalue;
}
else{
    Priceth.innerHTML = "Monthly Price";
    mmobilePrice.innerHTML="₹ 100";
    mbasicPrice.innerHTML="₹ 200";
    mstandardPrice.innerHTML="₹ 500";
    mpremiumPrice.innerHTML="₹ 700";
    mvalue=!mvalue;

}

})
//
let mobileplanBuyBtn = document.querySelector('.mobile-head');
let basicplanBuyBtn = document.querySelector('.basic-head ');
let standardplanBuyBtn = document.querySelector('.standard-head ' );
let premiumplanBuyBtn = document.querySelector('.premium-head ');

const paymentDiv = document.querySelector(".payment-gateway");
const choosePlanDiv = document.querySelector(".choose-plans");
let selectedprice =0;
let selectedPlan = "";
let selectedCycle = "";
// let osum_price = document.querySelector('osum-price');
mobileplanBuyBtn.addEventListener('click', function() {
    choosePlanDiv.classList.toggle('hidden-div');
    paymentDiv.classList.toggle('hidden-div');
    if(mvalue){
        selectedprice = 100;
        selectedCycle = "Monthly";
    }
    else{
        selectedprice = 1000;
        selectedCycle = "Yearly";
    }
    selectedPlan ="Mobile";
    
    // console.log(selectedprice);
    let osum_price = document.querySelector('.osum-price');
    document.querySelector('.osum-plan').innerHTML = selectedPlan;
    document.querySelector('.osum-cycle').innerHTML =selectedCycle;
    osum_price.innerHTML='₹ '+selectedprice;
    
});

basicplanBuyBtn.addEventListener('click', function() {
    choosePlanDiv.classList.toggle('hidden-div');
    paymentDiv.classList.toggle('hidden-div');
    if(mvalue){
        selectedprice = 200;
        selectedCycle = "Monthly";
    }
    else{
        selectedprice = 2000;
        selectedCycle = "Yearly";
    }
    selectedPlan ="Basic";
    let osum_price = document.querySelector('.osum-price');
    document.querySelector('.osum-plan').innerHTML = selectedPlan;
    document.querySelector('.osum-cycle').innerHTML =selectedCycle;
    osum_price.innerHTML='₹ '+selectedprice;
});

standardplanBuyBtn.addEventListener('click', function() {
    choosePlanDiv.classList.toggle('hidden-div');
    paymentDiv.classList.toggle('hidden-div');
    if(mvalue){
        selectedprice = 500;
        selectedCycle = "Monthly";
    }
    else{
        selectedprice = 5000;
        selectedCycle = "Yearly";
    }
    selectedPlan ="Standard";
    
    let osum_price = document.querySelector('.osum-price');
    document.querySelector('.osum-plan').innerHTML = selectedPlan;
    document.querySelector('.osum-cycle').innerHTML =selectedCycle;
    osum_price.innerText='₹ '+selectedprice;
});

premiumplanBuyBtn.addEventListener('click', function() {
    choosePlanDiv.classList.toggle('hidden-div');
    paymentDiv.classList.toggle('hidden-div');
    if(mvalue){
        selectedprice = 700;
        selectedCycle = "Monthly";
    }
    else{
        selectedprice = 7000;
        selectedCycle = "Yearly";
    }
    selectedPlan ="Premium";
    let osum_price = document.querySelector('.osum-price');
    document.querySelector('.osum-plan').innerHTML = selectedPlan;
    document.querySelector('.osum-cycle').innerHTML =selectedCycle;
    osum_price.innerHTML='₹ '+selectedprice;
});
 