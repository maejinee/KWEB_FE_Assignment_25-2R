import './App.css';
import { useState } from 'react';

function App() {

  const inputCell = document.getElementById('inputCell'); 

  const [list, setList] = useState([]); 
  const [input, setInput] = useState(""); 

  const HandleChange = (e) => {
    setInput(e.target.value); 
  }

  const HandleClickAdd = () => {
    if (input) {
      setList((prevState) => {
        return [...prevState, input]; 
      })
      setInput(""); 
      inputCell.focus(); 
    }
  }
  
  const HandleEnterAdd = (e) => {
    if (e.key == 'Enter' && input) {
      setList((prevState) => {
        return [...prevState, input]; 
      })
      setInput(""); 
      inputCell.focus(); 
    }
  }

  return (
    <div className="App">
      <h1> What Should I Do? </h1>
      <input type='text' value={input} onChange={HandleChange} onKeyDown={HandleEnterAdd} id='inputCell'/>
      <button onClick={HandleClickAdd}>Enter</button>
      {list.map((list, idx) => {
        return <p key={idx}>{list}</p>
      })}
    </div>
  );
}

export default App;
