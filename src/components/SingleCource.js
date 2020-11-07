import Axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';
import base_url from '../api/BootApi';


const Course = ({ course,update }) => {

    const deleteCourse = (id) => {
        Axios.delete(`${base_url}/course/${id}`).then(
            (response)=>{
                toast.success("course is deleted");
                update(id);
            },
            (error)=>{
                toast.warning("course is not  deleted");
            }
        )
    }
    

    return (
        <div>
            <Card className="text-center">
                <CardBody>
                    <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                    <CardText>{course.details}</CardText>
                    <Container className="text-center">
                        <Button color="warning">Update</Button>
                        <Button color="danger ml-3"
                            onClick={
                                () => { deleteCourse(course.id) }
                            }
                        >Delete</Button>
                    </Container>
                </CardBody>
            </Card>
        </div>
    );
};

export default Course;

