import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CustomInput from './CustomInput';
import { useState} from 'react';
import { toast } from "react-toastify";
import {postNewUser} from '../../helper/axiosHelper';
import useForm from '../hooks/useForm';


const initialState = {
  email: "",
  password: "",
} 

 const SignInForm = () => {

  const { form, setForm, handleOnChange } = useForm(initialState);

    

  const fields = [{label: "Email",
    placeholder: "john@example.com",
    required: true,
    type: "email",
    name: "email",
    value: form.name
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
