import React from 'react'
import { Button,Table } from 'react-bootstrap';

const Affichelivres=(props)=>{
    return(
        <div>
            <Table striped bordered hover>
      <thead>
        <tr>
        <th>couverture</th>
          <th>ISBN</th>
          <th>Titre</th>
          <th>auteur</th>
          <th>annee d'edition </th>
          <th>prix</th>
          <th>modifier</th>
          <th>supprimer</th>

        </tr>
      </thead>
      <tbody>
        {
          livres.map((l,index)=>
            <tr key={index}>
          <td><img src={l.couverture} width={70} height={70}/></td>
          <td>{l.isbn}</td>
          <td>{l.titre}</td>
          <td>{l.auteur}</td>
          <td>{l.annedition}</td>
          <td>{l.prix}</td>
          <td> <Button variant="warning">update</Button>{' '}</td>
          <td> <Button variant="danger" onClick={()=>handleDelete(l.isbn)}>delete</Button>{' '}</td>
        </tr>
        )
        }
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
        </div>
    )
}
export default Affichelivres