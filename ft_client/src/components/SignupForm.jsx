import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CustomInput from './CustomInput';
import { useState} from 'react';

 const SignupForm = () => {

    const [form, setForm] = useState({});

  const fields = [{label: "Name",
    placeholder: "John",
    required: true,
    type: "text",
    name: "name"
  },{label: "Email",
    placeholder: "john@example.com",
    required: true,
    type: "email",
    name: "email"
  },
{label: "Password",
    placeholder: "******",
    required: true,
    type: "password",
    name: "password"
  },
{label: "ConfirmPassword",
    placeholder: "******",
    required: true,
    type: "password",
    name: "confirmPassword"
  }];

const handleOnChange = (e) => {
    const {name, value} = e.target;
    setForm({...form,
        [name]: value,
    });
};

const handleOnSubmit = (e) => {
   
    e.preventDefault();

    const {confirmPassword, ...rest} = form

    if(confirmPassword !== rest.password){
        return alert("Password do not match");
    }
     console.log(form);
}

  return (
    <div className='border p-4 rounded'>
        <h4 className='mb-5'>Sign up now!</h4>
       <Form onSubmit = {handleOnSubmit}>

       {fields.map((input) => <CustomInput key={input.name} {...input} onChange={handleOnChange}/>)}

      <div className="d-grid">
        <Button variant="primary" type="submit">Submit</Button>
        </div>
    </Form>
    </div>
  )
}

export default SignupForm
