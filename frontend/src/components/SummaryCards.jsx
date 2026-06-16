function SummaryCards({ summary }) {
    return (
        <div className="summary-grid">
            <div className="summary-card">
                <h3>Total Income</h3>
                <p>₹{summary.totalIncome || 0}</p>
            </div>

            <div className="summary-card">
                <h3>Total Expense</h3>
                <p>₹{summary.totalExpense || 0}</p>
            </div>

            <div className="summary-card">
                <h3>Net Balance</h3>
                <p>₹{summary.netBalance || 0}</p>
            </div>

            <div className="summary-card">
                <h3>Top Category</h3>
                <p>{summary.topSpendingCategory || "-"}</p>
            </div>
        </div>
    );
}

export default SummaryCards;