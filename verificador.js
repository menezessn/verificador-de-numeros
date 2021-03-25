let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function IsNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100) {
    return true
    } else {
    return false
}
}
function InLista(n , l){
    if (l.indexOf(Number(n)) != -1 ){
        return true
    } else{
        return false
    }
}

function adicionar(){

    if(IsNumero(num.value) && !InLista(num.value , valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Número ${Number(num.value)} adicionado`
        lista.appendChild(item)
        res.innerHTML = " "

    } else{
        window.alert("O número digitado é inválido ou já foi inserido!")
    }
    num.value = " "
    num.focus()
}

function finalizar(){

    if(valores.length ==0){
        window.alert("Você não inseriu nenhum dado.")
    } else{

    var tam = valores.length
    var menor = valores[0];
    var maior = valores[0];
    var soma = 0
    var media = 0
    valores.sort()
    res.style.textAlign = "center"
    res.innerHTML += `Ao todo você inseriu ${tam} numeros`
    
    for (let pos in valores){
        soma+= valores[pos]

        if (valores[pos] > maior ){
            maior = valores[pos]
        }
        if (valores[pos]< menor){
            menor = valores[pos]
        }
    }
    media= soma/tam
    res.innerHTML += `<p>O menor número é ${menor}</p>`
    res.innerHTML += `<p>O maior número é ${maior}</p>`
    res.innerHTML += `<p>A soma dos números é ${soma}</p>`
    res.innerHTML += `<p>A média dos números é ${media}</p>`
}
}