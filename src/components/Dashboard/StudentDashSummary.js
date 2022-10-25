import React from 'react'
import DashSummaryCard from './DashSummaryCard'

const StudentDashSummary = () => {
  return (
    <div className='summarycontainer'>
        <div className='summaryheader'>
            <h3>Students</h3>
            <button>View all</button>
        </div>
        <div className='summarycontent'>
            <DashSummaryCard/>
            
        </div>
    </div>
  )
}

export default StudentDashSummary