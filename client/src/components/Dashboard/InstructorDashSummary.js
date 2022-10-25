import React from 'react'
import DashSummaryCard from './DashSummaryCard'

const InstructorDashSummary = () => {
  return (
    <div className='summarycontainer'>
        <div className='summaryheader'>
            <h3>Instructor</h3>
            <button>View all</button>
        </div>
        <div className='summarycontent'>
            <DashSummaryCard/>
            
        </div>
    </div>
  )
}

export default InstructorDashSummary