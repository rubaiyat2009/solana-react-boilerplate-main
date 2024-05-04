# Solana React boilerplate
This is a boilerplate project for building decentralized applications (dApps) on the Solana blockchain using React.

# Overview
The project provides a starting point for developers looking to build dApps on Solana with React. It includes basic setup for connecting to the Solana blockchain, interacting with smart contracts, and building user interfaces with React components.

## Aiming to

- Faster development
- High performance
- Global scale
- Maintainable code
- Intuitive interface

## Summary

- [x] [Vite (v2) - Bundler](https://vitejs.dev/)
- [x] [TypeScript (v4.6) - Type check](https://www.typescriptlang.org/)
- [x] [ESLint - Linter](https://eslint.org/)
- [x] [Prettier - Formatter](https://prettier.io/)
- [x] [Husky - Pre commit](https://typicode.github.io/husky/#/)
- [x] [React (v18) - UI Framework](https://reactjs.org/)
- [x] [Material UI (v5) - Components Library](https://mui.com/)
- [x] [React i18next - Translation](https://react.i18next.com/)
- [x] [React Router Dom (v6) - Routing](https://reactrouter.com/)
- [x] [Recoil - State management](https://recoiljs.org/)
- [x] [@solana/wallet-adapter](https://solana-labs.github.io/wallet-adapter/)
- [x] [React Hook Form (v7) - Form Validation](https://react-hook-form.com/)

Set a static version for each packages to reduce fails to run.


## Quickstart

To get started with the project, follow these steps:

# Clone the repository:
  git clone https://github.com/rubaiyat2009/solana-react-boilerplate-main.git
# Navigate to the project directory:
 cd solana-react-boilerplate-main

```bash
# Node version (using nodenv)
$ node -v
v16.15.1

# Install dependencies
$ yarn install --frozen-lockfile

# For Unit test, you can install it via npm or yarn
npm install --save-dev jest
# or
yarn add --dev jest

# Testing
To run unit tests for the application, use the following command:
yarn jest

This will execute all unit tests and provide feedback on their success or failure.

# Sample test result:

Test Suites: 1 success, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        1.885 s
Ran all test suites.


# Run dev server (localhost:4200)
$ yarn dev

# This will start the development server and display the application url to browser. Any changes you make to the code will automatically be reflected in the browser.



Vercel here: https://solana-react-dapp.vercel.app/

# Please use Microsoft Edge browser for better user expericence!

## Connecting to the Smart Contract
To connect the frontend to a smart contract on the Solana blockchain, you'll need to:

1. Deploy your smart contract to the Solana blockchain.
2. Obtain the address of the deployed smart contract.
3. Update the WalletBalance.js file to use the address of your smart contract.

// Update this line with the address of your smart contract
const token = new Token(connection, new PublicKey('TOKEN_MINT_ADDRESS'));

Replace 'TOKEN_MINT_ADDRESS' with the address of your deployed smart contract.

## Contributing
Contributions to the project are welcome! If you find any bugs or have suggestions for improvement, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
```



### References

[Real Favicon Generator](https://realfavicongenerator.net/)

[notistack](https://iamhosseindhv.com/notistack)

[zod](https://github.com/colinhacks/zod)
