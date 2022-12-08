//Import Statement
// Variables
const numbers = document.getElementById('numbers')


const giveMeNumbers = () => {
    let numberContainer = [];
    for(let i = 0; i < 12; i++){
        const numbersFinder = Math.floor((Math.random() * 100) + 1);
        numberContainer.push(numbersFinder)
        numberContainer.sort(function(a,b){
            return a-b;
        })
    }
    numbers.innerHTML = numberContainer;
}

const closeTab = () => {
    window.open('http://www.google.it')
}

const help = () => {
    alert('Good job!', 'Youclicked the button', 'success')
}