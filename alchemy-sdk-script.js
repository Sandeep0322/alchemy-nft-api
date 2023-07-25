// This script demonstrates access to the NFT API via the Alchemy SDK.
const { Network, Alchemy } = require("alchemy-sdk");

const nft = async () => {
// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: "demo", // Replace with your Alchemy API Key.
  network: Network.ETH_GOERLI, // Replace with your network.
};

const alchemy = new Alchemy(settings);

// Print owner's wallet address:
const ownerAddr = "0xe9105bB8a2444007D80A5f032181Cb2a8db96B4d";
console.log("fetching NFTs for address:", ownerAddr);
console.log("...");

// Print total NFT count returned in the response:
const nftsForOwner = await alchemy.nft.getNftsForOwner("0xe9105bB8a2444007D80A5f032181Cb2a8db96B4d");
console.log("number of NFTs found:", nftsForOwner.totalCount);
console.log("...");

// Print contract address and tokenId for each NFT:
for (const nft of nftsForOwner.ownedNfts) {
  console.log("===");
  console.log("contract address:", nft.contract.address);
  console.log("token ID:", nft.tokenId);
}
console.log("===");

// Fetch metadata for a particular NFT:
console.log("fetching metadata for a Crypto Coven NFT...");
const response = await alchemy.nft.getNftMetadata(
  "0xd3036e16fef53f6abe316f563a45a10a1f667bd0",
  "1"
);

// Uncomment this line to see the full api response:
// console.log(response);

// Print some commonly used fields:
console.log("NFT name: ", response.title);
console.log("token type: ", response.tokenType);
console.log("tokenUri: ", response.tokenUri.gateway);
console.log("image url: ", response.rawMetadata.image);
console.log("time last updated: ", response.timeLastUpdated);
console.log("===");
}
nft();