
import { useState, useRef } from 'react';
import './App.css';

function App() {
  const[progress,setProgress] = useState(0);
  const intervalRef = useRef(null);

  const startUpload = () =>{
   

    setProgress(0);
    let uploadProgress = 0;
    intervalRef.current = setInterval(() => {
      uploadProgress += 10;
      setProgress(uploadProgress);
      if(uploadProgress >=100){
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    },1000);
  }

  const stopUpload = () =>{
    if(intervalRef.current){
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  return (
    <div className="App">
      <div className="progress-container"><div className="progress-bar"  style={{width: `${progress}%`}} ></div></div>
      <button onClick={startUpload}>Upload</button>
      <button onClick={stopUpload}>Stop</button>
    </div>
  );
}

export default App;
