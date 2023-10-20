//variraveis

const cityInput = document.querySelector('#searchInput')
const searchButton = document.querySelector('#button-buscar')

const cidadeElemento = document.querySelector('#nomeCidade')
const paisElemento = document.querySelector('#pais')
const temperaturaElemento = document.querySelector('#temperatura')
const descElemento = document.querySelector('#desc')
const ventoElemento = document.querySelector('#velocidadeVento')
const umidadeElemento = document.querySelector('#umidade')


//function

const getWeatherDados = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt_br&appid=e8f1178d7e3a0d1a08902eb6aaa6407c`

        const resultado = await fetch(apiWeatherURL)
        const data = await resultado.json()
    return data
}

const weatherDate = async (city) => {
    const data = await getWeatherDados(city)

    cidadeElemento.innerText = data.name
    paisElemento.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/16.png`)
    temperaturaElemento.innerText = parseInt(data.main.temp)
    descElemento.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    ventoElemento.innerText = data.wind.speed
    umidadeElemento.innerText = data.main.humidity
    console.log(data)
    
}

//eventos

searchButton.addEventListener('click', (e) => {
    e.preventDefault()
        const city = cityInput.value
    weatherDate(city)
})
