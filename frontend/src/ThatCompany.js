import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from './api'
import {Card} from 'react-bootstrap'

const ThatCompany = () =>{
    const {handle} = useParams()

    const [compName, setCompName] =useState([])
    const [compDesc, setCompDesc] =useState([])
    const [compJobs, setCompJobs] =useState([])
    useEffect(() =>{
        async function getComp(handle){
            const company = await api.getCompany(handle)
            console.log(company)
            setCompName(company.title)
            setCompDesc(company.description)
            setCompJobs(company.jobs)
        }
        getComp(handle)
    

    },[])
    
return(
    
    <div>
    <h1>{compName}</h1>
    <h2>{compDesc}</h2>
   
    {compJobs.map(c =>(
       <a href={`/jobs/${c.id}`}>
        <Card className="text-center">
            <Card.Title>{c.title}</Card.Title>
            <Card.Body>Salary: ${c.salary}</Card.Body>
            <Card.Body>Equity: {c.equity}</Card.Body>
        </Card>
       
        </a>
    )) }
  * 
    </div>
    
)
}

export default ThatCompany;