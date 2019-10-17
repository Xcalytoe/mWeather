import React, {useState} from 'react'
import Data from './CountryCode';
import Header from './Header';
import PresentDay from './PresentDay';

function HeaderComp(){
     //useState for country
     const [country, setcountry] = useState("NG");

     //useState for country
     const [countryState, setcountryState] = useState("lagos");
    //load the country codes from CountryCode page
    const data = Data[0].result;
    // map the countries into option
    const countryCode = data.map((uniCode,index)=>(
        // console.log(uniCode,index)

        <option key={index} value={uniCode.code}>{uniCode.name}</option>
    ))
    const handleSubmit = (e) => {
        // e.preventDefault();
        // console.log(country);
    }
    return(
      <div>
            <Header 
            setcountry = {setcountry}
            handleSubmit = {handleSubmit}
            setcountryState = {setcountryState}
            countryCode ={countryCode}
        />
        <PresentDay
            country= {country}
            handleSubmit = {handleSubmit}
            countryState = {countryState}
        />
      </div>
    )
}
export default HeaderComp;