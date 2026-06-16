import { useState } from "react";

function TransactionList({ transactions }) {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const categories = [
        "All",
        ...new Set(transactions.map((t) => t.category))
    ];


    const filteredTransactions =
        selectedCategory === "All"
            ? transactions
            : transactions.filter(
                  (t) => t.category === selectedCategory
              );

    return (
        <div className="card">
            <h2>Transactions</h2>


            <div className="filter-container">
                <label>Filter by Category:</label>

                <select
                    value={selectedCategory}
                    onChange={(e) =>
                        setSelectedCategory(e.target.value)
                    }
                >
                    {categories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            {filteredTransactions.length === 0 ? (
                <p>No transactions found.</p>
            ) : (
                <table className="transaction-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Category</th>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Note</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredTransactions.map((transaction) => (
                            <tr key={transaction._id}>
                                <td>
                                    {new Date(
                                        transaction.date
                                    ).toLocaleDateString()}
                                </td>

                                <td>{transaction.category}</td>

                                <td>{transaction.type}</td>

                                <td>
                                    ₹{transaction.amount}
                                </td>

                                <td>
                                    {transaction.note || "-"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default TransactionList;