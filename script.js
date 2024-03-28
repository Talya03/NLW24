const perguntas = [
    { 
      pergunta: "Qual método é usado para adicionar um novo elemento ao final de um array em JavaScript?",
      respostas: [
       "append()",
       "push()",
       "add()",
      ],
      correta: 1
    },
    { 
      pergunta: "O que o operador '===' faz em JavaScript?",
      respostas: [
       "Atribuição",
       "Comparação de valores",
       "Concatenação de strings",
      ],
      correta: 1
    },
    { 
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
       "var x;",
       "let x;",
       "const x;",
      ],
      correta: 2
    },
    { 
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
       "pop()",
       "shift()",
       "slice()",
      ],
      correta: 0
    },
    { 
      pergunta: "O que o método 'indexOf( )' retorna se o elemento não for encontrado no array em JavaScript?",
      respostas: [
       "-1",
       "0",
       "null",
      ],
      correta: 0
    },
    { 
      pergunta: "Qual método é usado para converter uma string em um número inteiro em JavaScript?",
      respostas: [
       "parseInt()",
       "toInt()",
       "convertToInt()",
      ],
      correta: 0
    },
    { 
      pergunta: "Qual é a forma correta de escrever um comentário de uma linha em JavaScript?",
      respostas: [
       "<!-- Comentário -->",
       "/* Comentário */",
       "// Comentário",
      ],
      correta: 2
    },
    { 
      pergunta: "O que o método 'charAt( )' retorna se o índice especificado estiver fora do intervalo em JavaScript?",
      respostas: [
       "Null",
       "Undefined",
       "Um erro",
      ],
      correta: 1
    },
    { 
      pergunta: "Qual operador é usado para concatenar strings em JavaScript?",
      respostas: [
       "+",
       "&",
       "||",
      ],
      correta: 0
    },
    { 
      pergunta: "Qual é a função do método 'toFixed( )' em JavaScript?",
      respostas: [
       "Arredonda um número para o inteiro mais próximo",
       "Arredonda um número para um número específico de casas decimais",
       "Converte um número em uma string com um número específico de casas decimais",
      ],
      correta: 1
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
