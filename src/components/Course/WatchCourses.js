import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsShare } from 'react-icons/bs'
import { BsFillBookmarkDashFill } from 'react-icons/bs'


function WatchCourses() {
    return (
        <div className="StudentV">
            <h1>Robotics Instrumentation 101</h1>
            <h5>Prof. John Breaker</h5>
            <BsShare className="about_icon" />
            <BsFillBookmarkDashFill className="about_icon2" />
            <div>
                <iframe id="frame" src="https://www.youtube.com/embed/DX-VrBvu1xE" title="YouTube video" allowfullScreen></iframe>
            </div>
            <br />
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Description</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Reviews</Nav.Link>
                        <Nav.Link href="#features">Discussion</Nav.Link>
                        <Nav.Link href="#pricing">Resources</Nav.Link>
                        <Nav.Link href="#pricing">Instructor</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. Lorem Ipsum is not simply random text.<br />
                It has roots in a piece of classical Latin literature from 45 BC,  Lorem Ipsum is not simply random text.<br />
                making it over 2000 years old. Richard McClintock, a Latin professor  Lorem Ipsum is not simply random text. <br />
                at Hampden-Sydney College in Virginia, looked up one of the more obscure looked up one of the more obscure<br />
                Latin words, consectetur, from a Lorem Ipsum passage, and going through looked up one of the more obscure<br />
                the cites of the word in classical literature, discovered the undoubtable source.  discovered the undoubtable source. <br />
                Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum  discovered the undoubtable source. <br />
                et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.  discovered the undoubtable source.<br />
                This book is a treatise on the theory of ethics, very popular during the very popular during the<br />
                Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", very popular during the<br />
                comes from a line in section 1.10.32.
            </p>
        </div>
    )
}

export default WatchCourses
