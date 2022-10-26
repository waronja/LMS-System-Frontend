import React from 'react'
import DashSummaryCard from './DashSummaryCard'
import { Link } from 'react-router-dom'

const InstructorDashSummary = () => {
  return (
    <div className='summarycontainer'>
        <div className='summaryheader'>
            <h3>Instructor</h3>
            <Link to="/instructors"><button>View all</button></Link>
        </div>
        <div className='summarycontent'>
            <DashSummaryCard/>
            
        </div>
    </div>
  )
}

export default InstructorDashSummary