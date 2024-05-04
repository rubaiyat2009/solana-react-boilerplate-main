import React, { useState } from 'react';
import { Connection, PublicKey, Transaction, sendAndConfirmTransaction } from '@solana/web3.js';
import { Token, TOKEN_PROGRAM_ID } from '@solana/spl-token';

const TokenTransferForm = ({ walletAddress }) => {
  const [recipientAddress, setRecipientAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');

  const transferTokens = async () => {
    setStatus('Processing...');

    try {
      const connection = new Connection('https://api.devnet.solana.com');
      const publicKey = new PublicKey(walletAddress);
      const recipientPublicKey = new PublicKey(recipientAddress);
      const walletKeyPair = new Uint8Array([/* Insert wallet private key bytes here */]);

      const token = new Token(connection, new PublicKey('TOKEN_MINT_ADDRESS'), TOKEN_PROGRAM_ID, walletKeyPair);
      const decimalAmount = parseInt(amount) * Math.pow(10, token.decimals);

      const transaction = new Transaction().add(
        Token.createTransferInstruction(
          TOKEN_PROGRAM_ID,
          publicKey,
          recipientPublicKey,
          walletKeyPair,
          [],
          decimalAmount
        )
      );

      await sendAndConfirmTransaction(connection, transaction, [walletKeyPair]);
      setStatus('Tokens transferred successfully!');
    } catch (error) {
      console.error('Error transferring tokens:', error);
      setStatus('Error transferring tokens');
    }
  };

  return (
    <div>
      <h2>Token Transfer</h2>
      <input type="text" placeholder="Recipient Address" value={recipientAddress} onChange={(e) => setRecipientAddress(e.target.value)} />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button onClick={transferTokens}>Transfer Tokens</button>
      <p>{status}</p>
    </div>
  );
};

export default TokenTransferForm;
