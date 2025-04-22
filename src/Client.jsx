import { useState } from "react"
import Afficheclient from './Afficheclient'


const Client=()=>{
    const[code,setCode]=useState("10")
    const[nom,setNom]=useState("IIT")
    const[email,setEmail]=useState("iit@gmail.com")
const handleChange=()=>{
    setCode("20")
    setNom("ISB")
    setEmail("isb@gmail.com")
}
    return(
        <>
       <Afficheclient code={code} nom={nom} email={email}/>
        <button onClick={(e)=>handleChange(e)}>changer</button>
        </>
    )
}
export default Client