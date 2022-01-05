(()=> {
  const btn = document.getElementById('btn');
  const result = document.getElementById('result')
  const tela = document.body;

  if (window.SpeechRecognition || window.webkitSpeechRecognition) {
    const MySpeech = new webkitSpeechRecognition();
    MySpeech.lang = 'pt-BR';


    const onClick = () => {

      try {
        MySpeech.start();
        result.innerHTML = 'Estou ouvindo...'
      } catch (error) {

        alert('Erro ::' + error.message)
      }

    }


    const onSpeech = (event) => {

      const text = event.results[0][0].transcript;

      if (text.toLowerCase() === 'claro') {
        tela.classList.add('light')
        tela.classList.remove('dark')
      }
        

      if (text.toLowerCase() === 'escuro'){
        tela.classList.add('dark')
        tela.classList.remove('light')
      }

      result.innerHTML = text || 'Ocorreu um erro!';

    }

    
    MySpeech.addEventListener('result', onSpeech);
    btn.addEventListener('click', onClick);
  } else {
    result.innerHTML = 'Seu navegador não tem suporte a API'
  }


})()