import React from 'react'
import DashSummaryCard from './DashSummaryCard'
import { Link } from 'react-router-dom'


const StudentDashSummary = () => {
  
 
  return (
    <div className='summarycontainer' style={{width: "25vw"}}>
        <div className='summaryheader' style={{display: "flex", flexDirection: "column"}}>
            <h3>Students</h3>
            {/* <button 
            >View all</button> */}

            <Link to="/students"><button>View all</button></Link>
        </div>
        <div className='summarycontent'>
            <DashSummaryCard/>
            
        </div>
    </div>
  )
}

export default StudentDashSummary