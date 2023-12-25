
import { useEffect,useState } from 'react'




export default function Historial(){

    
   async function guardar() {
    try{
        const res = await fetch('http://localhost:5173/historico')
            .then((response) => response.json())  // Parse the JSON data into a JavaScript object

            return res
    } 
    catch (error){
        console.log(error);
   }
   
}

useEffect(() => {
    console.log(guardar());
} )

return(
    <>
    <h1>Histórico</h1>
    </>
)

}