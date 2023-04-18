import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import LoginPage from '../components/login'
import { PrismaClient } from '@prisma/client'
import { setCookie, getCookie, hasCookie, deleteCookie } from 'cookies-next';
import Header from '@/components/Header';
import IpLog from '@/components/iplog';

export default function Home(props) {

  return (
    <>
      <Header />
      {
        props?.ipLogs?.map((log) => {
          console.log(log)
          return(
            <IpLog log={log}/>
          )
        })
      }
    </>
  )
  
}

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const ipLogs = await prisma.iplog.findMany()
  const relayLogs = await prisma.relaylog.findMany()
  const machines = await prisma.machineip.findMany()
  const users = await prisma.users.findMany()

  return { props : { ipLogs: JSON.parse(JSON.stringify(ipLogs)), relayLogs: JSON.parse(JSON.stringify(relayLogs)), machines: JSON.parse(JSON.stringify(machines)), users: JSON.parse(JSON.stringify(users)) } }
}
