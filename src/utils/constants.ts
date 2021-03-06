export const NETWORKS = {
  ARBITRUM_RINKEBY: '421611',
  ARBITRUM: '42161',
  MAINNET: '1',
  RINKEBY: '4',
  KOVAN: '42'
} as const;

export const TCR_DECIMALS = 18;
export const TEST_TOKEN_DECIMALS = 18;
export const USDC_DECIMALS = 6;

export const TEST_QUOTE_TOKEN = {
    name: 'USDC',
    symbol: 'USDC',
    address: '0xa72276C7ecDc2D97b029F39Dd23fEf3Ea07D2ff8',
    decimals: TEST_TOKEN_DECIMALS,
}

export const SECONDS_PER_LEAP_YEAR = 31622400;

export const POOL_STATE_HELPER_BY_NETWORK = {
  [NETWORKS.ARBITRUM]: '0x1d3ac3f2De105F831B4eBeA8987a5f58B26aBA40',
  [NETWORKS.ARBITRUM_RINKEBY]: '0xED2F534F6aaD02EEe368F443D42419a20f447DfA'
}

export const POOL_SWAP_LIBRARY_BY_NETWORK = {
  [NETWORKS.ARBITRUM_RINKEBY]: '0xCB27C3813D75918f8B764143Cf3717955A5D43b8',
  [NETWORKS.ARBITRUM]: '0x928d5a6668Bc9b801229c176c0bEB3b34Afba5d8'
}

export const EVENT_NAMES = {
  COMMITMENT_WINDOW_ENDING: 'COMMITMENT_WINDOW_ENDING',
  COMMITMENT_WINDOW_ENDED: 'COMMITMENT_WINDOW_ENDED',
  UPKEEP: 'UPKEEP',
  COMMIT: 'COMMIT',
  COMMITS_EXECUTED: 'COMMITS_EXECUTED'
} as const;
