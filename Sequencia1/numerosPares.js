<meta charset="UFT-8">

<h1>Numeros pares:</h1>

<script>

function pulaLinha(){

    document.write("<br><br>")
}

function mostra(frase){

    document.write(frase)
    
}


var numero = 0
mostra("<b>Desafio 1. Mostre números pares de 0 à 100 :</b> ");
while (numero <= 100) {
    
    if (numero % 2 == 0){
        mostra(numero+ ", ");
    }
        numero++ ;
}
pulaLinha()
mostra("fim.");
pulaLinha();


numero = 30;
mostra("<b>Desafio 2. Mostre número de 30 à 40, tirando o nº 33 e 37:</b> ");

while (numero <= 40){
    
    if(numero != 33 && numero != 37){
    mostra(numero+", ");

    }
       numero = numero + 1;
}
pulaLinha();
mostra("fim."); 
pulaLinha();


mostra("<b>Exiba número de 0 à 20 de forma decrescente:</b> ");
numero = 20

while (numero >= 0) {
    
    mostra(numero+", ");
    numero = numero-1;
    
}
pulaLinha();
mostra("fim."); 
pulaLinha();

</script>
