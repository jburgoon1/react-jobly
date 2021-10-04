import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import api from './api'
import {Card, Button} from 'react-bootstrap'


const Job = ({id, title, compname, salary, equity, apply, isApplied}) =>{

return (
    <div>
 {isApplied.includes(id)?
<Card className="text-center">
    <Card.Title>{title}</Card.Title>
    <Card.Body>{compname}</Card.Body>
    <Card.Body>Salary: ${salary}</Card.Body>
    <Card.Body>Equity: {equity}</Card.Body>
    <Button variant="primary" disabled>Applied!</Button>
</Card>
:
<Card className="text-center">
    <Card.Title>{title}</Card.Title>
    <Card.Body>{compname}</Card.Body>
    <Card.Body>Salary: ${salary}</Card.Body>
    <Card.Body>Equity: {equity}</Card.Body>
    <Button variant="primary" onClick={apply}>Apply</Button>
</Card>
 }
 </div>
    
)
}

export default Job;