import React from 'react'

function SideBar() {
    const sideBare=["Friends","Memories","Saved"];
  return (
    <div>
      <div>
        Gebre meskel molla
      </div>
      <div>
     {
        sideBare.map((items,key)=>{
            return <div key={key}>{items}</div>
        })
     }
      </div>
    </div>
  )
}

export default SideBar
