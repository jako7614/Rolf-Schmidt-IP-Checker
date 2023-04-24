import React from 'react'
import { PrismaClient } from '@prisma/client'

const Log = ({log, setIpLogs, setRelayLogs}) => {

    const DeleteLog = (log) => {
        if(log.address) {
            fetch("/api/iplog/" + log.id, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json"
                },
              }).then(res => res.json()).then(json => {
                setIpLogs(json)
              })
        } else {
            fetch("/api/relaylog/" + log.id, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json"
                },
              }).then(res => res.json()).then(json => {
                setRelayLogs(json)
              })
        }
    }

    const FormatDate = (date) => {
      var year = new Date(date).getFullYear()
      var month = new Date(date).getMonth()
      var day = new Date(date).getDate()
      var hour = new Date(date).getHours()
      let minute = (new Date(date).getMinutes()<10?'0':'') + new Date(date).getMinutes()
  
      var formatedDate = day + "-" + month + "-" + year + " - " + hour + ":" + minute
      return formatedDate
    }

    return(
        <div style={{
            display: "flex",
            width: "99%",
            border: "1px solid black",
            marginTop: "0.2vw",
            marginBottom: "0.2vw",
            justifyContent: "end",
            borderRadius: "11px",
        }}>
            <div style={{
                display: "flex",
                width: "90%",
                justifyContent: "space-evenly",
                alignItems: "center"
            }}>
                {log.address ? <h1 style={{margin: 0, fontSize: "1.5vw", width: "35%", display: "flex", justifyContent: "center"}}>{log.address}</h1> : <></>}
                <h1 style={{margin: 0, fontSize: "1.5vw", width: "30%", display: "flex", justifyContent: "center"}}>{log.state ? "Tændt" : "Slukket"}</h1>
                <h1 style={{margin: 0, fontSize: "1.5vw", width: "35%", display: "flex", justifyContent: "center"}}>{FormatDate(log.createdAt)}</h1>
            </div>
            <button style={{
                display: "flex",
                width: "10%",
                height: "2vw",
                background: "#DF4848",
                fontSize: "2vw",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "0 10px 10px 0",
                border: 0,
                cursor: "pointer"
            }} onClick={() => {DeleteLog(log)}}>Slet</button>
        </div>
    )
}
  

export default Log