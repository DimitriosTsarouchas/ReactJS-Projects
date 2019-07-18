import React from 'react';
import './App.css';
import Lottery from './Lottery';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title="Daily Lotto" numBalls={4} maxNum={10} />
    </div>
  );
}

export default App;
