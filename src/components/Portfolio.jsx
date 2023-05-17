import React from "react"
import foodmuch from '../assets/portfolio/foodmunch.png'
import EmojiGame from '../assets/portfolio/EmojiGame.png'
import moneyManagerApp from '../assets/portfolio/moneyMangerApp.png'
import MatchGame from '../assets/portfolio/MatchGame.png'
import designwebpage from '../assets/portfolio/designwebpage.png'

const Portfolio=()=>{
    const portfolio=[
        {
            id:1,
            src:foodmuch, 
        },
        {
            id:2,
            src:EmojiGame, 
        },
        {
            id:3,
            src:moneyManagerApp, 
        },
        {
            id:4,
            src:MatchGame, 
        },
        {
            id:5,
            src:designwebpage, 
        },
    ]
    return(
        <div name="portfolio" className="w-full bg-gradient-to-b from-black to-gray-800 text-white p-4 md:h-fit ">
            <div className="max-w-screen-lg flex flex-col justify-center w-full mx-auto  h-full pb-11">
                <div className="pb-8">
                    <p className="font-bold text-4xl inline border-b-4 border-gray-500">Portfolio</p>
                    <p className="text-xl py-6">Check out some of my Work right here</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolio.map(each=>(<div key={each} className="shadow-md shadow-gray-600 rounded-lg ">
                        <img src={each.src} alt="" className="rounded-md duration-200 hover:scale-105"/>
                        <div className="flex items-center justify-center">
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                        </div>
                    </div>))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio