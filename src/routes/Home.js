import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const Home = ()=>{
  const [comment, setComment] = useState('');

  const onChange=(e)=>{
    // let value = e.target.value;
    const {target:{value}} = e; //비구조할당
    setComment(value);
  }

  const onSubmit= (e)=>{
    e.preventDefalut();

  }

  return(
    <div className="container">
    <Form onSubmit={onsubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" onChange={onChange} placeholder="글을 입력해주세요" />
      </Form.Group>
      <Button variant="primary">입력</Button>
    </Form>
    </div>
  )
};
export default Home;