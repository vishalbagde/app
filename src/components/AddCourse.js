import Axios from 'axios';
import React, { Fragment, useState } from 'react'
import { toast } from 'react-toastify';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import base_url from '../api/BootApi';


const AddCourse = () => {

    const [course, setCourse] = useState({});

    //form handle function

    const handleForm = (e) => {
        console.log(course);
        e.preventDefault();
        postDataToServer(course);
    };

    //function for post data on server

    const postDataToServer = (data) => {
        Axios.post(`${base_url}/course`, data).then(
            (response) => {
                console.log(response);
                console.log("success");
                toast.success("course added", {
                    position: "bottom-right"
                })
            },
            (error) => {
                console.log(error);
                console.log("error");
            }
        );
    };


    return <Fragment>
        <Container>
            <Form onSubmit={handleForm}>
                <h2 className="text-center">Fill Course Ditails</h2>
                <FormGroup>
                    <Label>Course Id</Label>
                    <Input type="text" placeholder="Enter Id" name="userid" id="userid"
                        onChange={(e) => setCourse({ ...course, id: e.target.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Course Title</Label>
                    <Input type="text" placeholder="Enter Title" name="title" id="title"
                        onChange={(e) => setCourse({ ...course, title: e.target.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Course Id</Label>
                    <Input type="textarea" placeholder="Enter Desc" name="desc" id="desc"
                        onChange={(e) => setCourse({ ...course, details: e.target.value })}
                    />
                </FormGroup>

                <FormGroup>
                    <Container className="text-center">
                        <Button type="submit" color="primary" >Add</Button>
                        <Button type="reset" color="warning ml-3">Clear</Button>
                    </Container>
                </FormGroup>
            </Form>
        </Container>
    </Fragment>;
};

export default AddCourse;