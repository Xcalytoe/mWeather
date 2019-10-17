import React from "react";

function Days(){
    return(
        <section className="section_container">
            <div className="hourly_container_main daily_container_main">
            <p className="hourly_title">Daily</p>
               <div className="hourly_items_main ">
                    <div className="hourly_items">
                        <h5> Mon</h5>
                        {/* <img src={img02d} alt="weather icon"/> */}
                    </div>
                    <div className="hourly_items">
                        <h5> Tue</h5>
                        {/* <img src={img02d} alt="weather icon"/> */}

                    </div>
               
                    <div className="hourly_items">
                        <h5> Wed</h5>
                        {/* <img src={img04d} alt="weather icon"/> */}

                    </div>
                    <div className="hourly_items">
                        <h5> Thur</h5>
                        {/* <img src={img02d} alt="weather icon"/> */}

                    </div>
                    <div className="hourly_items">
                        <h5> Fri</h5>
                        {/* <img src={img10d} alt="weather icon"/> */}

                    </div>
                    <div className="hourly_items">
                        <h5> Sat</h5>
                        {/* <img src={img09d} alt="weather icon"/> */}

                    </div>
                    <div className="hourly_items">
                        <h5> Sun</h5>
                        {/* <img src={img04d} alt="weather icon"/> */}

                    </div>
               </div>
            </div>
        </section>
    )
}
export default Days;