import React from 'react'
import './MainFeed.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

function NewsApi(props) {
    const [apidata, setapiData] = useState([])
    const [index, setIndex] = useState(0)

    useEffect(() => {
        axios
            .get("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=MbAGWpZtPD4vOmTpoFwONWeEbTLVlWmP")
            .then((res) =>
                setapiData(res.data.results)
                // console.log(res.data.results.title)

            );

    }, [])
    // const linked='https://static01.nyt.com/images/2022/12/07/multimedia/07germ…-raids-1-f682/07germany-raids-1-f682-threeByTwoSmallAt2X.jpg'
    console.log(apidata)
    return (


        <div className="tile-2">
            <div className="tile-2-child">
                <div className={`side-box ${props.theme}`}>
                    <div className={`sb-header ${props.theme}`}>
                        <p className={`sb-head ${props.theme}`}>What's happening?</p>
                    </div>
                    <div className="sb-content">


                    </div>
                </div>
                <div className={`side-box ${props.theme}`}>
                    <div className={`sb-header ${props.theme}`}>
                        <p className={`sb-head ${props.theme}`}># News Headlines</p>
                    </div>

                    <div className="sb-content">
                        {

                            apidata.map((a) => {
                                return (

                            <>
                            <div className="image-container">
                                {a.multimedia===null?<h1>error image</h1>:<img src={a.multimedia[1].url} alt=" did Image just ran away ? " />}
                            </div>
                            <div className="title">
                                <p className="title-head">
                                    {a.title == "" ? "Get Realtime Updated News from all Around the World. ~ New York Times " : a.title}
                                </p>
                                <p className="time">
                                    {a.published_date}
                                </p>
                                <a href={a.url} target='_blank' className="title-body">read more...</a>
                            </div>
                            </>
                    

                                )
                            })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsApi