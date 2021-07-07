
<script> 
  
    function pulaLinha(){

        document.write("<br>")
   }

    function mostra(frase){

        document.write(frase)
        pulaLinha();
   } 

   var vitorias = parseInt(prompt("Digite o número vitórias"));
   var empates = parseInt(prompt("Digite o número de empates"));
   var pontos = vitorias * 2 + empates;

    mostra("Pontos do seu time é: " + pontos)

    if (pontos > 28){
    
        mostra("Seu time está MELHOR do que ano pasado.");
        pulaLinha()

    } if (pontos < 28) {
        
        mostra("Seu time está PIOR do que ano pasado.");
        pulaLinha()

    } if(pontos == 28) {
        
        mostra("Seu time está IGUAL do que ano pasado.");
        pulaLinha()

    }   

    mostra("Fim")
       
</script>
