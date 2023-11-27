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
        <div className={`py-6 px-8 w-full  text-5xl text-slate-400 break-words text-right `} >
          {result != null ? val : result } 
          
        </div>
        <div className="grid grid-cols-3 p-6 justify-items-center  gap-4 ">


          <Button number={'.'} onclick={setval} value={val} />
          <Button icon={<Eraser color='#d6d6d6' />} style={style2} />
          <Button icon={<Trash color='#d6d6d6' />} style={style1} />
          <Button number={0} onclick={setval} value={val} />
          <Button number={1} onclick={setval} value={val} />
          <Button number={'+'} blue={true} onclick={setval} value={val} />
          <Button number={2} onclick={setval} value={val} />
          <Button number={3} onclick={setval} value={val} />
          <Button number={'-'} blue={true} onclick={setval} value={val} />
          <Button number={4} onclick={setval} value={val} />
          <Button number={5} onclick={setval} value={val} />
          <Button number={'*'} blue={true} onclick={setval} value={val} />
          <Button number={6} onclick={setval} value={val} />
          <Button number={7} onclick={setval} value={val} />
          <Button number={'/'} blue={true} onclick={setval} value={val} />
          <Button number={8} onclick={setval} value={val} />
          <Button number={9} onclick={setval} value={val} />
          <Button number={'='} blue={true} onclick={Conta} value={val} />
        </div>
      </div>
    </main>
  )
}

export default App

//Criar uma array para guadar e mostrar os valores regars com eval
