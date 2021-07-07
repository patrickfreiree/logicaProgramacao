<script>

function pularLinha(){ document.write("<br><br>")};

function mostra(frase){ document.write(frase)};

//function pega(pega){ parseInt(prompt(pega))};


var totalFamiliar = parseInt(prompt("Informe quantidade de familiares:"));

var cont = 1; 
var totalIdade = 0;

while(cont <= totalFamiliar){
    
    var idade = parseInt(prompt("Informe idade do familiar"));
    totalIdade = totalIdade+idade
    cont++
}

mediaIdades = totalIdade/totalFamiliar

mostra(mediaIdades)
pularLinha();
mostra("FIM."); 

</script>
