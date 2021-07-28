import { keyStores, Near, WalletConnection } from 'near-api-js';
import BN from 'bn.js';

const gas = new BN('90000000000000');

export const CONTRACT_ID = 'dev-1627389440594-96044702842661';

// use new NEAR here to avoid needing async/await
export const near = new Near({
  networkId: 'testnet',
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: 'https://rpc.testnet.near.org',
  walletUrl: 'https://wallet.testnet.near.org'
});

// can now create a new WalletConnection with the created Near object
export const wallet = new WalletConnection(near, 'dev-1627389440594-96044702842661');

// a service to see your design from the blockchain
// export const viewMyDesign = () => {
//   return wallet.account().viewFunction(CONTRACT_ID, "viewMyDesign ", {});
// };

// a service to design an art within the blockchain
export const viewMyDesign = async () => {
  return await wallet.account().functionCall({
    contractId: CONTRACT_ID,
    methodName: 'viewMyDesign',
    args: {}
  });
};

// a service to design an art within the blockchain
export const randomDesign = async () => {
  return await wallet.account().functionCall({
    contractId: CONTRACT_ID,
    methodName: 'design',
    gas,
    args: {}
  });
};
// a service to design an art within the blockchain
export const design = async ({ seed }) => {
  return await wallet.account().functionCall({
    contractId: CONTRACT_ID,
    methodName: 'design',
    gas,
    args: { seed }
  });
};

// a service to claim your design within the blockchain
export const claimMyDesign = async ({ seed }) => {
  let seedvalue=seed.value
  return await wallet.account().functionCall({
    contractId: CONTRACT_ID,
    methodName: 'claimMyDesign',
    gas,
    args: { seed:seedvalue }
  });
};

// a service to burn your design within the blockchain
export const burnMyDesign = async () => {
  return await wallet.account().functionCall({
    contractId: CONTRACT_ID,
    methodName: 'burnMyDesign',
    gas,
    args: {}
  });
};