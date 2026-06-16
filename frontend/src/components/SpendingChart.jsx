import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

function SpendingChart({ transactions }) {

    const expenses = transactions.filter(
        (transaction) =>
            transaction.type === "expense"
    );

    const categoryTotals = {};

    expenses.forEach((expense) => {

        categoryTotals[expense.category] =
            (categoryTotals[expense.category] || 0)
            + expense.amount;

    });

    const data = {

        labels: Object.keys(categoryTotals),

        datasets: [
            {
                label: "Expenses",

                data: Object.values(categoryTotals),

                backgroundColor: [
                    "#6366F1",
                    "#10B981",
                    "#F59E0B",
                    "#EF4444",
                    "#06B6D4",
                    "#8B5CF6",
                    "#EC4899"
                ],

                borderWidth: 2,

                borderColor: "#0B1120"
            }
        ]
    };

    if (expenses.length === 0) {

        return (
            <div className="card">
                <h2>Spending Breakdown</h2>

                <p>
                    No expense data available.
                </p>
            </div>
        );
    }

    return (
        <div className="card">

            <h2>
                Spending Breakdown
            </h2>

            <div className="chart-container">

                <Pie data={data} />

            </div>

        </div>
    );
}

export default SpendingChart;