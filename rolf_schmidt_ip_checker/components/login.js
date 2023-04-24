import React, { useState } from 'react'
import { setCookie, getCookie, hasCookie, deleteCookie } from 'cookies-next';
import { PrismaClient } from '@prisma/client'

const Login = ({setLoggedIn, props}) => {

    const [input, setInput] = useState("")

    const ChangeHandler = (event) => {
        setInput(event.target.value)
    }

    const CheckValidPassword = () => {
        props.users.forEach(user => {
            if (user.password == input) {
                setCookie("loggedin", true)
                setLoggedIn(true)
            } else {
                console.log("Fail")
            }
        })
    }

    return(
        <>
            <form onSubmit={(event) => {
                event.preventDefault()
                CheckValidPassword()
            }} style={{
                display: "flex",
                flexDirection: "column",
                position: "absolute",
                width: "50%",
                height: "50%",
                top: "25%",
                left: "25%",
                justifyContent: "center",
                alignItems: "center",
                gap: "1vw"
            }}>
                <input placeholder='Password' onChange={ChangeHandler} defaultValue={input} style={{width: "50%", height: "3vw", borderRadius: "12px", border: "1px solid black"}}/>
                <button type='submit' style={{width: "25%", height: "3vw", borderRadius: "12px", border: 0, background: "#191A4E", color: "white", fontSize: "1vw"}}>Log Ind</button>
            </form>
        </>
    )
}

export default Login