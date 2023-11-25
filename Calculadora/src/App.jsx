import { useState } from 'react';
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

  return (
    <main className='flex h-screen w-screen justify-center items-center  bg-blue-800'>
      <div className='flex flex-col   bg-zinc-800 w-1/2 max-w-sm  '>
        <div className={`py-6 px-8 w-full  text-5xl text-slate-400 text-right     bg-zinc-800  `} >
          {val}
        </div>
        <div className="grid grid-cols-3 p-6 justify-items-center gap-4 ">


          <Button icon={','} onclick={setval} />
          <Button icon={<Eraser color='#' />} style={style2} />
          <Button icon={<Trash />} style={style1} />
          <Button number={0} onclick={setval} />
          <Button number={1} onclick={setval} />
          <Button number={'+'} blue={true} />
          <Button number={2} onclick={setval} />
          <Button number={3} onclick={setval} />
          <Button number={'-'} blue={true} />
          <Button number={4} onclick={setval} />
          <Button number={5} onclick={setval} />
          <Button number={'×'} blue={true} />
          <Button number={6} onclick={setval} />
          <Button number={7} onclick={setval} />
          <Button number={'÷'} blue={true} />
          <Button number={8} onclick={setval} />
          <Button number={9} onclick={setval} />
          <Button number={'='} blue={true} />
        </div>
      </div>
    </main>
  )
}

export default App
