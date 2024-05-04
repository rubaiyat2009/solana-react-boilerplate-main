// WalletConnectButton.js

import React, { useState } from 'react';
import { Connection, PublicKey, Wallet, clusterApiUrl } from '@solana/web3.js';

const WalletConnectButton = () => {
  const [connected, setConnected] = useState(false);
  const [wallet, setWallet] = useState(null);

  const connectWallet = async () => {
    try {
      const wallet = new Wallet('https://www.sollet.io');
      const connection = new Connection(clusterApiUrl('devnet'));
      await wallet.connect();
      setWallet(wallet);
      setConnected(true);
      console.log('Connected to wallet:', wallet.publicKey.toBase58());
    } catch (error) {
      console.error('Error connecting to wallet:', error);
    }
  };

  const disconnectWallet = () => {
    setWallet(null);
    setConnected(false);
    console.log('Disconnected from wallet');
  };

  return (
    <div>
      {!connected ? (
        <button onClick={connectWallet}>Connect to Solana Wallet</button>
      ) : (
        <div>
          <p>Connected to Solana Wallet</p>
          <button onClick={disconnectWallet}>Disconnect</button>
        </div>
      )}
    </div>
  );
};

export default WalletConnectButton;