import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function CreateCourseForm() {
  return (
    <div>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Course Name</Form.Label>
                    <Form.Control type="textarea" placeholder="Ui/Ux For Newbies" />
            </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description Or Summary</Form.Label>
                    <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload Course Graphic</Form.Label>
                <Form.Control type="file" />
        </Form.Group>

        <Form.Select aria-label="Default select example">
            <option>How Many Phases Does The Course Have ?</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
            <option value="6">Six</option>
            <option value="7">Seven</option>
        </Form.Select>



        </Form>

        {/* Please remeber to include a group based form for easier display */}



                    <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Course Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridSummray">
                        <Form.Label>Course Description</Form.Label>
                        <Form.Control type="textarea " placeholder="Course Summary" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>


    </div>
  )
}

export default CreateCourseForm