import React from 'react'
import "./Banner.css"
function Banner() {
    // useEffect(() => {
      
    // }, [])
    return (
        <div className='banner'>
            <div className='content'>
                <h1 className='title'>Movie Name</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>
                <h1 className='discription'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Obcaecati soluta, accusantium repudiandae ratione quia quibusdam? Ducimus incidunt itaque tempore necessitatibus
                  saepe commodi magni! Nesciunt doloribus eius porro ad magni commodi.</h1>
            </div>
            <div className="fade">

            </div>
        </div>
    )
}

export default Banner
