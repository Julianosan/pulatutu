const tutu = document.querySelector('.tutu')
const dino = document.querySelector('.dino')

const jump = () => {
    tutu.classList.add('jump')

    setTimeout(() => {
    
    tutu.classList.remove('jump')
    
    }, 500)

    window.getSelection().removeAllRanges()

}

const loop = setInterval(() => {

    const dinoPosition = dino.offsetLeft
    const tutuPosition = +window.getComputedStyle(tutu).bottom.replace('px', '')

    if (dinoPosition <= 60 && dinoPosition > 0 && tutuPosition < 50){
        
        dino.style.animation = 'none'
        dino.style.left = `${dinoPosition}px`

        tutu.style.animation = 'none'
        tutu.style.bottom = `${tutuPosition}px`

        tutu.src = 'tutu-gameover.png'
        tutu.style.width = '40px'
        tutu.style.marginLeft = '10px'

        clearInterval(loop)

    } 


}, 10)


document.addEventListener("click", jump)
