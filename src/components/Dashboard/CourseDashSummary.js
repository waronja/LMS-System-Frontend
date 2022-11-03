import React from 'react'
import DashSummaryCard from './DashSummaryCard'
import { Link } from 'react-router-dom'

const CourseDashSummary = () => {
  return (
    <div className='summarycontainer' style={{width: "25vw"}}>
        <div className='summaryheader' style={{display: "flex", flexDirection: "column"}}>
            <h3>Courses</h3>
            <Link to="/courses"><button>View all</button></Link>
        </div>
        <div className='summarycontent'>
            <DashSummaryCard/>
            
        </div>
    </div>
  )
}

export default CourseDashSummary