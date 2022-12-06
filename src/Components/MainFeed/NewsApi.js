import React from 'react'
import './MainFeed.css'
import axios from 'axios'
import { useEffect , useState } from 'react'

function NewsApi(props) {
    const [apidata, setapiData] = useState([])
    const [index , setIndex ] = useState(0)

    useEffect(() => {
        axios
        .get("htttps://api.nytimes.com/svc/topstories/v2/world.json?api-key=MbAGWpZtPD4vOmTpoFwONWeEbTLVlWmP")
        .then((res) => 
            setapiData(res.data.results)
           
        );
       
    },[])

    useEffect(() => {
        const lastIndex = apidata.length-1;
        if(index < 0){
            setIndex(lastIndex);
        }
        if(index > lastIndex){
            setIndex(0);
        }
    },[index,apidata]);

    useEffect(()=>{
        let slider = setInterval(() => {
            setIndex = (index + 1);
        },5000);
        return() =>{
            clearInterval(slider)
        };  
    });

    console.log(apidata)

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
                  
                  apidata.map((a , index) => {
                    return(
                        <>
                        <div className="image-container">
                           {/* <img src={a.media.url} alt="" /> */}
                        </div>
                        <div className="title">
                             {a.title}
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