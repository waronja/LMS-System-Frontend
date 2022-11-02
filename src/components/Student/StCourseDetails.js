// import React from 'react'
// import CoursePhase from '../Course/CoursePhase';
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
// import InSideMenu from './StSideMenu';
// import './StCourseDetails.css'

    // const StCourseDetails = ()  => {
    // const [users, setUsers] = useState([])
    // const getUsers = async () => {
    //     const response = await fetch("http://127.0.0.1:3000/students");
    //     const FinalData = await response.json();
    //     setUsers(FinalData)
    //     console.log(FinalData)
    // }
    // useEffect(() => {
    //     getUsers();
    // }, [])

// function StCourseDetails() {
//   return (
//     // <div className = "stcoursedetails">


//       <div className="container">

//           {
//               users.map((curElem) => {
//                   return (

//                       <div className="card_item" key={curElem.id}>
//                           <div className="card_inner">
//                               <img src={curElem.last_name} alt="" />
//                               <div className="userName">{curElem.first_name}</div>
//                               <div className="userUrl">{curElem.email}</div>
//                               <div className="detail-box">

//                                   <div className="gitDetail"><span>Articles</span>23</div>
//                                   <div className="gitDetail"><span>Following</span>45</div>
//                                   <div className="gitDetail"><span>Followers</span>11</div>
//                               </div>
//                               <button className="seeMore">See More</button>
//                           </div>

//                       </div>
//                   )
//               })
//           }

//       </div>


//   )
// }



/* import React from 'react'
import CoursePhase from '../Course/CoursePhase';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import InSideMenu from './StSideMenu';
import './StCourseDetails.css' */


/* function StCourseDetails() {
  return (
    <div className = "stcoursedetails">

        <InSideMenu/>

        <div> 
            
            <Tabs
                defaultActiveKey="profile"
                id="justify-tab-example"
                className="mb-3">

                <Tab eventKey="overview" title="Overview">
                Overview 
                </Tab>

                <Tab eventKey="phases" title="Phases">
                <CoursePhase/>
                </Tab>

                <Tab eventKey="files" title="Files">
                Files
                </Tab>
                
            </Tabs>

        </div>
    </div>

  )
}
 export default StCourseDetails */
