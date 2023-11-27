import { Trash } from "@phosphor-icons/react";

export default function Button({number,blue, style,icon,onclick, value}){

    return(
        
            <button 
                className={`flex items-center justify-center  text-2xl rounded-full ${blue ? 'bg-sky-400  text-slate-50'   :'bg-zinc-600'}  w-full h-12 text-slate-400 `  } 
                style={style}
                onClick = {()=> onclick(`${value}${number}`)}     
            > 
                {number}
                {icon}
            </button>
    )
}