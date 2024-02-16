import React, { useEffect, useState } from 'react';
import './App.css';
import WebWorker from './WebWorker';
import SumWebWorker from './SumWorker';
import RandomArrayWorker from './RandomArrrayMaker.js';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [randomArray, setRandomArray] = useState([]);
  const sumWebWorker = new WebWorker(SumWebWorker);
  const randomArrayWorker = new WebWorker(RandomArrayWorker);
  const [sum, setSum] = useState(0);
  useEffect(() => {
    return () => {
      sumWebWorker.terminate()
      randomArrayWorker.terminate()
    }
  }, []);
  const generateRandomArray = (length) => {
    alert('generating ...')
    console.log('generating ...')
    setSum('generating ...') 
    randomArrayWorker.postMessage({ length: length });
    randomArrayWorker.addEventListener('message', (event) => {
      setSum(0) 
      console.log(event.data);
      setRandomArray(event.data);
    });
  };
 
  // second way to generate random array
  const generateRandomArraywithoutworker = (length) => {  
    console.log('generating ...')
    setSum('generating ...')
    const randomArray = [];
    for (let i = 0; i < length; i++) {
      const randomValue = Math.floor(Math.random() * 100); // Example: random values between 0 and 100
      randomArray.push(randomValue);
    }
    setRandomArray(randomArray);
    console.log(randomArray);
    setSum(0)
    
  };
  const sumArray = () => {
    setSum('calculating ...')
    console.log('calculating ...')
    sumWebWorker.postMessage({randomArray });
    sumWebWorker.addEventListener('message', (event) => {
      setSum(event.data);
      console.log(event.data);
    });
  }
  const SumwithoutWorker = () => {
    setSum('calculating ...')
    console.log('calculating ...')
    const sum = randomArray.reduce((acc, currentValue) => acc + currentValue, 0);
    setSum(sum);
    console.log(sum);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="btn-group mt-5" role="group" aria-label="Basic example">
            <button
              onClick={() => generateRandomArray(10000000)}
              type="button"
              className="btn btn-primary">
              Make Random Array
            </button>
          </div>
          <div className="btn-group mt-5" style={{ marginLeft: '10px' }} role="group" aria-label="Basic example">
            <button
              onClick={sumArray}
              type="button"
              className="btn btn-success">
              Sum of Array with Web Worker
            </button>
          </div>
          <div className="btn-group mt-5" style={{ marginLeft: '10px' }} role="group" aria-label="Basic example">
            <button
              onClick={SumwithoutWorker}
              type="button"
              className="btn btn-primary">
              Sum of Array without Web Worker
            </button>
          </div>
        </div>
      </div>
      {/* result of sum  */}
      <div style={{marginTop:'10px'}}>
        {'Sum of Array: ' + sum}
      </div>
    </div>
  );
}

export default App;