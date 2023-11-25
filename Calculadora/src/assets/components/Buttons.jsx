export default function Button({number,blue, style}){
    
    return(
        
            <button 
                className={`flex items-center justify-center   ${blue ? 'bg-sky-400':'bg-zinc-600'}  w-full h-12`  } 
                style={style}
            > 
                {number}
            </button>
    )
}