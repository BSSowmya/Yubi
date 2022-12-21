import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Counter from './components/Counter';
import './components/counter.css'
function App() {
  const [mount,setMount]=useState(0);

  function handleMount(){
    setMount(1);

  }

  function handleUnMount(){
    setMount(0);

  }
  return (
   

    <div className="App">
      <div className='mount'>
      <button onClick={handleMount}>Mount</button>
      <button onClick={handleUnMount}>UnMount</button>
      { mount===1 && <Counter></Counter>}
      </div>
    
    </div>
  );
}

export default App;
