import React from 'react'
import { Link } from 'react-router-dom'
function Ul({li,className,liStyle,link}) {
   
  return (
    <>
      <ul className={className}>
 { li.map((item,index)=>{
   return <Link to={"/"+item} className={link}><li key={index} className={liStyle}>{item}</li></Link>
 })}        
      </ul>
    </>
  )
}

export default Ul
