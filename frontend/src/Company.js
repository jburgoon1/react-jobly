import React from 'react'
import {Card} from 'react-bootstrap'
const ListCompany = ({name, logo, desc, num}) =>{
return(
    <Card className="text-center">
        <Card.Title>{name}</Card.Title>
        <Card.Body>{desc}</Card.Body>
        <Card.Body>Number of Employees: {num}</Card.Body>
    </Card>
)
}

export default ListCompany;