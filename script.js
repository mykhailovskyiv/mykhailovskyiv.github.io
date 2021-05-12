// let count = document.getElementById("buttonCountNumber");

// document.getElementById("buttonCountPlus").onclick = function () {
//     let countPlus = count.innerHTML;
//     if (countPlus) {
//         count.innerHTML++;
//         console.log('plus')
//     }
// }

// document.getElementById("buttonCountMinus").onclick = function () {
//     let countMinus = count.innerHTML;
//     if (countMinus >= 2) {
//         count.innerHTML--;
//         console.log('minus')
//     }
// }

const btns = document.querySelectorAll('.counter-btn')
btns.forEach(btn => {
    btn.addEventListener('click', function () {
        const direction = this.dataset.direction;
        const inp = this.parentElement.parentElement.querySelector('.count');
        const currentValue = +inp.value;
        let newValue;
        if (direction === 'plus') {
            newValue = currentValue + 1;
        } else {
            newValue = currentValue - 1 > 0 ? currentValue - 1 : 0
        }
        inp.value = newValue;
    })
})