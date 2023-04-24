import React from 'react'

const Log = ({address, setAddresses}) => {

    const DeleteAddress = (address) => {
        fetch("/api/address/" + address.id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            }).then(res => res.json()).then(json => {
            setAddresses(json)
            })
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
                <h1 style={{margin: 0, fontSize: "1.5vw"}}>{address.number}</h1>
                <h1 style={{margin: 0, fontSize: "1.5vw"}}>{address.ip}</h1>
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
            }} onClick={() => {DeleteAddress(address)}}>Slet</button>
        </div>
    )
}
  

export default Log