/* script.js */
function corrigirProva() {
    // Palavras-chave para avaliação das respostas
    const palavrasChave = {
      q1: ["framework", "metodologia", "agil", "sprints", "time"],
      q2: ["melhoria", "processos", "time", "desempenho", "colaboração"]
    };
  
    // Feedback para diferentes níveis de resposta
    const feedbackPorNivel = {
      excelente: "Excelente! Sua resposta demonstrou um ótimo entendimento do tema.",
      bom: "Bom! Você compreendeu bem, mas pode explorar mais alguns detalhes.",
      razoavel: "Razoável. Sua resposta está no caminho certo, mas faltam informações importantes.",
      fraco: "Resposta fraca. Recomendamos revisar o conteúdo sobre o tema."
    };
  
    // Respostas do usuário
    const respostasUsuario = {
      q1: document.querySelector('textarea[name="q1"]').value.toLowerCase(),
      q2: document.querySelector('textarea[name="q2"]').value.toLowerCase()
    };
  
    let feedbackFinal = "";
  
    // Função para calcular o nível de acerto
    function avaliarResposta(resposta, palavrasChave) {
      let acertos = 0;
      palavrasChave.forEach(palavra => {
        if (resposta.includes(palavra)) acertos++;
      });
  
      if (acertos >= 4) return "excelente";
      if (acertos >= 2) return "bom";
      if (acertos === 1) return "razoavel";
      return "fraco";
    }
  
    // Avaliar cada resposta
    const nivelQ1 = avaliarResposta(respostasUsuario.q1, palavrasChave.q1);
    const nivelQ2 = avaliarResposta(respostasUsuario.q2, palavrasChave.q2);
  
    // Construir feedback para o usuário
    feedbackFinal += `<strong>Questão 1:</strong> ${feedbackPorNivel[nivelQ1]}<br>`;
    feedbackFinal += `<strong>Questão 2:</strong> ${feedbackPorNivel[nivelQ2]}<br>`;
  
    // Exibir feedback
    document.getElementById("resultado").innerHTML = feedbackFinal;
  }
  