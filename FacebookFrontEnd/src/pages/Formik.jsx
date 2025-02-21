import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Button from '../Components/Ui/button';
import 'bootstrap/dist/css/bootstrap.min.css';


const MyForm = () => {
  // Custom validation function for the form
  const validate = (values) => {
    const errors = {};

    // Email validation
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email is invalid';
    }

    // Password validation
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    // Confirm Password validation
    if (!values.confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Passwords must match';
    }

    // Age validation
    if (!values.age) {
      errors.age = 'Age is required';
    } else if (values.age < 18) {
      errors.age = 'You must be at least 18 years old';
    }

    return errors;
  };

  // Handle form submission
  const handleSubmit = (values) => {
    alert('Form submitted successfully');
    console.log(values);
  };

  return (
    <>
    <div>
      <h1>Formik Without External Validation</h1>

      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          age: '',
        }}
        validate={validate}  // Custom validation logic
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            {/* Email Field */}
            <div>
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: 'red' }}
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
              <ErrorMessage
                name="password"
                component="div"
                style={{ color: 'red' }}
              />
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                style={{ color: 'red' }}
              />
            </div>

            {/* Age Field */}
            <div>
              <label htmlFor="age">Age</label>
              <Field
                type="number"
                id="age"
                name="age"
                placeholder="Enter your age"
              />
              <ErrorMessage
                name="age"
                component="div"
                style={{ color: 'red' }}
              />
            </div>

            {/* Submit Button */}
            <div>
              <button type="submit">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
    <div className='d-flex'>
        <Button text={'submit'} className={"btn btn-danger fw-normal fs-6"}/>
    </div>
   </>
  );
};

export default MyForm;
