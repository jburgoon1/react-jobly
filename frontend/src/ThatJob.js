import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import api from './api'
import {Card, Button} from 'react-bootstrap'

const ThatJob = ({currentUser, applications, getuser}) =>{
    let {id} = useParams()
    id = parseInt(id)
    const [job, setJob] = useState([])


const applyToJob = async (e) =>{
    e.preventDefault()
    console.log(currentUser)
    const res = await api.apply(currentUser, id)
    getuser(currentUser)
}

    useEffect(()=>{
        async function getJob(id){
            const job = await api.getJob(id)
            setJob(job)
        }
        getJob(id)
    },[])

return (
    <div>
    {applications&& applications.includes(id)?
<Card className="text-center">
    <Card.Title>{job.title}</Card.Title>
    <Card.Body>{job.compname}</Card.Body>
    <Card.Body>Salary: ${job.salary}</Card.Body>
    <Card.Body>Equity: {job.equity}</Card.Body>
    <Button variant="primary" onClick={applyToJob} disabled>Applied</Button>
</Card>
:
<Card className="text-center">
    <Card.Title>{job.title}</Card.Title>
    <Card.Body>{job.compname}</Card.Body>
    <Card.Body>Salary: ${job.salary}</Card.Body>
    <Card.Body>Equity: {job.equity}</Card.Body>
    <Button variant="primary" onClick={applyToJob}>Apply</Button>
</Card>
    }
 
    </div>
)
}

export default ThatJob;