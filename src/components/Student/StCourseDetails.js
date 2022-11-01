import React, {useEffect, useState} from 'react'
import './StCourseDetails.css'
// import {FaHistory} from 'react-icons/fa'
// import {FcApproval} from 'react-icons/fc'
// import {GiProgression} from 'react-icons/gi'
import 'bootstrap/dist/css/bootstrap.min.css';


const StCourseDetails = ()  => {
  const [users, setUsers] = useState([])
  const getUsers = async () => {

    // The line below should query course id not all courses.
      const response = await fetch("https://virtual-backend-app.herokuapp.com/courses");
      const FinalData = await response.json();
      setUsers(FinalData)
  }



  useEffect(() => {
      getUsers();
  }, [])


  return (

      <div className="container">

          {
              users.map((curElem) => {
                  return (

                      <div className="card_item" key={curElem.id}>
                          <div className="card_inner">
                              <img src={curElem.last_name} alt="" />
                              <div className="userName">{curElem.first_name}</div>
                              <div className="userUrl">{curElem.email}</div>
                              <div className="detail-box">

                                  <div className="gitDetail"><span>Articles</span>23</div>
                                  <div className="gitDetail"><span>Following</span>45</div>
                                  <div className="gitDetail"><span>Followers</span>11</div>
                              </div>
                              <button className="seeMore">See More</button>
                          </div>

                      </div>
                  )
              })
          }

      </div>


  )
}


// function StCourseDetails() {
//   return (
    // <section id= "About">
    //  <h5>Student Courses</h5>
    //  <h2>My tasks</h2>
    //  <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>

    //  <div className="container about_container">
    //   <div className="about_me">
    //     <div className="about_me-image">
    //     <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
    //       {/* <img src={first} alt="about us" /> */}
    //     </div>
    //   </div>
    //    <div className="about_content">
    //     <div className= "about_cards">
    //       <article className="about_card">
    //         <FaHistory className="about_icon"/>
    //         <h5>Description</h5>
    //         <small>read more</small>
    //       </article>

    //       <article className='about_card'>
    //         <FcApproval className="about_icon"/>
    //         <h5>Reviews</h5>
    //         <small>see more</small>
    //       </article>

    //       <article className='about_card'>
    //         <GiProgression className="about_icon"/>
    //         <h5>Resources</h5>
    //         <small>Current & Future projects</small>
    //       </article>

    //     </div>
        
    //       <h2>My Assignments</h2>
    //       <p>Lorem ipsum dolor sit amet, consectetur 
    //         adipiscing elit. Cras sagittis orci laoreet 
    //         ex maximus tristique. Phasellus quis vehicula 
    //         metus, sed aliquam purus. Phasellus odio mi, 
    //         iaculis eget sagittis a, ornare nec risus.
    //          Mauris non dolor ac est laoreet placerat ut
    //           sed velit. Suspendisse non neque id urna
    //            tempor semper. Nam ac tellus elementum, 
    //            luctus arcu nec, sagittis orci. Cras eu
    //             vestibulum dui. Ut vitae nisl lacus. 
    //             Maecenas pulvinar egestas erat ut pharetra.
    //              Quisque bibendum, metus eu elementum ultricies, 
    //              nisl mauris commodo ipsum, vitae rhoncus magna 
    //              diam a ante. Vivamus sit amet diam fermentum,
    //               posuere dui at, rutrum sapien..</p>
                   
    //    </div>
    //  </div>
    // </section>
//   )
// }

export default StCourseDetails