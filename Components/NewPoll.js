import React from 'react';
import {Container, Form, Buttom, Button} from 'react-bootstrap';
import { useRef } from 'react';

const NewPoll = (props) => {
  const candidateName1 = useRef();
  const candidateName2 = useRef();

  const candidateName1URL = useRef();
  const candidateName2URL = useRef();

  const promptRef = useRef();
    const sendToBlockChain = async() => {
      await window.contract.addUrl({
        name: candidateName1.current.value,
        url: candidateName1URL.current.value,
      });
      await window.contract.addUrl({
        name: candidateName2.current.value,
        url: candidateName2URL.current.value,
      });
      await window.contract.addCandidatePair({
        prompt: promptRef.current.value,
        name1: candidateName1.current.value,
        name2: candidateName2.current.value,
      });
      await window.contract.addToPromptArray({prompt: promptRef.current.value});
    }
  return (
    <Container style={{marginTop:'10px',}} >
      <Form>
        <Form.Group className="mb-3" >
          <Form.Label> Candidate 1 Name </Form.Label>
          <Form.Control ref={candidateName1}
           placeholder="Enter First Candidate's Name" ></Form.Control>
        </Form.Group>
      
      <Form.Group className="mb-3" >
        <Form.Label>Candidate 1 Image URL</Form.Label>
        <Form.Control ref={candidateName1URL} placeholder='Enter image URL' ></Form.Control>
      </Form.Group>

      <Form.Group className="mb-3" >
          <Form.Label> Candidate 2 Name </Form.Label>
          <Form.Control ref={candidateName2}
           placeholder="Enter Second Candidate's Name" ></Form.Control>
        </Form.Group>
      
      <Form.Group className="mb-3" >
        <Form.Label>Candidate 2 Image URL</Form.Label>
        <Form.Control ref={candidateName2URL} placeholder='Enter image URL' ></Form.Control>
      </Form.Group>

      <Form.Group className='mb-3' >
        <Form.Label>Prompt</Form.Label>
        <Form.Control ref={promptRef} placeholder='Add promt'></Form.Control>
      </Form.Group>

      <Button  onClick={sendToBlockChain} varient='primary' >
        Submit
      </Button>
      </Form>
    </Container>
  )
}

export default NewPoll
