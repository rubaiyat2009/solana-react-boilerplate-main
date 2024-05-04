import React from 'react';
import { render, waitFor } from '@testing-library/react';
import WalletBalance from './WalletBalance';

jest.mock('@solana/web3.js', () => ({
  Connection: jest.fn(),
  PublicKey: jest.fn(),
}));

jest.mock('@solana/spl-token', () => ({
  Token: jest.fn(),
}));

describe('WalletBalance component', () => {
  const mockTokenBalance = 1000;
  const mockWalletAddress = 'YOUR_WALLET_ADDRESS';
  const mockTokenMintAddress = 'TOKEN_MINT_ADDRESS';

  beforeAll(() => {
    // Mocking Token instance methods
    const mockGetAccountInfo = jest.fn().mockResolvedValue({ amount: mockTokenBalance });
    const mockTokenInstance = {
      getAccountInfo: mockGetAccountInfo,
    };
    // Mocking Token constructor to return the mockTokenInstance
    jest.spyOn(require('@solana/spl-token'), 'Token').mockImplementation(() => mockTokenInstance);
  });

  test('renders token balance after fetching', async () => {
    // Mocking Connection instance methods
    const mockConnectionInstance = {
      getAccountInfo: jest.fn().mockResolvedValue({}),
    };
    // Mocking Connection constructor to return the mockConnectionInstance
    jest.spyOn(require('@solana/web3.js'), 'Connection').mockImplementation(() => mockConnectionInstance);

    const { getByText } = render(<WalletBalance walletAddress={mockWalletAddress} />);

    // Wait for the component to render and fetch token balance
    await waitFor(() => {
      expect(mockConnectionInstance.getAccountInfo).toHaveBeenCalled();
      expect(getByText('Token Balance')).toBeInTheDocument();
      expect(getByText(String(mockTokenBalance))).toBeInTheDocument();
    });
  });

  test('handles error when fetching token balance', async () => {
    // Mocking Connection instance methods to throw an error
    const mockConnectionInstance = {
      getAccountInfo: jest.fn().mockRejectedValue(new Error('Connection error')),
    };
    // Mocking Connection constructor to return the mockConnectionInstance
    jest.spyOn(require('@solana/web3.js'), 'Connection').mockImplementation(() => mockConnectionInstance);

    const { getByText } = render(<WalletBalance walletAddress={mockWalletAddress} />);

    // Wait for the component to render and handle the error
    await waitFor(() => {
      expect(mockConnectionInstance.getAccountInfo).toHaveBeenCalled();
      expect(getByText('Error fetching token balance: Connection error')).toBeInTheDocument();
    });
  });
});
