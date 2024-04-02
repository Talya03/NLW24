const perguntas = [
  { 
    pergunta: "O que é gestão ambiental?",
    respostas: [
     "a) A prática de degradação do meio ambiente",
     "b) O processo de conservação e preservação dos recursos naturais",
     "c) A implementação de tecnologias poluentes",
    ],
    correta: 1
  },
  { 
    pergunta: "Qual é o principal objetivo da gestão ambiental?",
    respostas: [
     "a) Aumentar o impacto ambiental",
     "b) Minimizar o impacto ambiental das atividades humanas",
     "c) Ignorar os problemas ambientais",
    ],
    correta: 1
  },
  { 
    pergunta: "Quais são os pilares da sustentabilidade?",
    respostas: [
     "a) Lucro e consumo",
     "b) Economia verde",
     "c) Desenvolvimento econômico, social e ambiental equilibrado",
    ],
    correta: 2
  },
  { 
    pergunta: "O que são indicadores de desempenho ambiental?",
    respostas: [
     "a) Medidas que aumentam a poluição",
     "b) Ferramentas para avaliar o impacto ambiental das atividades de uma organização",
     "c) Métodos para esconder os danos ambientais",
    ],
    correta: 1
  },
  { 
    pergunta: "Qual é o objetivo da ISO 14001?",
    respostas: [
     "a) Padronizar a produção de resíduos",
     "b) Criar barreiras ao desenvolvimento sustentável",
     "c) Estabelecer um sistema de gestão ambiental eficaz",
    ],
    correta: 2
  },
  { 
    pergunta: "O que é um impacto ambiental?",
    respostas: [
     "a) Ações que beneficiam o meio ambiente",
     "b) Alterações no meio ambiente causadas por atividades humanas",
     "c) Práticas sustentáveis",
    ],
    correta: 1
  },
  { 
    pergunta: "Qual é a importância da educação ambiental?",
    respostas: [
     "a) Não tem relevância para a gestão ambiental",
     "b) Conscientizar as pessoas sobre a importância da preservação ambiental",
     "c) Promover o desperdício de recursos naturais",
    ],
    correta: 1
  },
  { 
    pergunta: "O que são emissões de gases de efeito estufa?",
    respostas: [
     "a) Liberação controlada de gases que não afetam o clima",
     "b) Liberação de gases que não causam impacto ambiental",
     "c) Liberação de gases que contribuem para o aquecimento global",
    ],
    correta: 2
  },
  { 
    pergunta: "O que é reciclagem?",
    respostas: [
     "a) Descarte inadequado de resíduos",
     "b) Reutilização de materiais sem valor",
     "c) Processo de transformar resíduos em novos produtos",
    ],
    correta: 2
  },
  { 
    pergunta: "Qual é o objetivo da política ambiental?",
    respostas: [
     "a) Promover o desmatamento",
     "b) Criar leis que facilitem a poluição",
     "c) Promover o desenvolvimento sustentável",
    ],
    correta: 2
  },
  { 
    pergunta: "O que são áreas de conservação?",
    respostas: [
     "a) Áreas onde a destruição ambiental é incentivada",
     "b) Espaços naturais protegidos para a preservação da biodiversidade",
     "c) Áreas onde a exploração de recursos naturais é ilimitada",
    ],
    correta: 1
  },
  { 
    pergunta: "O que é poluição ambiental?",
    respostas: [
     "a) Ações que protegem o meio ambiente",
     "b) Liberação de substâncias nocivas ao meio ambiente",
     "c) Práticas sustentáveis",
    ],
    correta: 1
  },
  { 
    pergunta: "Qual é o objetivo da gestão de resíduos?",
    respostas: [
     "a) Aumentar a produção de resíduos",
     "b) Minimizar a geração de resíduos e promover a destinação adequada",
     "c) Ignorar a destinação correta dos resíduos",
    ],
    correta: 1
  },
  { 
    pergunta: "O que são fontes renováveis de energia?",
    respostas: [
     "a) Fontes que se esgotam rapidamente",
     "b) Fontes que não geram energia",
     "c) Fontes que não se esgotam e são ambientalmente amigáveis",
    ],
    correta: 2
  },
  { 
    pergunta: "Qual é o objetivo da avaliação de impacto ambiental?",
    respostas: [
     "a) Ignorar os impactos ambientais",
     "b) Minimizar ou evitar impactos adversos das atividades humanas no meio ambiente",
     "c) Promover a degradação do meio ambiente",
    ],
    correta: 1
  },
  { 
    pergunta: "O que são ecossistemas?",
    respostas: [
     "a) Ambientes artificiais",
     "b) Espaços sem vida",
     "c) Comunidades biológicas e seu ambiente físico",
    ],
    correta: 2
  },
  { 
    pergunta: "Qual é a importância da preservação da biodiversidade?",
    respostas: [
     "a) Promover a extinção das espécies",
     "b) Manter o equilíbrio dos ecossistemas e garantir a sobrevivência das espécies",
     "c) Ignorar a diversidade biológica",
    ],
    correta: 1
  },
  { 
    pergunta: "O que são áreas de preservação permanente?",
    respostas: [
     "a) Áreas destinadas à exploração intensiva dos recursos naturais",
     "b) Áreas onde não é permitida nenhuma forma de intervenção humana",
     "c) Espaços naturais protegidos para a conservação de recursos hídricos",
    ],
    correta: 2
  },
  { 
    pergunta: "Qual é o objetivo da política de conservação ambiental?",
    respostas: [
     "a) Promover a destruição ambiental",
     "b) Criar leis que facilitem a poluição",
     "c) Preservar os recursos naturais e promover o desenvolvimento sustentável",
    ],
    correta: 2
  },
  { 
    pergunta: "O que são práticas sustentáveis?",
    respostas: [
     "a) Ações que promovem a degradação ambiental",
     "b) Medidas que não levam em consideração os impactos ambientais",
     "c) Atitudes que visam o uso racional dos recursos naturais e a preservação do meio ambiente",
    ],
    correta: 2
  }
];
  
  const quiz = document.querySelector('#quiz');
  const template = document.querySelector('template');
  const mostrarTotal = document.querySelector('#acertos samp');
  
  const corretas = new Set(); 
  let totalDePerguntas = perguntas.length;
  
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
  
  perguntas.forEach((item, index) => { 
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta;
  
    item.respostas.forEach((resposta, idx) => {
      const dt = quizItem.querySelector('dl dt').cloneNode(true);
      dt.querySelector('span').textContent = resposta;
      dt.querySelector('input').setAttribute('name', 'pergunta-'+ index);
      dt.querySelector('input').value = idx;
      dt.querySelector('input').onchange = (event)=> {
        const estaCorreta = parseInt(event.target.value) === item.correta;
  
        if(estaCorreta) {
          corretas.add(item);
        } else {
          corretas.delete(item);
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
      };
  
      quizItem.querySelector('dl').appendChild(dt);
    });
  
    quizItem.querySelector('dl dt').remove();
    quiz.appendChild(quizItem);
  });
