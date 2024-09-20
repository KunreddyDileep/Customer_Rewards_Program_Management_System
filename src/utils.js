// src/utils.js
export const calculatePoints = (amount) => {
    let points = 0;
    if (amount > 100) {
      points += (amount - 100) * 2; // Points for amount over $100
      points += 50; // For the first $50
    } else if (amount >= 50) {
      points += amount - 50; // For the amount between $50 and $100
    }
    return points;
  };
  