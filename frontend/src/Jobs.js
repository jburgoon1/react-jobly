import React, { useEffect, useState } from 'react'
import api from './api'
import Job from './Job'


const Jobs = ({currentUser, applications,getuser}) =>{
    const [jobs, setJobs] = useState([])

    const applyToJob = async (e, jobId) =>{
        e.preventDefault()
        console.log(currentUser)
        const res = await api.apply(currentUser, jobId)
        getuser(currentUser)
    }
    useEffect(()=>{
        async function getAllJobs(){
        const job = await api.getJobs()
        setJobs(job)
        }
        getAllJobs()

    },[currentUser])
    return(
        <>
        {jobs.map(job =>(
            <div>
            {
                <a href={`/jobs/${job.id}`}>
                <Job id={job.id} 
                compname={job.companyHandle} 
                title={job.title} 
                salary={job.salary} 
                equity={job.equity} 
                isApplied={applications}
                apply={(e)=>applyToJob(e, job.id)}
                />
                </a>
            }
            </div>
            
        ))}
        </>
    )
}

export default Jobs;

