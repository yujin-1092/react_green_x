import React from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const Comment = ({commentObj})=>{
  return(
    <ListGroup.Item>
    <div className='d-flex justify-content-between'>
      {commentObj.comment}
        <div className='d-flex gap-1'>
        <Button variant="secondary" size="sm">수정</Button>
        <Button variant="danger" size="sm">삭제</Button>
        </div>
    </div>
    </ListGroup.Item> 
  )
}
export default Comment;