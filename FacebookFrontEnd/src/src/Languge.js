import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
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
        '中文(简体)',<Link><FiPlus className="fs-2 bounded"/></Link>
      ];
    return languages;
}