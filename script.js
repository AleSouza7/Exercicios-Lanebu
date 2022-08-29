/*const soma = function (num1,num2) {
    return num1 + num2
}
console.log(soma(2,7))

const num3 = Number(prompt("Digite um numero:"))

const result =num3*soma

console.log(num3)

const numeros = [0,11,22,33,44,55,66,77,88,99]

function retornaprimeiroUltimo(array) {
    const primeiro = array[0]
    const ultimo = array[array.length -1]

    const novoArray = []

    novoArray.push(primeiro,ultimo)
    return novoArray
}

console.log(retornaprimeiroUltimo(numeros))

const numeros = [0,11,22,33,44,55,66,77,88,99]

const somentePares = (alex) => {
    const novoArray =[]

    for (let numeros of alex) {
        if(numeros % 2 === 0){
            novoArray.push(numeros)
        }
    }
    return novoArray
}

console.log(somentePares(numeros))
*/

// const num1 = [0, 1, 2, 3, 4, 5]
// const num2 = [6, 7, 8, 9, 10]

// function primEUltiNum (array) {
//     const primeiroNum = array[0]/2
//     const ultimoNum = array[array.length - 1]/2
//     const novoArray = []

//     novoArray.push(primeiroNum)
//     novoArray.push(ultimoNum)

//     return primEUltiNum
// };

// console.log(primEUltiNum(num1));
// console.log(primEUltiNum(num2));

// const darOiParaMundo = function(){//exemplo de expressão da função
// 	console.log("Olá, mundo!");
// }

// darOiParaMundo();
// darOiParaMundo();
// darOiParaMundo();

// //exemplos de argummentos na chamda da função 
// function calcularArea(altura, largura){
// 	const area = altura*largura;
// 	console.log(area);
// }

// calcularArea(3,2);

const fazerPizzaMucarela = function(){
	console.log("pegando queijo muçarela...");
  console.log("fazendo massa...");
  console.log("espalhando molho...");
  console.log("espalhando queijo...");
  console.log("levando ao forno...");
  console.log("adicionando orégano e retornando ao forno...");
  console.log("picotando e encaixotando...");
  console.log("pronto!");
}

const fazerPizzaPepperoni = function(){
	console.log("pegando queijo muçarela...");
  console.log("fazendo massa...");
  console.log("espalhando molho...");
  console.log("espalhando queijo...");
  console.log("levando ao forno...");
  console.log("adicionando orégano e retornando ao forno...");
  console.log("adicionando pepperoni e retornando ao forno...");
  console.log("picotando e encaixotando...");
  console.log("pronto!");
}

function fazerCalzoneMucarela(){
	console.log("pegando queijo muçarela...");
  console.log("fazendo massa...");
  console.log("espalhando molho...");
  console.log("espalhando queijo...");
  console.log("dobrando a massa...");
  console.log("levando ao forno...");
  console.log("adicionando orégano e retornando ao forno...");
  console.log("picotando e encaixotando...");
  console.log("pronto!");
}

fazerPedido(fazerPizzaMucarela);
fazerPedido(fazerCalzoneMucarela);