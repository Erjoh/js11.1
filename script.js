const input = document.querySelector('#input')
const start = document.querySelector('#start')
const res = document.querySelector('#res')
const resran = document.querySelector('#resoftandom')

const handleCheckAns = () => {
    const randonNum = Math.floor(Math.random() * 10) + 1;
    const innerInput = parseInt(input.value);
    if (innerInput >= 1 && innerInput <= 10) {
        if (innerInput === randonNum){
            return `Ty vyigral, randomnym chislom bylo ${randonNum}`
        } else {
            return `Davai esche raz, randomnym chislom bylo ${randonNum}`
        }
    } else {
        return 'Chislo dolzhno bytь bolьshe 0 i menьshe ili ravnym10'
    }
}

start.addEventListener('click', () => {
    const result = handleCheckAns()
    res.innerHTML = result
})