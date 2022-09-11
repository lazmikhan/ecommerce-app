

import React, { useState } from 'react';
import { Form ,Button} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useFirebase from '../useHooks/useFirebase';
import './Login.css';
const Login = () => {
const [loading
,setLoading]=useState(false);
    const {error,user,handleGoogleSignIn,loginInto,emailChange,passwordChange}=useFirebase();
    const navigate =useNavigate();
    if(user?.email)
    {
      navigate('/order');
    }
  
    return (
        <div className='mt-5' style={{width:"50%", margin:"0 auto"}}>
            <h1 className='text-warning mb-5'>Login to continue</h1>
           <Form onSubmit={loginInto}>

   
           <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control required onBlur={emailChange}  type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control required onBlur={passwordChange}  type="password"  placeholder="Password" />
  </Form.Group>
     
     <button onClick={ ()=>{
      setLoading(true)
     }} type='submit'>Submit</button>
    
   <p>{error}</p>
    { (error===""&&loading) ? <p>loading...</p>:<></>}
     <p className='text-center'>Already have an Account?<Link to="/register">Register </Link></p>
    </Form>
    <button onClick={handleGoogleSignIn} className='bg-primary mt-5'>Sign In with Google?</button>
        </div>
    );
};

export default Login;