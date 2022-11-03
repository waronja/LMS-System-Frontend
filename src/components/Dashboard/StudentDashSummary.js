import React from 'react'
import DashSummaryCard from './DashSummaryCard'
import { Link } from 'react-router-dom'


const StudentDashSummary = () => {
  
 
  return (
    <div className='summarycontainer' style={{width: "25vw", height:"200px", border: "1px solid black"}}>
        <div className='summaryheader' style={{display: "flex", flexDirection: "column"}}>
            <h3 className='h3'>Students</h3>
            {/* <button 
            >View all</button> */}

            <Link to="/students"><button className='btn1'>View all</button></Link>
        </div>
        <div className='summarycontent'>
            <DashSummaryCard/>
            
        </div>
    </div>
  )
}

export default StudentDashSummary