import { Trash } from "@phosphor-icons/react";

export default function Button({number,blue, style,icon,onclick}){

    return(
        
            <button 
                className={`flex items-center justify-center  text-2xl rounded-full ${blue ? 'bg-sky-400':'bg-zinc-600'}  w-full h-12`  } 
                style={style}
                onClick = {()=> onclick(number ? number: number.toString())}
            > 
                {number}
                {icon}
            </button>
    )
}