require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture strike dash right artwork include argue metal gate'; 
let testAccounts = [
"0x5bdde5a1728f4c5e5a8c83bd68899dcb4971199866126cd1d3ae9e1f9fb7047c",
"0xdce2d7089b8b8302201b3e64ab5e38423e07e088b7dc6405da7e66e2e1e5d01e",
"0x77886f61b4d277c6b08d138162a46b14a8f2a02a0b5a16beebb0430c10902743",
"0xf5e1b65d64fae940324895b8b4a8f1f2a5d0a843362295584e79c873dd64eda0",
"0x50291d29e83f94dff91ea8de7e2de4ffbb08a7f136e8cf34b1bf2dcea0542919",
"0xf15356d24b8439eb05415fecf2e70d801ef761d011db5abf1c2229382592664e",
"0x333ddba6ccdbf961d04751e2aaefe9c46d53a3e48e35891be032923868ba21ec",
"0x49aa3732df87456c11dee0f20453f1cb54fd4c77c0e915bad0568eb0a651f6ce",
"0x4255ee60770066d4ef22eba8c2ca17f2de6be6b3eb52dd1dbf0c3c7ab111e114",
"0x59c3d9d2d85125c9b9d1eb7bd06df60a0fd5ad1cda8270d609df03c308a3836c"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
