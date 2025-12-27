const nomeInput = document.getElementById('nomeInput');
const idadeInput = document.getElementById('idadeInput');
const botao = document.getElementById('botao');
const resultado = document.getElementById('resultado');


botao.addEventListener('click', () => {
    let nome = nomeInput.value;
    let idade = idadeInput.value;

    if (nome === '' || idade === '') {
        resultado.textContent = 'Por favor, preencha todos os campos.';
        resultado.style.color = 'red'
        return
    } else {

        const nacimento = new Date().getFullYear() - idade

        const maiorDeiade = idade >= 18 ? 'Maior de idade' : 'Menor de idade';

        resultado.innerHTML = `
        <p>Ola ${nome}! voce tem ${idade} anos </p> 
        <p>Voce e ${maiorDeiade}</p>
        <p>Voce nasceu em ${nacimento}</p>
        `
    }

})