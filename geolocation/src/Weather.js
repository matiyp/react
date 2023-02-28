import axios from "axios"
import { useState, useEffect } from "react"


let API_URL = "https://api.openweathermap.org/data/2.5/weather?"
let ICON_URL = "http://openweathermap.org/img/wn/"
let API_KEY = "63aeca33fdb71311e6d173809ea2110f"

export default function Weather({lat,lng}){
    let [temp, setTemp] = useState(0)
    let [speed, setSpeed] = useState(0)
    let [direction, setDirection] = useState(0)
    let [description, setDescription] = useState("")
    let [icon, setIcon] = useState("")

    useEffect(()=>{
        let address = API_URL +
        "lat=" + lat +
        "&lon=" + lng +
        "&units=metric" + 
        "&appid=" + API_KEY
        
        console.log(address)

        axios.get(address)
        .then((response) =>{
            console.log(response.data)
            setTemp(response.data.main.temp)
            setSpeed(response.data.wind.speed)
            setDirection(response.data.wind.deg)
            setDescription(response.data.weather[0].description)
            setIcon(ICON_URL + response.data.weather[0].icon + "@2x.png")
            console.log(ICON_URL + response.data.weather[0].icon + "@2x.png")
        }).catch (error => {
            alert(error)
        })
    }, [])

    return(
        <>
        <h2>Weather on your location</h2>
        <p>{temp} C&#176;</p>
        <p>{speed} m/s {direction} degrees</p>
        <p>{description}</p>
        <img src={icon} alt="" />
        </>
    )
}