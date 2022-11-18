import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {API_GET} from './APIService';

function View() {

      const [customerData,setcustomerData] = useState([]);
    
      const customer = async () => {
        try {
            const result = await axios.get(`${API_GET}/api/book/get-all`);
            console.log("categories data : ",result.data);
            setcustomerData(result.data);
        } catch (error) {
            console.log("error : " ,error);
        }
    }

    const deleteBook = (e) =>{
      console.log("id=>",e);
      try{
        const result = axios.delete(`${API_GET}/api/book/delete/${e}`);
        console.log("delete!",result);
        customer();
        alert("Book deleted succesfully!");
      }
      catch(error){
        console.log("error : " ,error);
      }

    }
    
    useEffect(()=>{
      customer();
    },[])

    return (
        <div>
             <Card style={{padding:10}}>
             <Card.Header style={{background:"red",fontSize:20,padding:10}}>View Book Details</Card.Header>

             <Table striped>
      <thead>
        <tr>
          <th>Book Title</th>
          <th>Author</th>
          <th>Cost</th>
          <th>Action</th>

        </tr>
      </thead>
      <tbody >{customerData.map((item)=>{

//add return otherwise this data not displaying
return(
  <tr>
  <td>{item.title}</td>
  <td>{item.author}</td>
  <td>{item.cost}</td>
  <td><button onClick={()=>deleteBook(item.id)}>Delete</button></td>

</tr>
)

})}
      </tbody>
    </Table>
             </Card>

           
        </div>
      );
}
export default View;