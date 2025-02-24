import React, { useState } from 'react'
import { FaTh, FaGamepad, FaFacebookMessenger, FaTv, FaFacebook, FaBell, FaUserCircle, FaHome, FaUsers, FaSearch, FaStore} from 'react-icons/fa';    
import Input from './Ui/Input'
import { Link } from 'react-router-dom'
function NavigationBar() {

  // midle-part-ofnavigation
  const [isHovered, setIsHovered] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [isVideo, setIsVideo] = useState(false);
  const [isStore, setIsStore] = useState(false);
  const [isGame,  setIsGame] = useState(false);
  //right side
  const [manu,setManu]=useState(false);
  const [messanger,setMessanger]=useState(false);
  const [bell,setBell]=useState(false);
  const [account,setAccount]=useState(false);
  // active the navigation state controle
  const [isHome,setHome]=useState(false);
  const [userActive,setUserActive]=useState(false);
  const [isActive,setIsActive]=useState(false);
  const [tvActive,setTvActive]=useState(false);
  const [gameActive,setGame]=useState(false);
  const homeIcon=isHome?`active-active`:`active fs-3`;
  const userIcon=userActive?`active-active`:`active fs-3`;
  const tvIcon = tvActive ? `active-active`:`active fs-3`;
  const shopeIcon = isActive ? `active-active`:"active fs-3";
  const gameIcon = gameActive ? `active-active`:"active fs-3";
  const manuIcon = manu ? `rightSide-active`:"active";
  const messangerIcon = messanger ? `rightSide-active`:"active";
  const bellIcon = bell ? `rightSide-active`:"active";
  const accountIcon = account ? `rightSide-active`:"active";
  const handleHome=()=>{
    setTvActive(false);
    setIsActive(false);
    setUserActive(false)
    setHome(true)
    setManu(false)
    setMessanger(false)
    setBell(false)
    setAccount(false)
  }
const handleTv=()=>{
  setHome(false)
  setIsActive(false);
  setUserActive(false)
  setGame(false);
  setTvActive(true);
  setManu(false)
  setMessanger(false)
  setBell(false)
  setAccount(false)
}
const handleIsActive=()=>{
  setHome(false)
  setUserActive(false)
  setTvActive(false);
  setGame(false);
  setIsActive(true);
  setManu(false)
  setMessanger(false)
  setBell(false)
  setAccount(false)
}
const handleUsers=()=>{
  setHome(false)
  setTvActive(false);
  setIsActive(false);
  setUserActive(true)
  setGame(false)
  setManu(false)
  setMessanger(false)
  setBell(false)
  setAccount(false)
}
const handleGameIcon=()=>{
  setHome(false)
  setTvActive(false);
  setIsActive(false);
  setUserActive(false)
  setGame(true)
  setManu(false)
  setMessanger(false)
  setBell(false)
  setAccount(false)
}
const handleManu=()=>{
  setHome(false)
  setTvActive(false);
  setIsActive(false);
  setUserActive(false)
  setGame(false)
  setManu(true)
  setMessanger(false)
  setBell(false)
  setAccount(false)
}
const handleMessanger=()=>{
  setHome(false)
  setTvActive(false);
  setIsActive(false);
  setUserActive(false)
  setGame(false)
  setManu(false)
  setMessanger(true)
  setBell(false)
  setAccount(false)
}
const handleBell=()=>{
  setHome(false)
  setTvActive(false);
  setIsActive(false);
  setUserActive(false)
  setGame(false)
  setManu(false)
  setMessanger(false)
  setBell(true)
  setAccount(false)
}
const handleAccount=()=>{
  setHome(false)
  setTvActive(false);
  setIsActive(false);
  setUserActive(false)
  setGame(false)
  setManu(false)
  setMessanger(false)
  setBell(false)
  setAccount(true)
}
  return (
    <div className='d-flex bg-white top-0 position-fixed z-index-1000 w-100 border-bottom border-2 border-gray shadow-sm justify-content-between align-items-center '>
    <div className='d-flex justify-content-start  mt-1  w-50 align-items-center '>
    <div className='ms-3 '>  
      <FaFacebook color="blue" size={45} />
    </div>
    <div className='d-flex justify-content-between align-items-center'>
    <div className='bg-light ms-2 me-2 p-2 rounded-circle'><FaSearch className=" " color='black' size={23}/></div>
    <div ><Input placeholder={"Search Facebook"} className={"d-none d-lg-block form-control bg-light bounded  fw-light"}/></div>
    </div> 
    </div>
      <div className=' d-flex w-100   justify-content-between align-items-center  d-none d-md-block'>
     <div className="d-flex justify-content-between ms-4">
  <div className={`home d-flex p-2 rounded justify-content-center w-25  ${isHovered ?'home-hover':''}`}
  onMouseEnter={()=>setIsHovered(true)}
  onMouseLeave={()=>setIsHovered(false)}
  >
    <Link to="">
      <FaHome className={homeIcon} onClick={handleHome} size={30}/>
    </Link>
  </div>
  <div className={`home d-flex p-2 rounded justify-content-center w-25  ${isUser ?'home-hover':''}`}
  onMouseEnter={()=>setIsUser(true)}
  onMouseLeave={()=>setIsUser(false)}>
    <Link to="">
      <FaUsers className={userIcon} onClick={handleUsers} size={30}/>
    </Link>
  </div>
  <div className={`video d-flex p-2 rounded justify-content-center w-25  ${isVideo?'home-hover':''}`}
  onMouseEnter={()=>setIsVideo(true)}
  onMouseLeave={()=>setIsVideo(false)}>
    <Link to="">
      <FaTv className={tvIcon} onClick={handleTv} size={30} />
    </Link>
  </div>
  <div className={`home d-flex p-2 rounded justify-content-center w-25  ${isStore?'home-hover':''}`}
  onMouseEnter={()=>setIsStore(true)}
  onMouseLeave={()=>setIsStore(false)}>
    <Link>
      <FaStore className={shopeIcon}
      onClick={handleIsActive} size={30} />
    </Link>
  </div>
  <div className={`home d-flex p-2 rounded justify-content-center w-25  ${isGame ?'home-hover':''}`}
  onMouseEnter={()=>setIsGame(true)}
  onMouseLeave={()=>setIsGame(false)}>
      <Link><FaGamepad className={gameIcon} onClick={handleGameIcon} size={30} /></Link>
    </div>
</div>
       {/* this is the right side icons */}
      </div>
      <div className='d-flex ms-4 justify-content-between w-50 '>
     <div className='bg-light d-flex justify-content-center align-items-center  rounded-circle p-3'>
     <Link> <FaTh className={manuIcon} size={20} onClick={handleManu}  /></Link></div>
     <div  className='bg-light d-flex justify-content-center align-items-center  rounded-circle p-3'>
      <Link><FaFacebookMessenger className={messangerIcon} onClick={handleMessanger} size={20} /></Link>
    </div>
    <div  className='bg-light d-flex justify-content-center align-items-center  rounded-circle p-3'> 
      <Link><FaBell className={bellIcon} onClick={handleBell} size={20}/></Link>
    </div>
    <div  className='bg-light d-flex justify-content-center align-items-center  rounded-circle p-3'>
    <Link> <FaUserCircle className={accountIcon} onClick={handleAccount}  size={20}/></Link>
      </div>
    </div>
     
    </div>
  )
}

export default NavigationBar


