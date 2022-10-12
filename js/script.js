var input = document.getElementById("display")
var parar = false

const limpar=(clean) => {
    input.value = input.innerHTML + ""
    document.getElementById("calculo").innerHTML = ""
}

const deletar=(del) => input.value = input.value.substring(0, input.value.length - 1)
    
function add_numero(num) {
    if(!parar){
       if(num === "." && input.value.indexOf(".") === -1 || num !== "."){
           input.value = input.value + num 
         }
       }
} 
const add_operador =(op) => input.value = input.value + op

function resultado(equacao) {
    let calculo = input.value
    document.getElementById("calculo").innerHTML = input.value 
    
    try{
        console.log(eval(calculo))
    }catch(e){
        input.value = "ERRO!"
        document.getElementById("calculo").innerHTML = ""
    }
    input.value = eval(calculo)
} 
    
