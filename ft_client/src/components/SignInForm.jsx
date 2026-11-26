import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CustomInput from './CustomInput';
import { useState} from 'react';
import { toast } from "react-toastify";
import {postNewUser, loginUser} from '../../helper/axiosHelper';
import useForm from '../hooks/useForm';
import { useUser } from '../context/userContext';


const initialState = {
  email: "",
  password: "",
} 

export const SignInForm = () => {

  const {user, setUser} = useUser();

  const { form, setForm, handleOnChange } = useForm(initialState);

  const fields = [{label: "Email",
    placeholder: "john@example.com",
    required: true,
    type: "email",
    name: "email",
    value: form.email
  },
{label: "Password",
    placeholder: "******",
    required: true,
    type: "password",
    name: "password"
  }];

// const handleOnChange = (e) => {
//     const {name, value} = e.target;
//     setForm({...form,
//         [name]: value,
//     });
// };

const handleOnSubmit = async (e) => {
   
    e.preventDefault();

    console.log(form);

    const pendingResp = loginUser(form);
    toast.promise(pendingResp, {
      pending: "Please wait...",
    });

    const {status, message, user, accessJWT} = await pendingResp;
    toast[status](message);
    if (status === "success") {
       setUser(user);
  localStorage.setItem("accessJWT", accessJWT);
}
    console.log(user, accessJWT);
   
  };

  return (
    <div className='border p-4 rounded'>
        <h4 className='mb-5'>Sign In now!</h4>
        <hr />
        <Form onSubmit = {handleOnSubmit}>

       {fields.map((input) => <CustomInput key={input.name} {...input} onChange={handleOnChange}/>)}

      <div className="d-grid">
        <Button variant="primary" type="submit">Submit</Button>
        </div>
    </Form>
    </div>
  )
}

export default SignInForm
