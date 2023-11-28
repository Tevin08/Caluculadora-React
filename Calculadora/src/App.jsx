import { useEffect, useState } from 'react';
import Button from './assets/components/Buttons';
import { DiscordLogo, Eraser, Rocket, Trash } from '@phosphor-icons/react'
import { YoutubeLogo } from '@phosphor-icons/react/dist/ssr';

function App() {
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
  const [result, setresult] = useState('')

  function Conta() {
   setresult(eval(val));
  }

  useEffect(() => {
    console.log(val)
  }, [val])
  return (
    <main className='flex h-screen w-screen justify-center items-center  bg-blue-800'>
      <div className='flex flex-col   bg-zinc-800 w-1/2  rounded-xl max-w-sm  '>
          <span className=' text-right px-6    text-zinc-400' > {val} </span>
        <div className={`py-6 px-8 w-full  break-words  text-5xl text-slate-400 text-right `} >
          {result != "" ? result : val } 
          {console.log(result)}
        </div>
        <div className="grid grid-cols-3 p-6 justify-items-center  gap-4 ">


          <Button result={result} setval={setval} setresult={setresult} number={'.'}  operator={','} onclick={setval} value={val} />
          <Button result={result} setval={setval} setresult={setresult} icon={<Eraser color='#d6d6d6' />} style={style2} />
          <Button result={result} setval={setval} setresult={setresult} icon={<Trash color='#d6d6d6' />} style={style1} />
          <Button result={result} setval={setval} setresult={setresult} number={0} onclick={setval} value={val} />
          <Button result={result} setval={setval} setresult={setresult} number={1} onclick={setval} value={val} />
          <Button result={result} setval={setval} setresult={setresult} number={'+'}   blue={true} onclick={setval} value={val} />
          <Button result={result} setval={setval} setresult={setresult} number={2} onclick={setval} value={val} />
          <Button result={result} setval={setval} setresult={setresult} number={3} onclick={setval} value={val} />
          <Button result={result} setval={setval} setresult={setresult} number={'-'} blue={true} onclick={setval} value={val} />
          <Button result={result} setval={setval} setresult={setresult} number={4} onclick={setval} value={val} />
          <Button result={result} setval={setval} setresult={setresult} number={5} onclick={setval} value={val} />
          <Button result={result} setval={setval} setresult={setresult} number={'*'}  operator={'×'} blue={true} onclick={setval} value={val} />
          <Button result={result} setval={setval} setresult={setresult} number={6} onclick={setval} value={val} />
          <Button result={result} setval={setval} setresult={setresult} number={7}   onclick={setval} value={val} />
          <Button result={result} setval={setval} setresult={setresult} operator={'÷'}  number={'/'} blue={true} onclick={setval} value={val} />
          <Button result={result} setval={setval} setresult={setresult} number={8} onclick={setval} value={val} />
          <Button result={result} setval={setval} setresult={setresult} number={9} onclick={setval} value={val} />
          <Button result={result} setval={setval} number={'='} blue={true} onclick={Conta} value={val} />
        </div>
      </div>
    </main>
  )
}

export default App

//Criar uma array para guadar e mostrar os valores regars com eval
