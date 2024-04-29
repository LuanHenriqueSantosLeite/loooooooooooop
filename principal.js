
function verificarTime() {
  
    var continuarPerguntando = true;
  
    while (continuarPerguntando) {
      
      var respostaTime = prompt("qual o maior animal marinho?");
  
      
      if (respostaTime.toLowerCase() === "Baleia jubarte") {
        alert("Isso mesmo!!!");
        continuarPerguntando = false; // Sai do loop após a resposta correta
      } else {
        alert("Não é isso! Tente novamente.");
      }
    }
  }
  
  // Chamada da função para iniciar o processo
  verificarTime();
  
    