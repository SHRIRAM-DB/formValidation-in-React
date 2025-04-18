import React, { useState } from 'react'
import { Form, Formik, Field } from 'formik'
import * as yup from 'yup';

const formSchema = yup.object({
    name: yup.string()
    .min(3, "Name should be minimum 3 character")
    .max(15, "Name should be maximum 15 character")
    .required("Name is required"),
    email: yup.string()
    .email()
    .required("Email is required"),
    phone: yup.string()
    .required("Phone number is required")
    .max(10, "your phone is too long!"),
    city: yup.string()
    .required("City is required")
})

function Login() {

    const [res,setRes] = useState([])

  return (
    <div> 
        <h1 className='header'>Form</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          city: "",
        }}
        validationSchema={formSchema}
        onSubmit={(result) => {
            setRes((pre) => [...pre,result])
            console.log(res)
        }}
        >
        {({errors}) => {
            return(
                <Form className='form'>
                    <Field name="name" placeholder="Username" className="entry"/>
                    <div style={{ color: "red" }}>
                        {errors.name ? errors.name : ""}
                    </div>                    
                    <Field name="email" type="email" placeholder="Email" className="entry"/>
                    <div style={{ color: "red" }}>
                        {errors.email ? errors.email : ""}
                    </div> 
                    <Field name="phone" placeholder="Phone" className="entry"/>
                    <div style={{ color: "red" }}>
                        {errors.phone ? errors.phone : ""}
                    </div> 
                    <Field name="city" placeholder="City" className="entry"/>
                    <div style={{ color: "red" }}>
                        {errors.city ? errors.city : ""}
                    </div> 
                    <button type='submit' className='btn'>submit</button>
                </Form>
            )
        }}
      </Formik>

      <table  className='table'>
        <tr >
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
        </tr>
        {res.map((value,index) => {
            return (
                <tr key={index}>
                    <td>{value.name}</td>
                    <td>{value.email}</td>
                    <td>{value.phone}</td>
                    <td>{value.city}</td>
                </tr>
            )
        })}
      </table>
    </div>
  )
}

export default Login
