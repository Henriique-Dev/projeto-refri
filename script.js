let list = document.querySelectorAll('.item')
let next = document.getElementById('next')
let prev = document.getElementById('prev')

let c = list.length;
let ativo = 0

next.onclick = () => {
    let ativoOld = document.querySelector('.ativo')
    ativoOld.classList.remove('ativo')

    ativo = ativo >= c -1 ? 0 : ativo + 1
    list[ativo].classList.add('ativo')
}

prev.onclick = () => {
    let ativoOld = document.querySelector('.ativo')
    ativoOld.classList.remove('ativo')

    ativo = ativo <= 0 ? c -1 : ativo - 1
    list[ativo].classList.add('ativo')
}
