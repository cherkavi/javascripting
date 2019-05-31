// require('./contracts/Inbox.sol') - don't use it, it is not a JavaScript file
const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol'); // path to current folder
const source = fs.readFileSync(inboxPath, 'utf8');

var contractCompileData = solc.compile(source, 1);
// console.log(contractCompileData // .contracts[':Inbox']);
module.exports = contractCompileData.contracts[':Inbox'];
