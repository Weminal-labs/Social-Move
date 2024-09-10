import { Aptos, AptosConfig, Network } from '@aptos-labs/ts-sdk';
import { NetworkInfo } from '@aptos-labs/wallet-adapter-core';

export const aptosClient = (network?: NetworkInfo | null) => {
  if (network?.name === Network.TESTNET) {
    return TESTNET_CLIENT;
  } else if (network?.name === Network.MAINNET) {
    throw new Error('Please use testnet for testing');
  } else {
    const CUSTOM_CONFIG = new AptosConfig({
      network: Network.CUSTOM,
      fullnode: network?.url,
    });
    return new Aptos(CUSTOM_CONFIG);
  }
};

// Testnet client
export const TESTNET_CONFIG = new AptosConfig({ 
  network: Network.TESTNET,
  fullnode: 'https://aptos.testnet.suzuka.movementlabs.xyz/v1',
  faucet: 'https://faucet.testnet.suzuka.movementlabs.xyz/',
});
export const TESTNET_CLIENT = new Aptos(TESTNET_CONFIG);

export const isSendableNetwork = (
  connected: boolean,
  networkName?: string,
): boolean => {
  return connected && !isMainnet(connected, networkName);
};

export const isMainnet = (
  connected: boolean,
  networkName?: string,
): boolean => {
  return connected && networkName === Network.MAINNET;
};