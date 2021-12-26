var a = window.document.getElementById("soma")
var a1 = Number(window.prompt("Digite um número: "))
var b1 = Number(window.prompt("Digite outro número: "))
var soma = a1 + b1 
window.alert("A soma dos valores é " + soma)

/*Aparecendo no código no HTML*/
a.innerHTML = `A soma dos valores é ${soma}`
