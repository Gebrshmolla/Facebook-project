import React from 'react';
import Image from '../Components/Ui/Image';
import Button from '../Components/Ui/button';
import { Link } from 'react-router-dom';
import {ErrorMessage, Field, Form, Formik} from 'formik'
import * as yup from 'yup'
import Bottom from '../Components/Bottom';
const initialValues={
    name:"",
    password:""
}
const onSubmit=values=>{
    console.log(values);
}
const validationSchema=yup.object({
    name:yup.string().required("name or phone is requerd"),
    password:yup.string().required(" password is requerd")
})
export default  function Login()
{
    return(
        <div className=' bg-light'>
     
            <div className='d-md-flex  border-bottom d-sm-block bg-light p-5'>
                <div className=' mt-5' style={{minWidth:"400px",}}>
                 <Image src="https://z-p3-static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
                  alt="Facebook"
                 className={"w-100 "}/>
                </div>
                <div className='bg-white  rounded mx-4  p-2 mt-5' style={{maxWidth:"450px",minWidth:"450px"}}>
                <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}>
                <Form>
                  <div className='d-flex justify-content-center align-item-center fs-5 fw-light my-3 mx-5'>
                  LogIn Facebook
                   </div>
              
                <div className='my-2 '>
                <Field className={'form-control  p-3 fs-6'}
                    placeholder={'Email or phone number'}
                    type={'text'}
                    name="name"
                />
               <ErrorMessage name="name" className='text-danger fs-5 fw-light' component='div'/>
                </div>
                <div className='my-2'>
                <Field className={' form-control  p-3 '}
                    placeholder={'Password'}
                    type={"password"}
                   name="password"
                />
             <ErrorMessage name="password" className='text-danger fs-5 fw-light' component='div'/>
                </div>
               
             <div className=' my-2'>
               <Link to="/Home"><Button className={'btn btn-primary   fs-5 fw-bold w-100'}
                    text={"LogIn"}
                    type={"subnit"}
                /></Link> 
             </div> 
             <div className='d-flex justify-content-center align-items-center'>
             <Link to="/forgetPassword"><p>Forget Password?</p></Link> 
             </div>
            
             <div className="d-flex align-items-center justify-content-center">
             <div className="flex-grow-1 border-top"></div>
           <span className="mx-2 font-weight-bold">or</span>
          <div className="flex-grow-1 border-top"></div>
         </div>
             
             <div className='d-flex justify-content-center my-2'>
             <Link to="/creatAccount">
             <Button className={'btn btn-success fs-normal mx-5 fs-5 fw-normal'}
                    text={"Create new account"}  
                    type={"button"}    
                />
             </Link>
               
             </div>
             </Form>
             </Formik>
                </div>
            </div>
            <div>
        <Bottom className=""style={{maxWidth:"500px"}}/>
     </div>
        </div>
    )
}