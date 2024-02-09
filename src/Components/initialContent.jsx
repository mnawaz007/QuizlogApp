/* eslint-disable react/prop-types */
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {motion} from 'framer-motion' ;
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";


const LogInForm = () => {
    return(
        <>
        <div className="container  ">


        <div className="container bg-transparent w-50 border border-primary mb-5">
            <div className="row">
                <div className="col">

        <button className='btn btn-outline-light text-dark w-50'> Login </button> 
       <button className='btn btn-outline-light text-dark  '> <input type=' text' placeholder='Enter Name ' /></button> 
        <button className='btn btn-outline-light text-dark '> <input type='password' placeholder='Enter Password' /></button> 
        

       
        <button className='btn btn-sm btn-outline-primary text-dark w-50'>LogIn</button> 
        <button className='btn btn-sm btn-outline-primary  text-dark w-50'>SignUp</button> 
        <button className='btn btn-outline-primary text-dark w-100 my-2'>Or Login Using...</button> 
        <button className='btn btn-outline-light text-dark w-25'><FaFacebook /> </button>
        <button className='btn btn-outline-light text-dark w-25 '><FaGithub /></button>
        <button className='btn btn-outline-light text-dark w-25 '><FaGoogle /></button>
        
       
                </div>
            </div>
        </div>
        </div>
        </>
    )
}


export default function InitialContent ({onSowAdmin }) {
    return (
        <> 
   
    <Container > 
        <Row>
            <Col md = {6}>
        
        
        <motion.button whileHover={{scale:1.2}} className="btn btn-primary" onClick={()=>{onSowAdmin(true)}}>Quiz </motion.button>
        <motion.button whileHover={{scale:1.2}} className="btn btn-primary mx-3" onClick={()=>{onSowAdmin(false)}}>Admin Pannel</motion.button>
        <h6><a href="#" target="_blank" >Home / OptionsQuiz </a></h6>
        
            </Col>
            <Col>
            <LogInForm />
            </Col>
        </Row>
        
        </Container> 
        </>
        )}