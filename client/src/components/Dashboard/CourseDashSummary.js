import React from 'react'
import DashSummaryCard from './DashSummaryCard'

const CourseDashSummary = () => {
  return (
    <div className='summarycontainer'>
        <div className='summaryheader'>
            <h3>Courses</h3>
            <button>View all</button>
        </div>
        <div className='summarycontent'>
            <DashSummaryCard/>
            
        </div>
    </div>
  )
}

export default CourseDashSummary