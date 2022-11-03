import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

function CreateCourseForm() {
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        school_id: "",
        student_id: "",
    });

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);

        fetch("https://virtual-backend-app.herokuapp.com/courses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })

        .then((resp) => resp.json())
        .then((formData) =>setFormData(formData));

        navigate('/indashboard')
    }

    function handleChange(e) {
      
        setFormData({
          ...formData,
          [e.target.name]:e.target.value,
        });
      }
      console.log(formData)

  return (
    <div>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Course Name</Form.Label>
                <Form.Control type="textarea"
                     placeholder="Course Name"
                     value={formData.name}
                     onChange={handleChange}
                     id="name"
                     autoComplete="off" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control type="textarea"
                     placeholder="Course Name"
                     value={formData.description}
                     onChange={handleChange}
                     id="description"
                     autoComplete="off" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>School Name</Form.Label>
                <Form.Control type="textarea"
                     placeholder="School_id"
                     value={formData.school_id}
                     onChange={handleChange}
                     id="school_id"
                     autoComplete="off" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Student Name</Form.Label>
                <Form.Control type="textarea"
                     placeholder="Student_id"
                     value={formData.student_id}
                     onChange={handleChange}
                     id="student_id"
                     autoComplete="off" />
            </Form.Group>

            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
                {isLoading ? "Loading..." : "Submit"}
            </Button>

            <Form.Group>
                    {errors.map((err) => (
                   <error key={err}>{err}</error>
                     ))}
            </Form.Group>
        </Form>


    </div>
  )
}

export default CreateCourseForm