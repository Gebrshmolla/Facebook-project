import React from 'react';
function Input ({className,placeholder="",onChange,id,form,type="text"}){
    return <>    
        <input 
        className={className}
        type={type}value={form} 
        placeholder={placeholder}
        onChange={onChange} 
            id={id}
        />
    </>
}
export default Input