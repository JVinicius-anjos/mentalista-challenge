//Codigo para randomizar números excluindo o 0
var numeroSecreto = Math.floor(Math.random() * 1000) + 1
//Variavél para indentificar a quantidade de tentativas
var numeroChutes = 0

// No pior cenário do jogo você pode acertar o número Secreto em 10 tentativas
//Comando "enquanto"(while) - Até o número seja igual repete a pergunta.
while(chute != numeroSecreto){
  var chute = prompt('Digite um número entre 1 a 1000')
  numeroChutes++
  //Comando "se"
  if (chute == numeroSecreto){
    alert("Parabéns, você acertou! O número era: " + chute )
  } else if (chute > numeroSecreto){
      alert('O número que você chutou: ' + chute + ' é maior que o número secreto')
  } else if (chute < numeroSecreto){
      alert('O número que você chutou: ' + chute + ' é menor que o número secreto')
  }
  
  alert("Você chutou " + numeroChutes + " vezes")
}