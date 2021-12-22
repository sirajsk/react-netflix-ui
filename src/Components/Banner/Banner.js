import React,{useEffect, useState} from 'react'

import {API_KEY,imageUrl} from '../../Constants/constants'
import axios from '../../axios'
import "./Banner.css"
function Banner() {
    const [Movie, setMovie] = useState()
    useEffect(() => {
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
          console.log(response.data);
          setMovie(response.data.results[5])
      })
    }, [])    
    return (    

        <div style={{backgroundImage: `url(${Movie ? imageUrl+Movie.backdrop_path :""})`}}
         className='banner'>
            <div className='content'>
                <h1 className='title'>{Movie ? Movie.title:""}</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>
                <h1 className='discription'>{Movie ? Movie.overview:""}
                  </h1>
            </div>
            <div className="fade">

            </div>
        </div>
    )
}

export default Banner
