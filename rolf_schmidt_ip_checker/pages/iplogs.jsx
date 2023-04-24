import { useEffect, useState } from 'react'
import LoginPage from '../components/login'
import { PrismaClient } from '@prisma/client'
import { setCookie, getCookie, hasCookie, deleteCookie } from 'cookies-next';
import Header from '@/components/Header';
import Log from '@/components/log';
import { useRouter } from "next/router";

export default function IpLogs(props) {
  
  const router = useRouter(); 
  const [ipLogs, setIpLogs] = useState()
  const [toggleTop100, setToggleTop100] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const HandleTop100 = (state) => {
    if (toggleTop100 == state) {
      return
    }
    setToggleTop100(!toggleTop100)
  }

  useEffect(() => {
    var check = getCookie("loggedin")
      if (check != true) {
          router.push("../")
      } else {
        setIpLogs(props.data.sort((a, b) => {
          return new Date(a.createdAt).getTime() -
            new Date(b.createdAt).getTime()
        }).reverse())
        setIsLoading(!isLoading)
      }
  }, [])

  if (isLoading) return
  return (
    <>
      <Header />
      <div style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}>
          <h1 style={{
              fontSize: "3vw"
          }}>IP Logs</h1>
          <div style={{
            display: "flex",
            width: "80%",
            flexDirection: "column",
            alignItems: "center"
          }}>
            <div style={{
              display: "flex",
              width: "99%",
              justifyContent: "end",
              marginBottom: "0.2vw",
              gap: "10px"
            }}>
              <button style={{
                width: "10%",
                height: "3vw",
                borderRadius: "10px",
                border: 0,
                background: "#42CB6B",
                fontSize: "1vw",
                cursor: "pointer"
              }} onClick={() => HandleTop100(true)}>Seneste 1000</button>
              <button style={{
                width: "10%",
                height: "3vw",
                borderRadius: "10px",
                border: 0,
                background: "#42CB6B",
                fontSize: "1vw",
                cursor: "pointer"
              }} onClick={() => HandleTop100(false)}>Alle</button>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "700px",
                border: "2px solid black",
                alignItems: "center",
                overflow: "auto",
            }}>
              {
                toggleTop100 ? 
                ipLogs?.slice(0, 1000).map((log) => {
                  console.log(log)
                  return(
                      <Log log={log} setIpLogs={setIpLogs}/>
                  )
                }) :
                ipLogs?.map((log) => {
                console.log(log)
                return(
                    <Log log={log} setIpLogs={setIpLogs}/>
                )
                })
              }
            </div>
          </div>
      </div>
    </>
  )
  
}

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const ipLogs = await prisma.iplog.findMany()

  return { props : { data: JSON.parse(JSON.stringify(ipLogs)) } }
}
