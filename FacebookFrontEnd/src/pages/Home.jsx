import React, { useState } from 'react'
import NavigationBar from '../Components/NavigationBar'
import SideBar from '../Components/SideBar'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { FaBookmark, FaCalendar, FaCalendarAlt, FaCalendarCheck, FaCalendarDay, FaCalendarMinus, FaCalendarTimes, FaClipboardCheck, FaClock, FaCreditCard, FaFacebookMessenger, FaFacebookSquare, FaFileVideo, FaGamepad, FaGift, FaPager, FaPhotoVideo, FaRegCalendarTimes, FaRegHeart, FaRss, FaSeedling, FaSignal, FaSignature, FaSignOutAlt, FaSquare, FaStar, FaStore, FaTv, FaUserCircle, FaUserFriends, FaUsers, FaViadeo, FaViadeoSquare } from 'react-icons/fa'
// import SideBar from '../Components/Home/SideBar
function Home() {
  const [chevronDown,setchevronDown]=useState(false);
  const userName="Gebremeskel molla";
  const sideBarData=[{
    icon:<FaUserCircle/>,
    discriprion:`${userName}`
},
    {
    icon:<FaUserFriends/>,
    discriprion:"Frindes"
},
{
    icon:<FaClock/>,
    discriprion:"Memories"
},
{
    icon:<FaBookmark/>,
    discriprion:"Saved"
},
{
    icon:<FaUsers/>,
    discriprion:"Groups"
},{
    icon:<FaTv/>,
    discriprion:"Videos"
}
,{
    icon:<FaStore/>,
    discriprion:"Markets"
},{
    icon:<FaCalendarAlt><FaClock/></FaCalendarAlt>,
    discriprion:"Feeds"
}, {
    icon:<FaStar/>,
    discriprion:"Events"
}, {
    icon:<FaSignal/>,
    discriprion:"AdsManger"
}, {
    icon:<FaGift/>,
    discriprion:"BirthDay"
}, {
    icon:<FaSeedling/>,
    discriprion:"Climate science center"
}
, {
    icon:<FaRegHeart/>,
    discriprion:"Funderaisers"
}, {
    icon:<FaSquare/>,
    discriprion:"Gaming Video"
}, {
    icon:<FaFacebookMessenger/>,
    discriprion:"Messanger"
},
{
    icon:<FaFacebookMessenger/>,
    discriprion:"Messanger Kids"
},{
    icon:<FaCreditCard/>,
    discriprion:"Order and pay"
},{
    icon:<FaPager/>,
    discriprion:"Pages"
},{
    icon:<FaGamepad/>,
    discriprion:"Play Gane"
},{
    icon:<FaCalendar/>,
    discriprion:"Recent and Active"
},{
    icon:<FaFileVideo/>,
    discriprion:"Reels"
}]
const dropDown= chevronDown ?<div className='cursor-pointer'><FaChevronUp/>Seeless</div>:<div className='cursor-pointer'>
<FaChevronDown/>SeeMore
</div>;
  return (
    <div className='bg-light pt-5'>
    <div>
    <NavigationBar/>
    </div>
   <div className=' d-flex justify-content-between '>
   <div className={`bg-light d-none d-md-block ${chevronDown?'overflow-scroll':'overflow-hidden'}`}
    style={{width:"25%",maxHeight:"600px"}}>
   <div className={`bg-light ${chevronDown?'style':'hidenStyle overflow-hidden '} `}
   >
   <SideBar Data={sideBarData}
     className=" ps-3 mt-4 " 
      iconsStyle={"text-primary fs-5"}
      discriptionStyle={"fw-bold pt-2 ms-2 text-dark"}
    />
   </div>
   <div onClick={()=>setchevronDown(!chevronDown)}>{dropDown}</div>
   <div>Your shortcuts</div>
   <div className='d-flex align-items-center '>
    <div className='fs-2'>{sideBarData[0].icon}</div>
    <div className='fw-light'>{sideBarData[0].discriprion}</div>
   </div>
   </div>
   <div className='mt-5 bg-white '>center</div>
   <div  className='mt-5'>Right-side</div>
   </div>
    </div>
  )
}

export default Home
