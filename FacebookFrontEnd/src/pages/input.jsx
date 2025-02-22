import React from 'react'

function input({feild,form,...props}) {
    console.log(feild," ",form,props)
  return <input {...feild} {...props}/>
}

export default input
