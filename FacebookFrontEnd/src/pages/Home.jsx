import React from 'react'
import NavigationBar from '../Components/NavigationBar'
import SideBar from '../Components/Home/SideBar'

function Home() {
  return (
    <div className='bg-light'>
    <div>
    <NavigationBar/>
    </div>
   <div>
    <SideBar/>
   </div>
    </div>
  )
}

export default Home
