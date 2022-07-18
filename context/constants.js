import market from './NFTMarketplace.json';

export const MarketAddress = `0x${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}`;
export const MarketAddressABI = market.abi;
