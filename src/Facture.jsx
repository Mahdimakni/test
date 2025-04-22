import { useState } from "react"
import Button from 'react-bootstrap/Button';

const Facture=()=>{
    const[fact,setFact]=useState({
        numfact:1,
        datefact:"17/09/2024",
        mtfact:390
    })

const handleupdate=()=>{
    setFact({...fact,numfact:2})
}


    return(
        <>
        <h3>num fact: {fact.numfact}</h3>
        <h3>date fact:{fact.datefact}</h3>
        <h3>montant :{fact.mtfact}</h3>
        <Button variant="success" onClick={()=>handleupdate()}> update </Button>
        </>
    )

}
export default Facture