import React from 'react';
import Image from '../Components/Ui/Image';
import Input from '../Components/Ui/Input';
import Button from '../Components/Ui/button';
import { Link } from 'react-router-dom';
import { Languages } from '../src/Languge';
import Ul from '../Components/Ui/Ul';
import {useFormik} from 'formik'

const initialValues={
    name:"",
    password:""
}
const onSubmit=values=>{
    console.log(values);
}
const validate=values=>{
    let errors={};
    if(!values.name){
        errors.name="the input is reqire";
    }
    else if(values.name.length < 3){
        errors.name= `the ${values.name} must be >3`;
    }
    if(!values.password){
        errors.password="the input is reqire";
    }
    return errors;
}
export default  function Login()
{
    const formik=useFormik({
    initialValues,
    onSubmit,
    validate
    })
    // console.log(Languages);
    // const languages=[].concat(Languages);
    // console.log("visited",formik.touched)
    return(
        <div>
            <div className='d-flex  bg-secondary p-5'>
                <div className='mt-5'>
                 <Image src="https://z-p3-static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
                  alt="Facebook"
                 className={"w-100 h-50"}    />
                </div>
                <div className=' bg-white rounded mx-4 w-50 p-2 mt-5'>
                <form onSubmit={formik.handleSubmit}>
                <div className='my-2 mx-5'>
                <h3 className=' mx-5'>LogIn Facebook</h3>
                </div>
              
                <div className='my-2'>
                <Input className={' form-control p-3 fs-6'}
                    placeholder={'Email or phone number'}
                    type={'text'}
                    id={"name"}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    // value={formik.values.name}
                    {...formik.getFieldProps("name")}
                  
                />
                { formik.errors.name?<div>{formik.errors.name}</div> :null}
                </div>
                <div className='my-2'>
                <Input className={' form-control  p-3 '}
                    placeholder={'Password'}
                    type={"password"}
                    id={"password"}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    // value={formik.values.password}
                    {...formik.getFieldProps("password")}
                />
                {formik.errors.password?<div className='txt-primary'>{formik.errors.password}</div> :null}
                </div>
               
             <div className='my-2'>
                <Button className={'btn btn-primary fs-normal  fs-5 fw-bold w-100'}
                    text={"LogIn"}
                    type={"subnit"}
                />
             </div> 
             <p>Forget Password?</p>
              <line> or </line>
             <div className='my-2'>
                <Button className={'btn btn-success fs-normal mx-5 fs-5 fw-normal'}
                    text={"Create new account"}  
                    type={"button"}    
                />
             </div>
             </form>
                </div>
            </div>
            <div>
             <Languages/>
            </div>
        </div>
    )
}