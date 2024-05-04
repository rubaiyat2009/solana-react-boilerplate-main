import React, { useState, useEffect } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';
import { Token } from '@solana/spl-token';

const WalletBalance = ({ walletAddress }) => {
  const [tokenBalance, setTokenBalance] = useState(null);

  useEffect(() => {
    const connection = new Connection('https://api.devnet.solana.com');
    const publicKey = new PublicKey(walletAddress);

    const fetchTokenBalance = async () => {
      try {
        const token = new Token(connection, new PublicKey('TOKEN_MINT_ADDRESS'));
        const balance = await token.getAccountInfo(publicKey);
        setTokenBalance(balance.amount);
      } catch (error) {
        console.error('Error fetching token balance:', error);
      }
    };

    fetchTokenBalance();
  }, [walletAddress]);

  return (
    <div>
      <h2>Token Balance</h2>
      <p>{tokenBalance}</p>
    </div>
  );
};

export default WalletBalance;
