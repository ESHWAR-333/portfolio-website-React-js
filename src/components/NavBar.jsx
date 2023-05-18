import React,{useState} from "react"

import {FaBars,FaTimes} from 'react-icons/fa'

import {Link} from 'react-scroll'

const NavBar=()=>{

    const[nav,setNav]=useState(false)

    const links=[
        {
            id:1,
            link:'home'
        },
        {
            id:2,
            link:'about'
        },
        {
            id:3,
            link:'portfolio'
        },
        {
            id:4,
            link:'certifications'
        },
        {
            id:5,
            link:'experience'
        },
        {
            id:6,
            link:'contact'
        },
        
    ]
return(
    <div className="flex justify-between items-center w-full h-20 text-white fixed bg-black px-4">
        <div>
            <h1 className="font-signature font-medium text-5xl ml-2">Eshwar</h1>
        </div>
        <ul className="hidden md:flex">
           {links.map(each=><li key={each.id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200"><Link to={each.link} smooth duration={500}>{each.link}</Link></li>) }
        </ul>

        <div onClick={()=>setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
        {nav?<FaTimes className="" size={30}/>:<FaBars className="" size={30}/>}
        </div>

        {nav&&(<ul className="flex flex-col justify-center items-center absolute h-screen w-full left-0 top-0  text-gray-500 bg-gradient-to-b from-black to-gray-800">
        {links.map(each=><li key={each.id} className="cursor-pointer capitalize py-6 text-4xl px-4"><Link onClick={()=>setNav(!nav)} to={each.link} smooth duration={500}>{each.link}</Link></li>)}
        </ul>)}
    </div>
)
}

export default NavBar