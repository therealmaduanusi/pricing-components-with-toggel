let toggleState = document.querySelector('.toggle');
let moneys = document.querySelectorAll('.nums');
let money1 = document.querySelector('.num1');
let money2 = document.querySelector('.num2');
let money3 = document.querySelector('.num3');

let intMoney1 = parseFloat(money1.innerText) + 180
let intMoney2 = parseFloat(money2.innerText) + 225
let intMoney3 = parseFloat(money3.innerText) + 360

toggleState.addEventListener('click', () => {
    let toggles = toggleState.classList.toggle('toggle-state');
    if (toggles) {
        toggleState.classList.remove('toggle');
        money1.innerText = intMoney1.toFixed(2);
        money2.innerText = intMoney2.toFixed(2);
        money3.innerText = intMoney3.toFixed(2);
    } else {
        toggleState.classList.add('toggle');
        money1.innerText = '19.99';
        money2.innerText = '24.99';
        money3.innerText = '39.99';
    }

})
