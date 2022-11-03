import React from 'react'
import DashSummaryCard from './DashSummaryCard'
import { Link } from 'react-router-dom'

const CourseDashSummary = () => {
  return (
    <div className='summarycontainer' style={{width: "25vw", height: "200px", border: "1px solid black"}}>
        <div className='summaryheader' style={{display: "flex", flexDirection: "column"}}>
            <h3>Courses</h3>
            <Link to="/courses"><button className='btn1'>View all</button></Link>
        </div>
        <div className='summarycontent'>
            <DashSummaryCard/>
            
        </div>
    </div>
  )
}

export default CourseDashSummary