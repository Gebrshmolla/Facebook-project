import React, { useEffect, useState } from 'react'
import { FaComment, FaEllipsisH, FaShare, FaThumbsUp, FaTimes } from 'react-icons/fa'

function Fbposts() {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/photos`).then(res=>res.json()).then(rs=>{setData(rs)
        })
    },[])
  return (
    <div>{
      data.map((data)=>{
        return (
             <div key={data.id} className='mt-3 bg-white overflow-scroll'>
                <div className='d-flex justify-content-between'>
                  <div className='d-flex w-100 justify-content-start'>
                  <div>
                  <image src='./photo.jpg'/>
                  </div>
                   <div className='ms-2'>
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
               </div>)
        
      })}
    </div>
  )
}

export default Fbposts
