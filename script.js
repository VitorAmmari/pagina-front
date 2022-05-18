function verMais() {
  let pontos = document.querySelector('#pontos')
  let mais = document.querySelector('#mais')
  let btn = document.querySelector('#btn-ver-mais')

  if (pontos.style.display === 'none') {
    pontos.style.display = 'inline'
    mais.style.display = 'none'
    btn.innerHTML = 'ver mais'
  } else {
    pontos.style.display = 'none'
    mais.style.display = 'inline'
    btn.innerHTML = 'ver menos'
  }
}

function todasRespostas() {
  let resposta1 = document.querySelector('#resposta-1')
  let resposta2 = document.querySelector('#resposta-2')
  let resposta3 = document.querySelector('#resposta-3')
  let resposta4 = document.querySelector('#resposta-4')

  if(resposta1.style.display === 'none' 
  && resposta2.style.display === 'none' 
  && resposta3.style.display === 'none' 
  && resposta4.style.display === 'none') {
    resposta1.style.display = 'block'
    resposta2.style.display = 'block'
    resposta3.style.display = 'block'
    resposta4.style.display = 'block'
  } else {
    resposta1.style.display = 'none'
    resposta2.style.display = 'none'
    resposta3.style.display = 'none'
    resposta4.style.display = 'none'
  }
}

function createTopic() {
  let disc = document.querySelector('.discussion-wrapper')
  let create = document.querySelector('.create-wrapper')

  disc.style.display = 'none'
  create.style.display = 'block'
}

function cancelTopic() {
  let disc = document.querySelector('.discussion-wrapper')
  let create = document.querySelector('.create-wrapper')

  disc.style.display = 'flex'
  create.style.display = 'none'
}

function sendTopic() {
  let create = document.querySelector('.create-wrapper')
  let send = document.querySelector('.send-wrapper')
  let topic = document.querySelector('.topic-0')

  create.style.display = 'none'
  send.style.display = 'block'
  topic.style.display = 'block'
}

function createNewTopic() {
  let send = document.querySelector('.send-wrapper')
  let create = document.querySelector('.create-wrapper')
  let topic = document.querySelector('.topic-0')

  send.style.display = 'none'
  create.style.display = 'block'
  topic.style.display = 'none'
}

function otherWorks() {
  let send = document.querySelector('.send-wrapper')
  let disc = document.querySelector('.discussion-wrapper')
  let topic = document.querySelector('.topic-0')
  
  send.style.display = 'none'
  disc.style.display = 'flex'
  topic.style.display = 'none'
}