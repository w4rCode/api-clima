// Definição da chave de API necessária para acessar o OpenWeatherMap
const key = "88f0c6b32bdb35d2b8ec24a533f720b0";

// Função para exibir as informações de previsão do tempo na página HTML
function show(dados) {
    // Atualiza o elemento HTML com a classe "cidade" com o nome da cidade
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    // Atualiza o elemento HTML com a classe "temp" com a temperatura em Celsius
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + " °C";
    // Atualiza o elemento HTML com a classe "textoPrevisao" com a descrição da previsão do tempo
    document.querySelector(".textoPrevisao").innerHTML = dados.weather[0].description;
    // Atualiza o elemento HTML com a classe "umidade" com a umidade
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
    // Atualiza o elemento HTML com a classe "imgPrevisao" com o ícone da previsão do tempo
    document.querySelector(".imgPrevisao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

// Função assíncrona para buscar as informações de previsão do tempo de uma cidade
async function buscarCidade(cidade) {
    // Faz a requisição à API do OpenWeatherMap para buscar os dados da cidade especificada
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json());
    // Exibe as informações de previsão do tempo na página
    show(dados);
}

// Função chamada quando o usuário realiza uma busca
function search() {
    // Obtém o valor digitado pelo usuário no campo de input com a classe "input-cidade"
    const cidade = document.querySelector(".input-cidade").value;
    // Chama a função para buscar as informações de previsão do tempo para a cidade especificada
    buscarCidade(cidade);
}
