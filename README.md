# drawflow-memleak-poc
drawflow suffer memory leak in Vue2

## Please try using "memlab" to investigate the issue.
```
npm install
npm run serve
npx memlab run --scenario .memlab/drawflow.memlab_clear.js
npx memlab run --scenario .memlab/drawflow.memlab_removeNodeId.js
```
