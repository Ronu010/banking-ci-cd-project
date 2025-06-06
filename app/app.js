const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Welcome route — add this
app.get('/', (req, res) => {
  res.send('Welcome to the Banking API! Use /account/:accountId to get account info.');
});

// Existing account route
app.get('/account/:accountId', (req, res) => {
  const accounts = {
    "123456789": {
      accountType: "Checking",
      balance: 5230.75,
      currency: "USD",
      transactions: [
        { id: "tx1001", date: "2025-06-06T10:15:30Z", type: "Deposit", amount: 1500, status: "Completed" },
        { id: "tx1002", date: "2025-06-05T14:22:10Z", type: "Withdrawal", amount: 200, status: "Completed" }
      ]
    }
  };

  const account = accounts[req.params.accountId];
  if (account) {
    res.json(account);
  } else {
    res.status(404).json({ error: 'Account not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Banking API running on http://localhost:${PORT}`);
});
