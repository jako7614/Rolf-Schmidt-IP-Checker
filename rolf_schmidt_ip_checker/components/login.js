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
                setCookie("loggedIn", true)
                setLoggedIn(true)
            } else {
                console.log("Fail")
            }
        })
    }

    return(
        <div>
            <form onSubmit={(event) => {
                event.preventDefault()
                CheckValidPassword()
            }}>
            <input placeholder='Password' onChange={ChangeHandler} defaultValue={input}/>
            <button type='submit'>Log Ind</button>
            </form>
        </div>
    )
}

export default Login