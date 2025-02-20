import React from 'react';
function Button ({text,onClick,className,type}){
    return <button onClick={onClick} type={type} className={className}>{text} </button>
}
export default Button