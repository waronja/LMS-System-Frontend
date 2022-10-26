import React from 'react'
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assets/web-design.png";
import courseImg2 from "../../assets/graphics-design.png";
import courseImg3 from "../../assets/ui-ux.png";
import InstructorDetails from "./InstructorDetails";


const instructorData = [
  {
    id: "01",
    title: "Web Design BootCamp-2022 for Beginners",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Professional Graphics Design, PhotoShop, Adobe XD, Figma",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "UI/UX BootCamp for Beginners in 2022",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg3,
  },
];


function Instructor() {
  return (
    <div className='sidebar'>
      <h1>Instructor's Page</h1>
      <div className="btns">
        <button>Add School</button>
        <button>Add Students</button>
        <button>Take Attendance</button>
        <button>Add resources</button>
        <button>Courses</button>
        <button>Assignments</button>
      </div>
      
       <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Courses</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  consequatur libero quod voluptatibus ullam quia quas, vitae
                  voluptatem recusandae reprehenderit!
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          {instructorData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <InstructorDetails key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
    </div>
// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
// import UserCard from '../UserCard';
// import Layout from '../../Layout';


/* const Instructor = () => {
  return (
    <div className = "studentsContainer">

      <Layout/>

      <div>

        <h3>I am an instructor </h3>

          <CardGroup>

            <UserCard/>

          </CardGroup>

      </div>
        

    </div>*/
  )
} 

export default Instructor;