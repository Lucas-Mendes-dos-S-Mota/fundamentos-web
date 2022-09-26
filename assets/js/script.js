
/*
por Tag: getElementByTagName()
por ID: getElemtById()
po Nome: getElementsByName()
por Classe: getElementdByClassName()
por Seletor: querySelector()
*/
let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
// variaveis de controle de preenchimento
let nomeOK =false
let emailOK =false
let assuntoOK =false

//variavel de controle do mapa
const mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    
    if(nome.value.length < 3){
        txt.innerHTML = "Nome inválido"
        txt.style.color = "red"
        nomeOK = false
    }else{
        txt.innerHTML = "Nome Válido"
        txt.style.color = "green"
        nomeOK = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ){
        txtEmail.innerHTML = "Email inváliso"
        txtEmail.style.color = "red"
        emailOK = false
    }else{
        txtEmail.innerHTML = "Email váliso"
        txtEmail.style.color = "green"
        emailOk = true
    }
}
// função de validação de e-mail utilizando Expressão Regular
function validaEmail2() {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let txtEmail = document.querySelector('#txtEmail')
  
    if(email.value.match(regex)){
      txtEmail.innerHTML = 'Email válido.'
      txtEmail.style.color = '#4A314D'
      emailOk = true
    } else {
      txtEmail.innerHTML = 'Email inválido.'
      txtEmail.style.color = '#EE2E31'
      emailOk = false
    }
  }

  function validaAssunto(){
    let txtAssunto = document.querySelector('txtAssunto')

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Mensagem muito grande, digite no máximo 100 caracteres.'
        txtAssunto.style.backgroundColor = "red"
        txtAssunto.style.display= 'block'
        assuntoOk = false
    } else {
      txtAssunto.style.display= 'nome'
      assuntoOk = true
    }
  }
  
  function enviarForm() {
    if(nomeOk === true && emailOk === true && assuntoOk === true) {
      alert(nome.value + ', mensagem enviada com sucesso')
    } else {
      alert('Por favor, preencha todos os campos corretamente.')
    }
  
  }
  
  function mapaZoom() {
    mapa.style.aspectRatio = '16/11'
  }
  
  function mapaNormal() {
    mapa.style.aspectRatio = '16/9'
  }
    