import Axios from 'axios';
import React from 'react';
import { useNavigate,Link} from 'react-router-dom';
import {useState,useEffect}  from 'react';
import { useDispatch } from 'react-redux';
import Nav1 from './nav1'
import './getTodo.css'

function GetTodo(){
    const [todo,setTodo]=useState({
        tasks:[],

});

const gettodo=async()=>{
    const response=await Axios.get('http://localhost:3000/api/gettask');
    return response.data
}
    useEffect(()=>{
       gettodo().then((arr)=>{setTodo({tasks:arr})})
         
    },[])
    console.log(todo)
    /* async function HandleClick(){
        try{

        const resp=await Axios.post('http://localhost:3000/api/deletetask',{id:this.id});
        console.log(resp)
        }
        catch(error){
            console.log('error');
            console.log(error);
        }
    } */
    
    return(
      <div className='GetTodo'>
          <Nav1/>
          <br />
          {(todo.tasks.length===0)?<h2>No Tasks to Complete</h2>:todo.tasks.map((item)=><div className='tasks'  ><p className='para'><b><i>{(item.task).toUpperCase()}</i></b><button className='btn-btn' onClick={async()=>{const resp=await Axios.post('http://localhost:3000/api/deletetask',{id:item.id});console.log(resp);gettodo().then((arr)=>{setTodo({tasks:arr})})}}><b>X</b></button></p><br /></div>)}
      </div>  
    )
}
export default GetTodo;