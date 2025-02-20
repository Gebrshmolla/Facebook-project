import React from "react";
import Button from "../Components/Ui/button";
import Ul from "../Components/Ui/Ul";
export function Languages(){
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
    return (
        <Ul li={languages}/>
    );
}