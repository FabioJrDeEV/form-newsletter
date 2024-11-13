const label = document.getElementById('label');
const button = document.getElementById('button');
const inputEmail = document.getElementById('email');
const buttonVolta = document.getElementById('button2');

button.addEventListener('click', (event) => {
    event.preventDefault();
    const emailValue = inputEmail.value.trim();
    const container = document.getElementById('container');
    const agradecimentos = document.getElementById('agradecimentos');

    if(!emailValue) {
        label.classList.add('label')
    }else {
        label.classList.remove('label')

        container.style.display= "none";
        agradecimentos.style.display = "block";

        const mensagem = document.getElementById('params');
        mensagem.innerHTML = `A confirmation email has been sent to <strong>${emailValue}</strong>. Please open it and click the button 
        inside to confirm your subscription.`

        inputEmail.value = ""

    }
})

buttonVolta.addEventListener('click', () => {
    alert("Voltando a home!")
    agradecimentos.style.display= "none"
    container.style.display= "flex"
})
