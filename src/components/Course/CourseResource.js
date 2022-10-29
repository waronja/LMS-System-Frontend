import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function CourseResource() {
  return (
    <div>
        <Tabs
      defaultActiveKey="Lesson 1"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="Lesson 1" title="Lesson 1">
        Add some notes to this pace dynamically"
      </Tab>
      <Tab eventKey="Lesson 2" title="Lesson 2">
        "Add some notes to this pace dynamically"
      </Tab>
      <Tab eventKey="Lesson 3" title="Lesson 3">
        Add some notes to this pace dynamically"
      </Tab>
      <Tab eventKey="Lesson 4" title="Lesson 4">
        Add some notes to this pace dynamically"
      </Tab>
    </Tabs>
        
    </div>
  );
}

export default CourseResource