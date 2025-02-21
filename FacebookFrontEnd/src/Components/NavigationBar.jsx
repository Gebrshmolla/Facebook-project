import React from 'react'
import {  FiBell, FiDatabase, FiGrid, FiHome, FiMessageSquare, FiPlus, FiUser, FiUsers, FiYoutube } from 'react-icons/fi'
import { FiFacebook ,FiSearch} from 'react-icons/fi'
import Input from './Ui/Input'
import { Link } from 'react-router-dom'
function NavigationBar() {
  return (
    <div className='d-flex bg-white align-items-center  pt-2 pb-3'>
    <div className='d-flex justify-content-center mt-1  align-items-center me-5'>
    <div className=''> <FiFacebook className=' text-white rounded-circle  bg-primary fs-1  p-2 bounder ms-2'/></div>
    <div className='d-flex ms-3  rounded bg-light'>
    <FiSearch className="bg-light rounded-circle fs-1 p-2 ms-1 "/>
    <Input placeholder={"Search Facebook"} className={" form-control bg-light bounded fw-light"}/>
    </div> 
    </div>
      <div className='me-4 ms-5'>
       <Link to="/HomePage"> <FiHome className='me-5 ms-5 fs-3 text-dark'/> </Link>
       <Link to="/UsersPage"> <FiUsers  className=' me-5 ms-5 fs-3  text-dark'/></Link>
        <FiYoutube className=' fs-3  text-dark'/>
        <Link to="/UsersPage"> <FiUsers  className='fs-3 me-5 ms-5 text-dark'/></Link>
        <FiYoutube className=' fs-3 ms-5  text-dark'/>
      </div>
      <div className='d-flex ms-5 '>
    <FiGrid className='fs-1 p-2 bg-light rounded-circle ms-5'/>
    <FiMessageSquare className='text-dark fs-1 p-2 bg-light rounded-circle ms-5'/>
    <> 
    <p className='visually-hidden'>20{<FiPlus/>}</p>
    <FiBell className='fs-1 p-2 bg-light rounded-circle ms-5 '/>
    </>
    <FiUser  className='fs-1 p-2 bg-light rounded-circle ms-5 '/>
      </div>
    </div>
  )
}

export default NavigationBar

