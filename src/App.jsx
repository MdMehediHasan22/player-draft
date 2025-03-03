import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';

function App() {
  const [coin, setCoin] = useState(0);

  const handleCoin = () => {
    const newCoin = coin+600000
    setCoin(newCoin);
  };

  return (
    <>
      <Header coin={coin} />
      <Banner handleCoin={handleCoin} />
    </>
  );
}

export default App;
