export const budgetService = {
  calculateTotal(days, perDay, transport = 0) {
    return (days * perDay) + transport;
  },

  getSummary(trip) {
    const total = Number(trip.budget) || 0;
    const spent = Number(trip.spent) || 0;

    return {
      total,
      spent,
      remaining: total - spent
    };
  }
};