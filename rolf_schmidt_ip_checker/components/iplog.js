import React from 'react'

const IpLog = ({log}) => {
    return(
        <div>
            <h1>{log.address}</h1>
            <h1>{log.state ? "On" : "Off"}</h1>
            <h1>{log.createdAt}</h1>
        </div>
    )
}
  

export default IpLog