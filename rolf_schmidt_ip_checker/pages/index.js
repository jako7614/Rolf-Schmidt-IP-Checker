import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import LoginPage from '../components/login'
import { setCookie, getCookie, hasCookie, deleteCookie } from 'cookies-next';

export default function Home() {

  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    getCookie("loggedIn") == true ? setLoggedIn(true) : setLoggedIn(false)
  }, [])
  return (
    <>
      {
        loggedIn ? 
        <h1>Yes</h1> :
        <LoginPage />
      }
    </>
  )
}
