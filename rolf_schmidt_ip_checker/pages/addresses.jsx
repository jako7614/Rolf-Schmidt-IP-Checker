import Header from "@/components/Header";
import Address from '@/components/address'
import { useEffect, useState } from "react";
import { PrismaClient } from "@prisma/client"
import Modal from 'react-modal';
import { setCookie, getCookie, hasCookie, deleteCookie } from 'cookies-next';
import { useRouter } from "next/router";

export default function Addresses(props) {

    const router = useRouter(); 
    const [addresses, setAddresses] = useState()
    const [modalIsOpen, setIsOpen] = useState(false);
    const [machineNumber, setMachineNumber] = useState("")
    const [machineIP, setMachineIP] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    const HandleNumber = (event) => {
        setMachineNumber(event.target.value)
    }

    const HandleIP = (event) => {
        setMachineIP(event.target.value)
    }

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
    	setIsOpen(false);
        setMachineIP("")
        setMachineNumber("")
    }

    const HandleSubmit = () => {

        var tempMachine = {
            number: machineNumber,
            ip: machineIP
        }

        fetch("/api/address/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tempMachine)
            }).then(res => res.json()).then(json => {
            closeModal()
            setMachineIP("")
            setMachineNumber("")
            setAddresses(json)
            })
    }

    useEffect(() => {
        var check = getCookie("loggedin")
        if (check != true) {
            router.push("../")
        } else {
            setAddresses(props.data)
            setIsLoading(!isLoading)
        }
    }, [])
    
    if (isLoading) return
    return(
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
                        marginBottom: "0.2vw"
                    }}>
                        <button style={{
                            width: "10%",
                            height: "3vw",
                            borderRadius: "10px",
                            border: 0,
                            background: "#42CB6B",
                            fontSize: "1vw",
                            cursor: "pointer"
                        }} onClick={openModal}>Tilføj IP</button>
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
                            addresses?.sort((a, b) => (a.number - b.number))?.map((address) => {
                            console.log(address)
                            return(
                                <Address address={address} setAddresses={setAddresses}/>
                            )
                            })
                        }
                    </div>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={{
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    content: {
                        inset: "15vh 30vw",
                        boxShadow: "0px 0px 5px 5px #888888"
                    },
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(150, 150, 150, 0.75)'
                      },
                }}
            >
                <div style={{
                    height: "100%"
                }}>
                    <form style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "100%",
                        justifyContent: "space-between"
                    }} onSubmit={(event) => {
                            event.preventDefault()
                            HandleSubmit()
                    }}>
                        <div style={{
                            display: "flex",
                            width: "100%",
                            flexDirection: "column",
                            alignItems: "center",
                            height: "20vw",
                            justifyContent: "space-between",
                            marginTop: "2vw"
                        }}>
                            <h1 style={{
                                fontSize: "2.5vw"
                            }}>Tilføj IP</h1>
                            <div style={{
                                display: "flex",
                                width: "100%",
                                flexDirection: "column",
                                height: "10vw",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}>
                                <div style={{
                                    width: "90%"
                                }}>
                                    <label style={{
                                        fontSize: "1.4vw"
                                    }}>Maskine nummer</label>
                                    <input onChange={HandleNumber} value={machineNumber} placeholder="0" style={{
                                        display: "flex",
                                        width: "100%",
                                        height: "2.5vw",
                                        borderRadius: "4px",
                                        border: "1px solid black",
                                        fontSize: "1.2vw"
                                    }}/>
                                </div>
                                <div style={{
                                    width: "90%"
                                }}>
                                    <label style={{
                                        fontSize: "1.4vw"
                                    }}>Maskine IP</label>
                                    <input onChange={HandleIP} value={machineIP} placeholder="192.168.1.1" style={{
                                        display: "flex",
                                        width: "100%",
                                        height: "2.5vw",
                                        borderRadius: "4px",
                                        border: "1px solid black",
                                        fontSize: "1.2vw"
                                    }}/>
                                </div>
                            </div>
                        </div>
                        <div style={{
                            display: "flex",
                            width: "50%",
                            justifyContent: "space-between",
                            justifySelf: "end",
                            marginBottom: "2vh"
                        }}>
                            <button type="button" style={{
                                display: "flex",
                                height: "4vw",
                                width: "45%",
                                fontSize: "1.5vw",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "10px",
                                border: 0,
                                cursor: "pointer",
                                background: "#008DFF"
                            }} onClick={closeModal}>Annuller</button>
                            <button type="submit" style={{
                                display: "flex",
                                height: "4vw",
                                width: "45%",
                                fontSize: "1.5vw",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "10px",
                                border: 0,
                                cursor: "pointer",
                                background: "#42CB6B"
                            }}>Tilføj</button>
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    )
}

export async function getStaticProps() {
    const prisma = new PrismaClient()
    const addresses = await prisma.machineip.findMany()
  
    return { props : { data: JSON.parse(JSON.stringify(addresses)) } }
  }