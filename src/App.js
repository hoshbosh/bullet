import React, { useState, useEffect } from 'react';
import './App.css'
import Convert from './ConvertTime'
import { Transition } from '@headlessui/react'
import {EndScreen} from './EndScreen'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faCircleDot } from '@fortawesome/free-solid-svg-icons';

function App(){
  const [p1Seconds, p1SetSeconds]=useState(0)
  const [player, togglePlayer]=useState(false)
  const [p2Seconds, p2SetSeconds]=useState(0)
  const [gameEnded, setEnd]=useState(false)
  const [increment, setIncrement]=useState(5)
  const [length, setLength]=useState(60)
  const [isActive, setActive]=useState(false)
  function handlePlayPause(){
    setActive(!isActive)
  }
  function adjustLength(newLength){
    setLength(newLength)
  }
  function adjustIncrement(newInc){
    setIncrement(newInc)
  }
  function startTimer(){
      togglePlayer(!player)
  }
  useEffect(()=>{
      let interval=null
      if(isActive){
          if(player){
          interval=setInterval(()=>{
            p1SetSeconds(p1Seconds+1)
            if(length-p1Seconds==0){
              setEnd(!gameEnded)
            }
          },1000)
        }else{
          interval=setInterval(()=>{
            p2SetSeconds(p2Seconds+1)
            if(length-p2Seconds==0){
              setEnd(!gameEnded)
            }
          },1000)
        }
        return ()=>clearInterval(interval)
      }
    },[player,p2Seconds, p1Seconds]
  )
  return (
    <div className="App">
    <div>
      
      {/* <Transition
        show={gameEnded}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Settings/>
      </Transition> */}
      <Transition
        show={gameEnded}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <EndScreen winner={!player?"Player 1 wins":"Player 2 wins"}/>
      </Transition>
      <div className='grid grid-cols-4 grid-rows-3 h-screen'>
        <div className='bg-slate-200 row-span-2 place-content-center col-span-2 active:bg-slate-300' onClick={startTimer}>
            <button className='absolute top-0 left-0 text-4xl bg-blue-300 w-16 h-16 rounded-full place-content-center text-center' onClick={handlePlayPause}>
              {isActive
                ?<FontAwesomeIcon icon={faPause}/>
                :<FontAwesomeIcon icon={faPlay}/>
              }
            </button>
            <Convert sec={length-p1Seconds}/>
      <Transition
        className='flex justify-center'
        show={player}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <FontAwesomeIcon className='text-9xl px-72' icon={faCircleDot}/>
      </Transition>
        </div>
        <div className='bg-slate-500 row-span-2 place-content-center col-span-2 active:bg-slate-600' onClick={startTimer}>
            <Convert sec={length-p2Seconds}/>
      <Transition
        className='justify-center flex'
        show={!player}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <FontAwesomeIcon className='text-9xl' icon={faCircleDot}/>
      </Transition>
        </div>
        <button className=" border-2 border-slate-600 border-x-0 object-center col-span-2 active:bg-slate-300 active:-translate-y-4 transition bg-slate-200" onClick={()=>p1SetSeconds(p1Seconds-increment)}>
          FUCK YOU
        </button>
        <button className="border-2 border-slate-300 border-x-0 object-center col-span-2 active:bg-slate-600 active:-translate-y-4 transition bg-slate-500" onClick={()=>p2SetSeconds(p2Seconds-increment)}>
          FUCK YOU
        </button>
      </div>
    </div>
    </div>
  )
}

export default App;