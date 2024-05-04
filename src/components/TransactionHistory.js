import React, { useState, useEffect } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';

const TransactionHistory = ({ walletAddress }) => {
  const [transactionUrls, setTransactionUrls] = useState([]);

  useEffect(() => {
    const connection = new Connection('https://api.devnet.solana.com');
    const publicKey = new PublicKey(walletAddress);

    const fetchTransactionHistory = async () => {
      try {
        const transactions = await connection.getConfirmedSignaturesForAddress2(publicKey);
        const urls = transactions.map((tx) => `https://explorer.solana.com/tx/${tx.signature}`);
        setTransactionUrls(urls);
      } catch (error) {
        console.error('Error fetching transaction history:', error);
      }
    };

    fetchTransactionHistory();
  }, [walletAddress]);

  return (
    <div>
      <h2>Transaction History</h2>
      <ul>
        {transactionUrls.map((url, index) => (
          <li key={index}>
            <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
