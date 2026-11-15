import { budgetService } from "../services/budgetService";

export default function BudgetSummary({ trip }) {
  const summary = budgetService.getSummary(trip);

  return (
    <div>
      <p>Budget: Rs. {summary.total}</p>

      <p>Spent: Rs. {summary.spent}</p>

      <p>Remaining: Rs. {summary.remaining}</p>
    </div>
  );
}
