const textoElement = document.getElementById('texto');
const opcoesElement = document.getElementById('opcoes');

const historia = {
  inicio: {
    texto: 'Você está em um castelo medieval. Um dragão está ameaçando a vila próxima. O que você faz?',
    opcoes: [
      { texto: 'Enfrentar o dragão com a espada', proximo: 'luta' },
      { texto: 'Tentar negociar com o dragão', proximo: 'negociar' }
    ]
  },
  luta: {
    texto: 'Você vai lutar contra o dragão. Você tem coragem, mas está sozinho. Você quer usar a espada ou uma armadilha?',
    opcoes: [
      { texto: 'Usar a espada', proximo: 'espada' },
      { texto: 'Usar uma armadilha', proximo: 'armadilha' }
    ]
  },
  negociar: {
    texto: 'O dragão aceita ouvir você. O que você oferece?',
    opcoes: [
      { texto: 'O ouro do castelo', proximo: 'ouro' },
      { texto: 'Uma aliança de paz', proximo: 'paz' }
    ]
  },
  espada: {
    texto: 'Você luta bravamente, mas o dragão é muito forte. Você é derrotado. Fim de jogo.',
    opcoes: [
      { texto: 'Recomeçar', proximo: 'inicio' }
    ]
  },
  armadilha: {
    texto: 'A armadilha funciona! O dragão fica preso e a vila é salva. Você é um herói! Fim de jogo.',
    opcoes: [
      { texto: 'Recomeçar', proximo: 'inicio' }
    ]
  },
  ouro: {
    texto: 'O dragão aceita o ouro e vai embora. A vila está segura, mas o castelo está pobre. Fim de jogo.',
    opcoes: [
      { texto: 'Recomeçar', proximo: 'inicio' }
    ]
  },
  paz: {
    texto: 'Vocês fazem uma aliança e o dragão se torna um guardião da vila. Todos vivem em harmonia! Fim de jogo.',
    opcoes: [
      { texto: 'Recomeçar', proximo: 'inicio' }
    ]
  }
};

function mostrarCena(cena) {
  const cenaAtual = historia[cena];
  textoElement.innerText = cenaAtual.texto;
  opcoesElement.innerHTML = '';

  cenaAtual.opcoes.forEach(opcao => {
    const button = document.createElement('button');
    button.innerText = opcao.texto;
    button.onclick = () => mostrarCena(opcao.proximo);
    opcoesElement.appendChild(button);
  });
}

// Começar a aventura
mostrarCena('inicio');
