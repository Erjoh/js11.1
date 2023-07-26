const input = document.querySelector('#input')
const start = document.querySelector('#start')
const res = document.querySelector('#res')

const handleCheckAns = () => {
    const randonNum = Math.floor(Math.random() * 10) + 1;
    const innerInput = parseInt(input.value);
    if (innerInput >= 1 && innerInput <= 10) {
        if (innerInput === 6){
            return 'Ty vyigral'
        } else {
            return 'Davai esche raz'
        }
    } else {
        return 'Chislo dolzhno bytь bolьshe 0 i menьshe 10'
    }
}

start.addEventListener('click', () => {
    const result = handleCheckAns()
    res.innerHTML = result
})