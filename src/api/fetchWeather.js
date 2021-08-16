import axios from 'axios';

const URL = "https://api.openweathermap.org/data/2.5/weather"//weather url
const API ="ccf5ff10eed85d16a255f4f96fe64820"

export const fetchWeather = async(query) => {
    const {data} = await axios.get(URL,{
        params:{
            q:query,
            units:'metric',
            APPID:API
        }
    })
    return data
}