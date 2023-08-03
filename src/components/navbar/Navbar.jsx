import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
const Navbar = () => {
    const [active, setActive] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll")
    },[])
    return(
        <div className={active ? "navbar active":"navbar"}>
         <div className='container'>
            <div className='logo'>
                <span className='text'>One</span>
                <span className='dot'>.</span>
                <span className='text'>Africa</span>
                </div>
        <div className='links'>
            <span className='text'>Business</span>
            <span className='text'>Explore</span>
            <span className='text'>English</span>
            <span className='text'>Sign in</span>
            <span className='text'>Work Anywhere</span>
            <button>Join</button>
         </div>
        </div>
       </div>
    )
}

export default Navbar