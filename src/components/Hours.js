import React, {useEffect, useState} from 'react';
import temp from '../images/temperature.svg';
// import axios from "axios";



function Hours(props){
    const [spinner, setspinner] = useState(true);
    const [readData, setReadData] = useState([]);

    const countryState = props.conState;
    const countryCode = props.handlecountry;

    //fetch the weather data from openweathermap api
    useEffect(()=>{
        const weather_api =  async ()=> {
            try{
                 const data = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${countryState},${countryCode}&apikey=531d5a62eb5db0f8db7f97b202e36945`);
                const readData = await data.json();
                setReadData(readData.list);
                setspinner(false);
            }catch(error){
                console.log(error.message);
            }
           
    
        }
        // const errorHandle = (fn) =>{
        //     return (...parameters)=>{
        //         return fn(...parameters).catch((err)=>{
        //             console.log("Cannot find this location on the map" + err);
        //         })
        //     }
        // }
        // errorHandle(weather_api)();
        weather_api();
    }, [countryState, countryCode]); 

    const getWeather = readData.map((data, index)=>(
        <div className="hourly_items" key={index}>
            <h5> {new Date(data.dt_txt).getHours() > 9 ? new Date(data.dt_txt).getHours(): "0" + new Date(data.dt_txt).getHours()} : 00</h5>
            <img src={spinner ? require(`../images/img03d.svg`) : require(`../images/img${data.weather[0].icon}.svg`)} alt="weather icon"/>
            <div className="raindrop">
                <img src={temp} alt="Precipitation icon"/>
                <p><span>{spinner ? "***" : Math.round(data.main.temp -273)}</span><span className="temp_range">o</span></p>
            </div>
        </div>
    ))

    return(
        <section className="section_container">
            <div className="hourly_container_main">
            <p className="hourly_title">Hourly</p>
               <div className="hourly_items_main">
                    {getWeather.slice(0, 8)}
               </div>
            </div>
        </section>
    )
}
export default Hours;