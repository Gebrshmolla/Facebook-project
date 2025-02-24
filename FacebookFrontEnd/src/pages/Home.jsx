import React, { useEffect, useState } from 'react'
import NavigationBar from '../Components/NavigationBar'
import SideBar from '../Components/SideBar'
import { FaCamera, FaChevronDown, FaChevronUp, FaComment, FaEllipsisH, FaImages, FaPlus, FaShare, FaSmile, FaThumbsUp, FaTimes } from 'react-icons/fa';
import { FaBookmark, FaCalendar, FaCalendarAlt, FaCalendarCheck, FaCalendarDay, FaCalendarMinus, FaCalendarTimes, FaClipboardCheck, FaClock, FaCreditCard, FaFacebookMessenger, FaFacebookSquare, FaFileVideo, FaGamepad, FaGift, FaPager, FaPhotoVideo, FaRegCalendarTimes, FaRegHeart, FaRss, FaSeedling, FaSignal, FaSignature, FaSignOutAlt, FaSquare, FaStar, FaStore, FaTv, FaUserCircle, FaUserFriends, FaUsers, FaViadeo, FaViadeoSquare } from 'react-icons/fa'
import Fbposts from '../Components/Fbposts';
// import SideBar from '../Components/Home/SideBar
function Home() {
  const [chevronDown,setchevronDown]=useState(false);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/photos').then((result)=>result.json()).then(res=>console.log(res))
  },[])
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
const YourMinDData=[
    {icon:<FaCamera color='red'/>,
        discriprion:"Live Video"
    },{
        icon:<FaImages color='green'/>,
        discriprion:"Picture/Video"
    },{
        icon:<FaSmile className='text-warning'/>,
        discriprion:"Feeling/Activity"
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
   <div className={`bg-light ps-3 d-none d-lg-block ${chevronDown?'overflow-scroll':'overflow-hidden'}`}
    style={{width:"25%",maxHeight:"600px"}}>
   <div className={`bg-light ${chevronDown?'style':'hidenStyle overflow-hidden '} `}
   >
   <SideBar Data={sideBarData}
     className="  mt-4 " 
      iconsStyle={"text-primary fs-5"}
      discriptionStyle={"fw-bold pt-2 ms-2 text-dark"}
    />
   </div>
   <div onClick={()=>setchevronDown(!chevronDown)} className='border-bottom shadow-sm border-1'>{dropDown}</div>
   <div className='fs-5'>Your shortcuts</div>
   <div className='d-flex align-items-center '>
    <div className='fs-2'>{sideBarData[0].icon}</div>
    <div className='fw-light'>{sideBarData[0].discriprion}</div>
   </div>
   </div>
   <div className='mt-2 w-100 d-flex overflow-auto justify-content-center 'style={{maxHeight:"600px"}}>
   <div className=''>
   <div className=' d-flex w-100 justify-content-center '>
        <div className='w-100'>
        <div className='bg-white w-100 rounded'>
            <div className='d-flex w-100 align-items-center border-bottom border-1 pb-2 '>
            <div className='ms-2 fs-1 text-primary'>{sideBarData[0].icon}</div>
            <div className='ms-2 mt-3 me-2 w-100'><input  placeholder={`What's on your mind  ${userName}`} 
            className='form-control pt-2 pb-2'/></div>
            </div>
            <SideBar Data={YourMinDData}
            className={"d-flex  justify-content-between align-items-center"}
            iconsStyle={"fs-4 ps-3  "}
            discriptionStyle={"text-dark ms-2 mt-2 pe-3"}

            />
            </div>
        </div>
   </div>
   <div className='d-flex mt-2  border shadow-sm bg-white rounded  align-items-center w-100'>

    <div><FaPlus className='fs-1 border border-1 rounded-circle bg-light p-2' color="blue"/></div>
    <div className='ms-2 '>
        <div className='fs-5  '>Create story</div>
        <div className=' fw-light'>Share a photo or write somting...</div>
    </div>
   </div>
   <div className='mt-3 bg-white overflow-scroll'>
    <div className='d-flex justify-content-between'>
      <div className='d-flex w-100 justify-content-start'>
      <div><img src='./photo.jpg' style={{width:"50px"}} className=' rounded-circle'/></div>
       <div className='mt-2 ms-2'>
       <p className='m-0'>inge Brinkmann</p>
       <p className='m-0 fw-light'>februry 18 at 4:47pm</p>
       </div> 
      </div>
      <div className='d-flex w-100 me-3 justify-content-end'>
      <div>
        <FaEllipsisH className='me-4'/>
       </div>
       <div>
        <FaTimes className='fw-light'/>
       </div>
      </div>
       
    </div>
    <div>
        <img src='./photo.jpg'/>
    </div>
    <div className='d-flex pt-2 border-bottom border-1 pb-2 justify-content-between align-items-center'>
        <div>coment and others</div>
        <div><FaComment /></div>
    </div>
    <div className='d-flex mt-2 justify-content-around'>
        <div className='d-flex'><FaThumbsUp className='me-2' size={20}/><p>Like</p></div>
        <div className='d-flex'><FaComment className='me-2' size={20}/><p>Comment</p></div>
        <div className='d-flex'><FaShare className='me-2' size={20}/> <p>Share</p></div>
    </div>
   </div>
   </div>
   </div>
   <div  className='mt-5'>
   {/* <Fbposts/> */}
    <SideBar Data={YourMinDData}/>
   </div>
   </div>
    </div>
  )
}

export default Home
