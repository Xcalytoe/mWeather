import React, {useEffect, useState} from 'react';
import location from '../images/location_place.svg';
import axios from "axios";

function PresentDay(props){
    const [presentDay, setPresentday] = useState([]);
    const [spinner, setspinner] = useState(true);

    const countryState = props.conState;
    const countryCode = props.handlecountry;

useEffect(() => {
    // errorHandle(day_api)();
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${countryState},${countryCode}&apikey=531d5a62eb5db0f8db7f97b202e36945`;
    const day_api = async()=>{
        const data = await axios.get(url);
    // const data = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=lagos&apikey=531d5a62eb5db0f8db7f97b202e36945`);
        setPresentday(data.data);
        setspinner(false);
        console.log(data.data)
    }
    const errorHandle = (fn) =>{
        return (...parameters)=>{
            return fn(...parameters).catch((err)=>{
                console.log(err.message);
            })
        }
    }
    errorHandle(day_api)();
    
// },[countryState, countryCode]);
},[countryCode, countryState]);
   
  
    //spinner element
    const loadSpinner = <span className="spinner spinner-blue"></span>;

    //import weather icon for image sources
    const weatherIcon = spinner ? require(`../images/img03d.svg`) : require(`../images/img${presentDay.weather[0].icon}.svg`)

    //dates
    const date = new Date();
    const days = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
   
    return(
        <div>
            <section className="section_container">
                <div id="error">
                    
                </div>
                <div className="location_placeholder">
                    <img src={location} className="location_icon" alt ="location placeholder"/>
                    <span>{spinner ? loadSpinner :presentDay.name}</span>
                    <div className="date_container">
                        <span>{days[date.getDay()]}, {month[date.getMonth()]} {date.getUTCFullYear()}</span> <span>{date.getHours() > 9 ? date.getHours() : "0" + date.getHours()}:{date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes()}</span>
                    </div>
                </div>
                <div className="weathe_image_container">
                    <img src={weatherIcon} alt="weather description icon"/>
                        <span className="degree">{spinner ? loadSpinner : Math.round(presentDay.main.temp -273)}</span>
                        <span className="sup">o</span>
                </div> 
                <div className="subContent">
                    <p><span className="description"> {spinner ? "***" : ` ${presentDay.weather[0].description}, Humidity ${presentDay.main.humidity}`} %</span></p>
                </div>
                </section>
        </div> 
    )
}
export default PresentDay;