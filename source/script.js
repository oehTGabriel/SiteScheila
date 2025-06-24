function toggleFaq(index) {
    const answers = document.querySelectorAll('.faq-answer');
    answers.forEach((el, i) => {
      if (i === index) {
        el.classList.toggle('hidden');
      } else {
        el.classList.add('hidden');
      }
    });
  }

  function aparece() {
    const resposta = document.getElementById("resposta");

    resposta.classList.toggle('hidden')
  }

  function esconde() {
    const resposta = document.getElementById("resposta");

    resposta.classList.add('hidden')
  }
