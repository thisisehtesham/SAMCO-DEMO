import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { mockAuth } from '../utils/mockAuth';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Must be at least 6 characters').required('Required'),
});

function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const { success, token, error } = await mockAuth(values.email, values.password);
      if (success) {
        localStorage.setItem('token', token);
        navigate('/dashboard');
      } else {
        console.error('Authentication failed:', error);
        setFieldError('password', 'Incorrect Email/Password');
      }
    } catch (error) {
      console.error('Authentication error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className='flex flex-col justify-between'>
      <div className='w-[306px] h-[77px]'>
        <img alt='Logo' src='./images/Logo.png'/>
      </div>
        
      <div className='flex justify-center items-center'>
        <div className="flex justify-center items-center w-[594px] h-[323px] bg-[#CCE7FF] mt-[105px] rounded-[20px]">
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form className="space-y-4">

                <div className="mb-4">
                  <div className='flex items-center justify-between'>
                    <label htmlFor="email" className="block text-2xl font-medium text-gray-700">
                      Email Id:
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="w-[226px] h-[51px] px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className='ml-[120px] text-[#F00]'>
                    <ErrorMessage name="email" component="div" className="error" />
                  </div>
                </div>

                <div className="mb-4">
                  <div className='flex items-center justify-between'>
                    <label htmlFor="password" className="block text-2xl font-medium mr-[10px] text-gray-700">
                      Password:
                    </label>
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      className="w-[226px] h-[51px] px-4 py-2 rounded-md borde focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter password"
                    />
                  </div>
                  <div className='ml-[120px] text-[#F00]'>
                    <ErrorMessage name="password" component="div" className="error" />
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <button type="submit" disabled={isSubmitting} className="w-[226px] h-[51px] px-4 py-2 rounded-[15px] text-2xl font-semibold text-black bg-[#F99191] hover:bg-[#F96565]">
                    Login
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>  
      

      <div className='flex justify-center items-center h-[60px] bg-[#F00] text-white text-3xl mt-[211px]'>
        <h3>Copyright © 2023 Samco | All Rights Reserved</h3>
      </div>
    </div>
  );
}

export default Login;
