<meta charset="UFT-8">

<h1>Tabuada:</h1>

<script>

function pularLinha(){

    document.write("<br><br>")

}

function mostra(frase){

    document.write(frase)
}

function pega(pergunta){

    parseInt(prompt(pergunta))
}


var multiplicador = 1;
var pegaNumero = pega("Digite o número de 0 à 10")

if (pegaNumero > 10 || pegaNumero <0) {

    alert("Número invalido")
}
if (pegaNumero >=0 || pegaNumero <= 10) {
   
    for (multiplicador = 1; multiplicador <=10; multiplicador ++){

     pegaNumero*multiplicador
}
    }

</script>
