import React from 'react'

function Image({src,className,alt}) {
  return(
    <img src={src} alt={alt} className={className}/>
  ) 
  
}

export default Image
