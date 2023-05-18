import React from "react"
import foodmuch from '../assets/portfolio/foodmunch.png'
import EmojiGame from '../assets/portfolio/EmojiGame.png'
import moneyManagerApp from '../assets/portfolio/moneyMangerApp.png'
import MatchGame from '../assets/portfolio/MatchGame.png'
// import designwebpage from '../assets/portfolio/designwebpage.png'
import digitaltimer from '../assets/portfolio/digitaltimer.png'
import passwordmanager from '../assets/portfolio/passwordmanager.png'
import todo from '../assets/portfolio/todo.png'

const Portfolio=()=>{
    const portfolio=[
        {
            id:1,
            src:foodmuch,
            demo:'https://eshwarfoodpage.ccbp.tech/',
            code:'https://github.com/ESHWAR-333/Food-Munch'
        },
        {
            id:2,
            src:EmojiGame,
            demo:'https://mojiesgame.ccbp.tech/',
            code:'https://github.com/ESHWAR-333/Emoji-Game-React-js'


        },
        {
            id:3,
            src:moneyManagerApp, 
            demo:'https://moneymanganer.ccbp.tech/',
            code:'https://github.com/ESHWAR-333/-Money-Manager-App-React-JS'

        },
        {
            id:4,
            src:MatchGame,
            demo:'https://eshwarmatchgm.ccbp.tech/',
            code:'https://github.com/ESHWAR-333/Match-Game-React-js' 

        },
        {
            id:5,
            src:digitaltimer,
            demo:'https://countdigi.ccbp.tech/',
            code:'https://github.com/ESHWAR-333/Digital-Timer-App-React-JS' 

        },
        {
            id:6,
            src:passwordmanager,
            demo:'https://pwdsmanager.ccbp.tech/',
            code:'https://github.com/ESHWAR-333/Password-Manager-React-js' 

        },
        {
            id:7,
            src:todo,
            demo:'https://eshwartodos.ccbp.tech/',
            code:'https://github.com/ESHWAR-333/todo-application-javascript' 

        }
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
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"><a href={each.demo}>Demo</a></button>
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"><a href={each.code}>Code</a></button>
                        </div>
                    </div>))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio