// src/App.jsx
import React, { useEffect, useState } from 'react';
import { transactions } from './data';
import { calculatePoints } from './utils';

const App = () => {
  const [rewardData, setRewardData] = useState([]);

  useEffect(() => {
    // Simulating an asynchronous API call
    const fetchData = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(transactions);
        }, 1000);
      });
    };

    fetchData().then((data) => {
      const pointsData = data.map((transaction) => ({
        customerId: transaction.customerId,
        points: calculatePoints(transaction.amount),
        month: new Date(transaction.date).toLocaleString('default', { month: 'long' }),
      }));
      setRewardData(pointsData);
    });
  }, []);

  // Grouping points data by customerId and month
  const groupedData = rewardData.reduce((acc, { customerId, points, month }) => {
    if (!acc[customerId]) {
      acc[customerId] = { total: 0, monthly: {} };
    }
    acc[customerId].total += points;
    acc[customerId].monthly[month] = (acc[customerId].monthly[month] || 0) + points;
    return acc;
  }, {});

  return (
    <div>
      <h1>Reward Points</h1>
      {Object.entries(groupedData).map(([customerId, data]) => (
        <div key={customerId}>
          <h2>Customer ID: {customerId}</h2>
          <h3>Total Points: {data.total}</h3>
          <h4>Monthly Points:</h4>
          <ul>
            {Object.entries(data.monthly).map(([month, points]) => (
              <li key={month}>{month}: {points}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default App;
