require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture glimpse frame tribe stone repeat saddle assume hunt ghost army gasp'; 
let testAccounts = [
"0x3cb451b347b5c4c491a60d5911e2deec68ee095779506ca7b7d50857dd0d0ef1",
"0xafa7f47f597b41936fd092795fc4d92d9f250e9b4278c7e2b56b87995e95a6f4",
"0x7647a3d374e6cf5fd2e7a9d80471183ef651dd941fba7ffe566b1aa9701fd637",
"0x9bcc29a38ea13c41754165ebd48329375e2b72cbad04d87ae9e15ce7259d7f32",
"0xbc32547afa6a8671fe3b8469fb1e0935ed49e9cf9bffe400d752935ed9a4395b",
"0xd3f50a3de082c1e8d880e1b82deffd61295596b5560feeb4880bd0e259671762",
"0x927ebab4b6a3f978f80eaadc4715b9aa21720c47208f81eda89954755d2a4189",
"0x5633733d83aa8a0d90e8b252716a9581d72ede492ad30b2cf275a31c856d1bf2",
"0xfaba4cabdad7759949b63def1fb99e331d5ded24f52d4068bcc5b354f289a5df",
"0x4cfa5d8ef396531c11f9a7bf9230fdf90772ab366ca36a37b5ff78c1779ebe34"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: 80001,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
