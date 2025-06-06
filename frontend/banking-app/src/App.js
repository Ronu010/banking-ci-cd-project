import React from "react";
import accounts from "./data/accounts";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Banking Accounts</h1>
      {accounts.map((acc) => (
        <div
          key={acc.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "15px",
            marginBottom: "10px",
            maxWidth: "400px",
          }}
        >
          <h2>{acc.name}</h2>
          <p>
            <strong>Account Number:</strong> {acc.accountNumber}
          </p>
          <p>
            <strong>Balance:</strong> ${acc.balance.toFixed(2)}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;

