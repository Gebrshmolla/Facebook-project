import React, { useState } from 'react';
import Button from '../Components/Ui/button';
import Input from '../Components/Ui/Input';
import Ul from '../Components/Ui/Ul';
import Picture from '../Components/Ui/Image';
import Paragraph from '../Components/p';
// import Form from '../component/form';

export const Login = () => {
  const [form,setform]=useState({
    UserName:"",
    Password:"",
   
  })
  const handle=(e)=>{
    setform(e.target.value);
    console.log("hellow propes"+form.UserName);
  }
  const handleDelet=()=>{
    setform("");
    console.log("hellow Delete");
  }
  const login=()=>{
    
    console.log("hellow login");
  }
  const paragraphs=['Connect with friends and the world around you on Facebook.'];
  const items = [
    "Sign Up", "Log In", "Messenger", "Facebook Lite", "Video", "Places", 
    "Games", "Marketplace", "Meta Pay", "Meta Store", "Meta Quest", "Ray-Ban Meta", 
    "Meta AI", "Instagram", "Threads", "Fundraisers", "Services", "Voting", 
    "Information Center", "Privacy Policy", "Privacy Center", "Groups", 
    "About", "Create ad", "Create Page", "Developers", "Careers", "Cookies", 
    "Ad choices", "Terms", "Help", "Contact", "Uploading & Non-Users", 
    "Settings", "Activity log"
  ];
 const forget=['forget password?'];
 const creatPage=['Create a Page for a celebrity, brand or business.']
  const languages = [
    'English (US)',
    'አማርኛ',
    'Af-Soomaali',
    'العربية',
    'Português (Brasil)',
    'Español',
    'Français (France)',
    'Deutsch',
    'Italiano',
    'हिन्दी',
    '中文(简体)',<Button text={'+'} className={"add"}/>
  ];
  // input class name
    return ( 
           <div className='formPage'>
           <div className='Form-and-Image'>
           <div className='fbImage' >
           <Picture src="https://z-p3-static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
             alt="Facebook"
           />
            <Paragraph Paragraph={paragraphs}/>
           </div>
           <div className='formInput'>
           <Input text={'UserName'} 
                    value={form.UserName}
                    onChange={ handle}            
             />
               <Input text={'Password'}
                    onChange={login}
                   placeholder={"Password"}
                    value={form.Password}
                    type={'password'}
             />
             <Button   text={"Log In"}
             onClick={handle}
              />
                <Paragraph Paragraph={forget}/>
              <Button   text={"Create new account"}
                className={"submite"}
                onClick={handleDelet}
              />
             <div className='paragraphP'>
           <Paragraph Paragraph={creatPage}/>
           </div>
           </div>
          
           </div>
           <div className='langues-and-services'>
           <div className='langues'>
           <Ul li={languages}/>
           </div>
         
           <div className='services'>
           <Ul className="li" li={items}/>
           </div>
           </div>
          
            
    
            </div>
     );
}
 
// export default Login;
// export default Login;
