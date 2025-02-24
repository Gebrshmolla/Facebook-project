import React, { useState } from 'react'
import { Link } from 'react-router-dom';
function SideBar({Data,iconsStyle,discriptionStyle,className}) {
  const [Hover,setHover]=useState(false);
  if (!Data || Data.length === 0) {
        return <div>No icons available</div>; // Handle empty array or loading state
      }
  return (
    <div className={className}>
      {
        Data.map((item,index)=>{
            return <>
            <Link className=' text-decoration-none'>
            <div key={index} className={`rounded d-flex justify-content-start align-items-center
            ${Hover==index?'home-hover':''}
            `}
           onMouseEnter={()=>setHover(index)}
           onMouseLeave={()=>setHover(null)}>
             <div  className={iconsStyle} > {item.icon}</div>
             <div className={discriptionStyle}>{item.discriprion}</div>
            </div>
            </Link>
            </> 
        })
      }
    </div>
  )
}

export default SideBar
