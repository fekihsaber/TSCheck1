
import React from 'react';
import { Car } from './components/Car';

const App: React.FC = () => {
  const myCar = new Car("BMW", "Porshe", 2024);
  myCar.start(); 

  return (
    <div >
        <h1>Aaml tala 3la l console (^_^)</h1>
    </div>
  );
};

export default App;
