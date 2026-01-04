const home = document.getElementById("iconHome")
const play = document.getElementById("iconPlay")
const gear = document.getElementById("iconGear")
const login = document.getElementById("iconLogin")
const resultado = document.getElementById("resultado")

home.addEventListener('click', () => {
    resultado.innerHTML = `
    <div class="welcome-container">
        <h1 class="welcome-title">Seja bem-vindo</h1>
        <p class="welcome-text">Esse é o nosso app</p>
    </div>
    `
})

play.addEventListener('click', () => {
    resultado.innerHTML = `
    <div class="welcome-container">
        <h1 class="welcome-title">Sua musica</h1>
        <p class="welcome-text"><audio id="meuAudio" controls>
  <source src="suaMusica.mp3" type="audio/mpeg">
  Seu navegador não suporta o elemento de áudio.
</audio></p>
    </div>
    `
})

gear.addEventListener('click', () => {
    resultado.innerHTML = `
    <div class="welcome-container">
        <h1 class="welcome-title">Configurações</h1>
        <p class="welcome-text">Ajuste as opções do sistema aqui</p>
    </div>
    `
})

login.addEventListener('click', () => {
    resultado.innerHTML = `
    <div class="welcome-container">
        <h1 class="welcome-title">Login</h1>
        <p class="welcome-text">
            <input type="text" placeholder="Usuário">
            <input type="password" placeholder="Senha">
            <button>Entrar</button>
        </p>
    </div>
    `
})