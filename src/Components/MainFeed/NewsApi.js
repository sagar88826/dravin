import React, { useState, useEffect } from 'react'
import './MainFeed.css'

function NewsApi(props) {
    const [data, setdata] = useState([])
    const apiData = {
        "status": "OK",
        "copyright": "Copyright (c) 2022 The New York Times Company. All Rights Reserved.",
        "section": "World News",
        "last_updated": "2022-12-02T06:27:38-05:00",
        "num_results": 39,
        "url": "https://static01.nyt.com/images/2022/11/29/multimedia/00germany-fake-foundation-1-68f3/00germany-fake-foundation-1-68f3-superJumbo.jpg",
        "results": [
            {
                "section": "world",
                "subsection": "europe",
                "title": "Shadowy Arm of a German State Helped Russia Finish Nord Stream 2",
                "abstract": "The threat of U.S. sanctions jeopardized completion of a second direct gas pipeline from Russia. So Gazprom and German officials concocted a phony climate foundation to get the job done.",
                "url": "https://www.nytimes.com/2022/12/02/world/europe/germany-russia-nord-stream-pipeline.html",
                "uri": "nyt://article/b146c1c5-72d2-5116-aec1-3e098d520582",
                "byline": "By Katrin Bennhold and Erika Solomon",
                "item_type": "Article",
                "updated_date": "2022-12-02T05:00:43-05:00",
                "created_date": "2022-12-02T05:00:43-05:00",
                "published_date": "2022-12-02T05:00:43-05:00",
                "material_type_facet": "",
                "kicker": "",
                "des_facet": [
                    "International Relations",
                    "Politics and Government",
                    "United States International Relations",
                    "Natural Gas",
                    "Ships and Shipping",
                    "Russian Invasion of Ukraine (2022)",
                    "Embargoes and Sanctions",
                    "Espionage and Intelligence Services",
                    "Sabotage (Crime)",
                    "Oil (Petroleum) and Gasoline",
                    "Pipelines",
                    "Governors (US)",
                    "Legislatures and Parliaments"
                ],
                "org_facet": [
                    "Gazprom",
                    "Nord Stream AG",
                    "Stasi (East Germany)"
                ],
                "per_facet": [
                    "Cotton, Tom",
                    "Cruz, Ted",
                    "Merkel, Angela",
                    "Putin, Vladimir V",
                    "Scholz, Olaf (1958- )",
                    "Schroder, Gerhard"
                ],
                "geo_facet": [
                    "Europe",
                    "Germany",
                    "Lubmin (Germany)",
                    "Rostock (Germany)",
                    "Sassnitz (Germany)",
                    "Ukraine"
                ],
                "multimedia": [
                    {
                        "url": "https://static01.nyt.com/images/2022/11/29/multimedia/00germany-fake-foundation-1-68f3/00germany-fake-foundation-1-68f3-superJumbo.jpg",
                        "format": "Super Jumbo",
                        "height": 1364,
                        "width": 2048,
                        "type": "image",
                        "subtype": "photo",
                        "caption": "Pipes from Nord Stream 2 work in Sassnitz, Germany. Russia invaded Ukraine weeks after the pipeline was finished.",
                        "copyright": "Laetitia Vancon for The New York Times"
                    },
                    {
                        "url": "https://static01.nyt.com/images/2022/11/29/multimedia/00germany-fake-foundation-1-68f3/00germany-fake-foundation-1-68f3-threeByTwoSmallAt2X.jpg",
                        "format": "threeByTwoSmallAt2X",
                        "height": 400,
                        "width": 600,
                        "type": "image",
                        "subtype": "photo",
                        "caption": "Pipes from Nord Stream 2 work in Sassnitz, Germany. Russia invaded Ukraine weeks after the pipeline was finished.",
                        "copyright": "Laetitia Vancon for The New York Times"
                    },
                    {
                        "url": "https://static01.nyt.com/images/2022/11/29/multimedia/00germany-fake-foundation-1-68f3/00germany-fake-foundation-1-68f3-thumbLarge.jpg",
                        "format": "Large Thumbnail",
                        "height": 150,
                        "width": 150,
                        "type": "image",
                        "subtype": "photo",
                        "caption": "Pipes from Nord Stream 2 work in Sassnitz, Germany. Russia invaded Ukraine weeks after the pipeline was finished.",
                        "copyright": "Laetitia Vancon for The New York Times"
                    }
                ],
                "short_url": "https://nyti.ms/3ixVFGj"
            }
        ]
    }
    const getData = async () => {
        const response = await fetch('htttps://api.nytimes.com/svc/topstories/v2/world.json?api-key=MbAGWpZtPD4vOmTpoFwONWeEbTLVlWmP')
        setdata(await response.json())

    }
    useEffect(() => {

        getData();



    }, [])

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
                   {apiData.map=()=>{
                     <div className="sb-content">
                     <div className="image-container">
                        <img src={apiData.url} alt="image" />
                     </div>
                     <div className="title">
                         <div className="title-heading"></div>
                         <div className="title-button"></div>
                     </div>
                 </div>
                   }}
                </div>
            </div>
        </div>
    )
}

export default NewsApi