
import './App.css';
import JumpWindow from './jumpWindow';
import { useState } from 'react';
function App() {
  const [jumpDisplay, setJumpDisplay] = useState()
  const callJump = () =>{
    setJumpDisplay('block')
  }
  return (
    <div className="App">
      <button onClick={ callJump }>點我</button>
      <JumpWindow jumpDisplay={jumpDisplay} setJumpDisplay={setJumpDisplay}></JumpWindow>
      <h1>test</h1>
    </div>
  );
}

export default App;
