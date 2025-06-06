import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard({ token }) {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:3000/account', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAccount(res.data);
    };
    fetchData();
  }, [token]);

  const handleAddOneRupee = async () => {
    await axios.post('http://localhost:3000/add', {}, {
      headers: { Authorization: `Bearer ${token}` },
    });
    alert('Added ₹1!');
    window.location.reload();
  };

  if (!account) return <p>Loading...</p>;

  return (
    <div>
      <h2>Welcome, {account.username}</h2>
      <p>Account No: {account.accountNumber}</p>
      <p>Balance: ₹{account.balance.toFixed(2)}</p>
      <button onClick={handleAddOneRupee}>Add ₹1</button>
    </div>
  );
}

export default Dashboard;
