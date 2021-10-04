import React, { useEffect, useState } from 'react'
import api from './api'
import ListCompany from './Company'
const Companies = () =>{
    const [companies, setCompanies] = useState([])
    useEffect(()=>{
        async function getCompanies(){
        const companies = await api.getCompanies()
        setCompanies(companies)
        }
        getCompanies()
    },[])
    return(
        <>
        {companies.map(comp =>(
            <a href={`/companies/${comp.handle}`}>
           <ListCompany key={comp.handle} name={comp.name} logo={comp.logoUrl} desc={comp.description} num={comp.numEmployees}/>
           </a>
        ))}
        </>
    )
}

export default Companies;