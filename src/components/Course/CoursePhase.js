import React from 'react'
import CourseResource from './CourseResource'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import WatchCourses from './WatchCourses'


function CoursePhase() {
  return (
    <div>
        
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Phase 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Phase 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Phase 3</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="forth">Phase 4</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fifth">Phase 5</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
                <CourseResource/>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <WatchCourses/>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <CourseResource/>
            </Tab.Pane>
            <Tab.Pane eventKey="forth">
              <CourseResource/>
            </Tab.Pane>
            <Tab.Pane eventKey="fifth">
              <CourseResource/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>

    </div>
  )
}

export default CoursePhase