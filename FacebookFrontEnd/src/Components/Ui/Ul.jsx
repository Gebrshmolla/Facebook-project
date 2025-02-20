import React from 'react'
function Ul({li,className}) {
   
  return (
    <>
      <ul className={className}>
 { li.map((item,index)=>{
   return <li key={index}>{item}</li>
 })}        
      </ul>
    </>
  )
}

export default Ul
