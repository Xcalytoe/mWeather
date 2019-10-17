import React, {useState} from 'react';
import Data from './CountryCode';
import PresentDay from './PresentDay';
import Hours from './Hours';



function Header(){
    //useState for country
const [country, setcountry] = useState("NG");
    // state for submit button
const [handlecountry, sethandlecountry] = useState(country);

//useState for country
const [countryState, setcountryState] = useState("lagos");

    // state for submit button
const [conState, setconState] = useState(countryState);

//load the country codes from CountryCode page
const data = Data[0].result;

// map the countries into option
const countryCode = data.map((uniCode,index)=>(
   // console.log(uniCode,index)
   <option key={index} value={uniCode.code}>{uniCode.name}</option>
))
// update countrycode state
const handleState = (e)=>(setcountryState(e.target.value))

// update location state
const handleCountry = (e)=>(setcountry(e.target.value));

// update state on submit
const handleSubmit = (e) => {
   e.preventDefault();
   sethandlecountry(country);
   setconState(countryState);
}
    return(
        <div>
            <nav className="header">
                <span><span className="m_logo">M</span>-weather</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" className="input" placeholder="Enter state" required  onChange={handleState}/>
                    <select defaultValue="NG"  className="input select" onChange={handleCountry}>
                        {/* load the mapped out options */}
                        {countryCode}
                    </select>
                   <button>
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 56.966 56.966"  xmlSpace="preserve">
                        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
                            s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
                            c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
                            s-17-7.626-17-17S14.61,6,23.984,6z"/>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        </svg>

                   </button>
                </form>
            </nav>
            <PresentDay
                handlecountry={handlecountry}
                conState={conState}
            />
            <Hours
                handlecountry={handlecountry}
                conState={conState}
            />
        </div>
    )
}

export default Header;