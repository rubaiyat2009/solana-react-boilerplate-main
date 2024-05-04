import React, { useState } from 'react';
import { PublicKey } from '@solana/web3.js';
import { Token } from '@solana/spl-token';

const TokenMintForm = () => {
  const [recipientAddress, setRecipientAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');

  const mintTokens = async () => {
    setStatus('Processing...');

    try {
      const TOKEN_PROGRAM_ID = new PublicKey('11111111111111111111111111111111'); // Replace with actual token program ID
      const mintPublicKey = new PublicKey('22222222222222222222222222222222'); // Replace with actual mint public key
      const recipientPublicKey = new PublicKey(recipientAddress);
      const mintAuthority = new PublicKey('33333333333333333333333333333333'); // Replace with actual mint authority public key
      const amount = 100; // Sample amount of tokens to mint

      const connection = new Connection('https://api.devnet.solana.com');
      const walletKeyPair = new Uint8Array([/* Insert wallet private key bytes here */]);

      const token = new Token(connection, mintPublicKey, TOKEN_PROGRAM_ID, walletKeyPair);
      await token.mintTo(recipientPublicKey, mintAuthority, [], amount); // Mint tokens to recipient

      setStatus('Tokens minted successfully!');
    } catch (error) {
      console.error('Error minting tokens:', error);
      setStatus('Error minting tokens');
    }
  };

  return (
    <div>
      <h2>Token Minting</h2>
      <input type="text" placeholder="Recipient Address" value={recipientAddress} onChange={(e) => setRecipientAddress(e.target.value)} />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button onClick={mintTokens}>Mint Tokens</button>
      <p>{status}</p>
    </div>
  );
};

export default TokenMintForm;