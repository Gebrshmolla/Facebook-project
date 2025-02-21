import React from 'react'
import Ul from '../Components/Ui/Ul';
import Items from '../src/Items';
import { Languages } from '../src/Languge';
function Bottom() {
  return (
    <div>
      <div>
      <Ul li={Languages()} link={"text-decoration-none"} className={"d-flex list-unstyled mt-3 ls-none"} liStyle={"mx-1  "}/>
            </div>
            <div className='d-flex '>
             <Ul li={Items()} link={"text-decoration-none"} className={"d-flex list-unstyled  mt-2 flex-wrap "} liStyle={"mx-1  "}/>
       </div>
    </div>
  )
}

export default Bottom
