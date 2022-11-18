import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate } from "react-router-dom";
import {API_GET} from './APIService';

function Customer() {

const [title,setTitle] = useState("");
const [author,setAuthor] = useState("");
const [cost,setCost] = useState("");


const navigate = useNavigate();


const onSubmitHandler =async (event)=>{
  event.preventDefault(); 
  console.log("in here");
  try {
    await axios.post(`${API_GET}/api/book/save`,
    {id:0,
    title : title,
    author: author,
    cost:cost,

    });

    alert("Add book succesfully!")
    setTitle("");
    setAuthor("");
    setCost("");
    navigate("/view");

} catch (error) {
alert("book details Invalid");

}
    
}

    return (  

    <div>
     
    <Card style={{padding:10}}>
      <Card.Header style={{background:"red",fontSize:20,padding:10}}>Add Book Details</Card.Header>
      <Card.Body>
        <Form  onSubmit={onSubmitHandler}>
     
      <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Book Title</Form.Label>
          <Form.Control type="text" placeholder="book title" autocomplete ="off" name="firstName" value={title} onChange={(e)=>{
            console.log(e.target.value);  
            setTitle(e.target.value);
            }}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" placeholder="author"  autocomplete ="off" value={author} onChange={(e)=>{
              console.log(e.target.value);
              setAuthor(e.target.value);
              }} />
        </Form.Group>
     

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Cost(Rs)</Form.Label>
        <Form.Control placeholder="cost" value={cost} autocomplete ="off" onChange={(e)=>{setCost(e.target.value)}} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </Card.Body>
    </Card>
    </div>

);
}

export default Customer;