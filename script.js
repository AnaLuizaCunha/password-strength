const password = document.getElementById('password')
const background = document.getElementById('background')

password.addEventListener('input', (e) => {
    const input = e.target.value // pega o valor do input
    const length = input.length //pede o tamanho do input
    const blurValue = 20 - length * 2
    background.style.filter = `blur(${blurValue}px)` // deixa o background mais focado a cada caractere inserido (senha mais forte)
})