import React from "react"
import {FaGithub,FaLinkedin} from "react-icons/fa"
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Footer=()=>{
    const links=[
        {
            id:1,
            child:<>
                <FaLinkedin size={30}/>
            </>,
            href:"https://www.linkedin.com/in/eshwar-chalamalla/",
            style:'rounded-tr-md'
        },
        {
            id:2,
            child:<><FaGithub size={30}/></>,
            href:"https://github.com/ESHWAR-333"
        },
        {
            id:3,
            child:<><HiOutlineMail size={30}/></>,
            href:"mailto:chalamallan3@gmail.com"
        },
        {
            id:4,
            child:<><BsFillPersonLinesFill size={30}/></>,
            href:"/Resume.pdf",
            style:'rounded-br-md',
            download:true
        }
    ]
    return(
        <div className='md:hidden  w-full  text-gray-500 p-4 md:h-fit '>
      <div className="max-w-screen-lg flex flex-col justify-center w-full mx-auto  h-full pb-11">
      <ul className="flex  items-center">
      {
        links.map(each=>(<li key={each.id} className="mr-4 mb-0">
            <a target='_blank' rel="noreferrer" download={each.download} href={each.href} className="flex justify-between items-center w-full">
                    {each.child}
                </a>
                </li>))
      }
      </ul>
      </div>
      </div>
    )

}
export default Footer