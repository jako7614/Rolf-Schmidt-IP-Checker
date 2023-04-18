import React, { useState } from "react"
import { useRouter } from 'next/router'
import { setCookie, getCookie, hasCookie, deleteCookie } from 'cookies-next';
import logo from '../public/images/logo.png'

const Header = () => {
    const [title, setTitle] = useState()

    const router = useRouter(); 

    const HandleNavClick = function(event, stage, text) {
      event.preventDefault();
      setTitle(event.target.innerHTML)
      router.push(stage)
    }



    return (   
      <>
          <nav style={{
            backgroundColor: "blue",
            display: "flex"
          }}>
            <img src={logo} alt="image"/>
            <ul style={{
              display: "flex",
              flexDirection: "row",
              listStyle: "none"
            }}>
                <li onClick={(e) => HandleNavClick(e, "../addresser")}>ADDRESSER</li>
                <li style={{color: "red"}} onClick={() => {
                  setCookie("loggedin", false)
                  router.push("/")
                }}>LOG UD</li>
            </ul>
          </nav>
      </>      

    )
}

export default Header;