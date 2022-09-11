import React from 'react';
import { Form ,Button} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import useFirebase from '../useHooks/useFirebase';
const Register = () => {
    const {email,password,handleGoogleSignIn,handleEmailAndPass,emailChange,passwordChange,usernameChange}=useFirebase();
    return (
        <div style={{width:"50%", margin:"0 auto"}}>
        <h1 className='text-warning mb-5'>Please Register</h1>
       <Form onSubmit={
handleEmailAndPass      }>
       <Form.Group className="mb-3" >
        <Form.Label>UserName</Form.Label>
        <Form.Control onBlur={usernameChange} type="text" placeholder="Enter User Name" />
        </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={emailChange}  type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={passwordChange}  type="password"  placeholder="Password" />
  </Form.Group>
 
 <button  type='submit'>Submit</button>
 <p className='text-center'>Already have an Account?<Link to="/login">Login </Link></p>
</Form>
<button onClick={handleGoogleSignIn} className='bg-primary mt-5'>Sign In with Google?</button>
    </div>
    );
};

export default Register;