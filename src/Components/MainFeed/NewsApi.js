import React, { useState, useEffect } from 'react'
import './MainFeed.css'

function NewsApi(props) {
    const [data2, setdata] = useState([])
    const [loading, setLoading] = useState(false);
   
    
    const getData = async () => {
        const response = await fetch('htttps://api.nytimes.com/svc/topstories/v2/world.json?api-key=MbAGWpZtPD4vOmTpoFwONWeEbTLVlWmP')
        setdata(await response.json())
       
       

    }
    useEffect(() => {

        getData();



    }, [])
    if (loading) {
        return <p>Data is loading...</p>;
      }
    console.log(data2)


    return (


        <div className="tile-2">
            <div className="tile-2-child">
                <div className={`side-box ${props.theme}`}>
                    <div className={`sb-header ${props.theme}`}>
                        <p className={`sb-head ${props.theme}`}>What's happening?</p>
                    </div>
                    <div className="sb-content"></div>
                </div>
                <div className={`side-box ${props.theme}`}>
                    <div className={`sb-header ${props.theme}`}>
                        <p className={`sb-head ${props.theme}`}># News Headlines</p>
                    </div>

                    <div className="sb-content">
                  {
                  
                  data2.results.map((results , index) => {
                    return(
                        <div className="title">
                                <h1 key={index}>{results.section}</h1>
                        </div>
                    )
                  })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsApi