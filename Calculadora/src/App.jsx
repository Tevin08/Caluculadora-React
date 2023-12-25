import { useEffect, useState } from 'react';
import Button from './assets/components/Buttons';
import { DiscordLogo, Eraser, Rocket, Trash } from '@phosphor-icons/react'
import { YoutubeLogo } from '@phosphor-icons/react/dist/ssr';
import Historial from './assets/historico';

function App() {
  let cont = 0;
  const style1 = {
    backgroundColor: '#D91E36'
  }
  const style2 = {
    backgroundColor: '#828792'
    //#C42348 cardinals
  }

  const style3 = {
    backgroundColor: '#06D6A0'
  }
  // exemplo de prps muito diferentes

  const [val, setval] = useState('')
  
  function Conta() {
   setval(eval(val));
  }

  function historico(){
    val.post()
  }

  function Validacao(number) {
    console.log(val.substring(val.length-1))
    if (
      val == '' || 
      ".+-*/".includes(val.substring(val.length-1))
    
    ) {
      console.log(val.substring(val.length-1))
      // setval('')
    } 
    else{
      setval(number)
    }
  }

  useEffect(() => {
    console.log(val)
  }, [val])
  return (
    <main className='flex h-screen w-screen justify-center items-center  bg-blue-800'>
      <div className='flex flex-col   bg-zinc-800 w-1/2  rounded-xl max-w-sm  '>
          {/* <span className=' text-right px-6    text-zinc-400' > {val} </span> */}
        <div className={`py-6 px-8 w-full  break-words  text-5xl text-slate-400 text-right `} >
          {val == '' ? cont:val} 
          {/* {console.log(result)} */}
        </div>
        <div className="grid grid-cols-3 p-6 justify-items-center  gap-4 ">


          <Button number={'.'}  operator={','} onclick={Validacao} value={val} />
          <Button icon={<Eraser color='#d6d6d6' />} style={style2}  onclick={()=>setval(val.substring(0, val.length-1))}/>
          <Button icon={<Trash color='#d6d6d6' />} style={style1}   onclick={()=>setval('')} />
          <Button number={0} onclick={setval} value={val} />
          <Button number={1} onclick={setval} value={val} />
          <Button number={'+'}   blue={true} onclick={Validacao} value={val} />
          <Button number={2} onclick={setval} value={val} />
          <Button number={3} onclick={setval} value={val} />
          <Button number={'-'} blue={true} onclick={Validacao} value={val} />
          <Button number={4} onclick={setval} value={val} />
          <Button number={5} onclick={setval} value={val} />
          <Button number={'*'}  operator={'×'} blue={true} onclick={Validacao} value={val} />
          <Button number={6} onclick={setval} value={val} />
          <Button number={7}   onclick={setval} value={val} />
          <Button operator={'÷'}  number={'/'} blue={true} onclick={Validacao} value={val} />
          <Button number={8} onclick={setval} value={val} />
          <Button number={9} onclick={setval} value={val} />
          <Button number={"="} onclick={Conta} value={val}  />
        </div>
      </div>
      <Historial/>
    </main>
  )
}

export default App

//Criar uma array para guadar e mostrar os valores regars com eval
