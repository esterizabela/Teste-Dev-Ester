function printX() {
    const numberInput = document.querySelector('#numberInput').value
    const sequenceX = document.querySelector("#sequenceX")
    const x = "X"

    sequenceX.innerHTML = ""

    if (numberInput < 1 || numberInput > 10) {
       return alert("O numero invalido")
    }

    for(let i = 1; i <= numberInput; i++) {
        let xMult = document.createElement('p')
        xMult.innerHTML = x.repeat(i)
        sequenceX.appendChild(xMult)
    }

    for(let i = numberInput - 1; i > 0; i--) {
        let xMult = document.createElement('p')
        xMult.innerHTML = x.repeat(i)
        sequenceX.appendChild(xMult)
    }

}
