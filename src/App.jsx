import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Players from './Components/Players/Players'

function App() {
  const [coin, setCoin] = useState(0);

  const handleCoin = () => {
    const newCoin = coin+600000
    setCoin(newCoin);
  };

  return (
    <>
      <div className='max-w-7xl mx-auto'>
      <Header coin={coin} />
      <Banner handleCoin={handleCoin} />
      <Players></Players>
      </div>
    </>
  );
}

export default App;
