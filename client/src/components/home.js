import './home.css'
import { Link} from 'react-router-dom';
import React from 'react';
import Nav from './nav'
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';

function Home() {
    return (
        <div className="Home">
        <Nav/> 
        <h1><i>HELLO! :)</i></h1>
        <h3><i>Welcome. If you already have an account here sign in to continue or else sign up first.</i></h3>
    </div>
    );
  }
  
export default Home;