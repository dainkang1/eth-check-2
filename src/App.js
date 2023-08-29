import './App.css';
import React from 'react';
import { AddressProvider } from '../src/context/AddressContext';
import AddressInput from './components/AddressInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">Ethereum Checker</header>
      <AddressProvider> 
        <AddressInput />
      </AddressProvider>
    </div>
  );
}

export default App;
