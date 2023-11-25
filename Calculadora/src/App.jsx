import { useState } from 'react';
import Button from './assets/components/Buttons';

function App() {
// const style1= {
//   backgroundColor : 'green'
// } exemplo de prps muito diferentes

  return (
    <main className='flex h-screen w-screen justify-center items-center  bg-blue-800'>
      <div className='flex flex-col gap-6  bg-zinc-800 w-1/2 max-w-sm  '>
        <div className='py-6 px-8 w-full   bg-blue-500  '/>  
        <div className="grid grid-cols-3 p-6 justify-items-center gap-4 ">

        <Button number={0}/>
        <Button number={1}/>
        <Button number={'+'}  blue={true} />
        <Button number={2}/>
        <Button number={3}/>
        <Button number={'-'} blue={true}  />
        <Button number={4}/>
        <Button number={5}/>
        <Button number={'×'}   blue={true} />
        <Button number={6}/>
        <Button number={7}/>
        <Button number={'÷'}  blue={true} />
        <Button number={8}/>
        <Button number={9}   />
        
        
       
        <Button number={'='}   blue={true} />
        </div>
      </div>
    </main>
  )
}

export default App
