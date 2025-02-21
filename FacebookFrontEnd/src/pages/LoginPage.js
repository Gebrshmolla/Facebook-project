import React from 'react';
import Image from '../Components/Ui/Image';
import Input from '../Components/Ui/Input';
import Button from '../Components/Ui/button';
import { Link } from 'react-router-dom';
import {useFormik} from 'formik'
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
    const formik=useFormik({
    initialValues,
    onSubmit,
    validationSchema
    // validate
    })
    
    return(
        <div className=' bg-light'>
            <div className='d-flex  bg-light p-5'>
                <div className=' mt-5'>
                 <Image src="https://z-p3-static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
                  alt="Facebook"
                 className={"w-100 h-50"}/>
                </div>
                <div className='bg-dark w-50 rounded mx-4  p-2 mt-5' style={{maxWidth:"500px"}}>
                <form onSubmit={formik.handleSubmit}>
                  <div className='d-flex justify-content-center align-item-center fs-5 fw-light my-3 mx-5'>
                  LogIn Facebook
                   </div>
              
                <div className='my-2 '>
                <Input className={'form-control  p-3 fs-6'}
                    placeholder={'Email or phone number'}
                    type={'text'}
                    id={"name"}
                    {...formik.getFieldProps("name")}   
                />
                { formik.errors.name?<div className='text-danger'>{formik.errors.name}</div> :null}
                </div>
                <div className='my-2'>
                <Input className={' form-control  p-3 '}
                    placeholder={'Password'}
                    type={"password"}
                    id={"password"}
                    {...formik.getFieldProps("password")}
                />
                {formik.errors.password?<div className='text-danger'>{formik.errors.password}</div> :null}
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
             </form>
                </div>
            </div>
            <div>
        <Bottom/>
     </div>
        </div>
    )
}