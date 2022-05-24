import { Tab } from "bootstrap";
import React, { useEffect, useState } from "react";
import {Table, Container, Button} from 'react-bootstrap';


const Home = (props) => {
    const propList= ["Who would win in General Elections","Who is more capable as PM","Who is more capable as leader"]
  return (
    <div>
        <div class="alert alert-primary justify-content-center d-flex" role="alert">
        Work in Progress.
        </div>
        <Container>
            <Table style={{margin: "5vh"}} striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>List of Polls</th>
                        <th>Go to Poll</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        propList.map( (el, index) =>{
                            return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{el}</td>
                                <td><Button onClick={() => props.changeCandidates(el)}>Go to Poll</Button></td>
                            </tr>
                        )})
                    }

                </tbody>
            </Table>
        </Container>
    </div>
  )
}

export default Home
