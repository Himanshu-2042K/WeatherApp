const apiKey = "a7d829fb465ec6eb11c06b883e655c72";

const getWeather = async(city) =>{
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then ((res) => res.json())
    .then((json)=> {
        return json;
    });

}

export default getWeather;