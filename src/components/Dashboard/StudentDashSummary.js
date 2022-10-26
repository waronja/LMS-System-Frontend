import React from 'react'
import DashSummaryCard from './DashSummaryCard'
import { Link } from 'react-router-dom'


const StudentDashSummary = () => {
  
 
  return (
    <div className='summarycontainer'>
        <div className='summaryheader'>
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