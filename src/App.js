import logo from './logo.svg';
import './App.css';

function App() {
  return (
<<<<<<< Updated upstream
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
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
        </div>
        <div className='bg-slate-500 row-span-2 place-content-center col-span-2 active:bg-slate-600' onClick={startTimer}>
            <Convert sec={length-p2Seconds}/>
        </div>
        <button className="object-center col-span-2 active:bg-gray-100 active:-translate-y-4 transition" onClick={()=>p1SetSeconds(p1Seconds-increment)}>
          FUCK YOU
        </button>
        <button className="object-center col-span-2 active:bg-gray-100 active:-translate-y-4 transition" onClick={()=>p2SetSeconds(p2Seconds-increment)}>
          FUCK YOU
        </button>
      </div>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
