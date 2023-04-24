import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import LoginPage from '../components/login'
import { useRouter } from 'next/router'
import { PrismaClient } from '@prisma/client'
import { setCookie, getCookie, hasCookie, deleteCookie } from 'cookies-next';
import Header from '@/components/Header';
import AddressPage from './relaylogs.jsx'


export default function Home(props) {

  const router = useRouter(); 
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    getCookie("loggedin") == true ? setLoggedIn(true) : setLoggedIn(false)

  }, [])
  
  if (loggedIn) {
    router.push("../iplogs")
  } else {
    return(
      <LoginPage setLoggedIn={setLoggedIn} props={props}/>
    )
  }
}

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const ipLogs = await prisma.iplog.findMany()
  const relayLogs = await prisma.relaylog.findMany()
  const machines = await prisma.machineip.findMany()
  const users = await prisma.users.findMany()

  return { props : { ipLogs: JSON.parse(JSON.stringify(ipLogs)), relayLogs: JSON.parse(JSON.stringify(relayLogs)), machines: JSON.parse(JSON.stringify(machines)), users: JSON.parse(JSON.stringify(users)) } }
}
