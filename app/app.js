const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const users = []; // your in-memory user storage

app.get('/', (req, res) => {
  res.send('Welcome to the Banking API! Use /account/:accountId to get account info.');
});

// Existing account route
app.get('/account/:accountId', (req, res) => {
  // your existing code here...
});

// NEW: List all registered users (usernames only)
app.get('/users', (req, res) => {
  const safeUsers = users.map(u => ({ username: u.username }));
  res.json(safeUsers);
});

// NEW: Check if a specific user exists
app.get('/users/:username', (req, res) => {
  const user = users.find(u => u.username === req.params.username);
  if (user) {
    res.json({ exists: true });
  } else {
    res.json({ exists: false });
  }
});

app.listen(PORT, () => {
  console.log(`Banking API running on http://localhost:${PORT}`);
});
