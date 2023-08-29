import React, { useState } from 'react';
import '../components/AddressInput.css';
import { useAddressContext } from '../context/AddressContext';
import BalanceDisplay from './BalanceDisplay';
// import TransactionDisplay from './TransactionDisplay';
import Web3 from 'web3';

function AddressInput() {
  const { address, setAddress } = useAddressContext();
  const [balance, setBalance ] = useState(null);
  const [transaction, setTransactions] = useState([]);

  // const [isButtonDisabled, setIsButtonDisabled] = useState(true); 

  const provider = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/7b1123d293c14ec9aa8d83c2cde53c53"));

  const getDetails = async () => {
    try {
      // const lastBlockNumber = await provider.eth.getBlockNumber();
      // let block = await provider.eth.getBlock(lastBlockNumber);

      // const lastTransaction = block.transactions[block.transactions.length - 1];
      // const transaction = await provider.eth.getTransaction(lastTransaction);

      // const balanceWei = await provider.eth.getBalance(address);

      // const balanceEth = provider.utils.fromWei(balanceWei, 'ether');
      // const balanceEth = provider.utils.fromWei(new provider.utils.BN(balanceWei), 'ether');

      setTransactions(10);
      setBalance(10);
    } catch (error) {
      alert(error)
      console.error(error);
    }
  };

  // const handleAddressChange = (e) => {
  //   const inputAddress = e.target.value;
  //   setAddress(inputAddress);
  //   setIsButtonDisabled(inputAddress.length !== 42);
  // };

  return (
    <div className="Check-Balance">
      <p className="Balance-Text">Check your Ethereum balance</p>
      <input
        type="text"
        placeholder="Enter Ethereum Address"
        className="Address-Input"
        value={address}
        // onChange={handleAddressChange}
      />
      {/* <button className="Check-Balance-Button" onClick={getDetails} disabled={isButtonDisabled}>
        Get Address Details
      </button> */}
      <BalanceDisplay balance={balance}/>
      {/* <TransactionDisplay transaction={transaction}/> */}
    </div>
  );
}

export default AddressInput;
