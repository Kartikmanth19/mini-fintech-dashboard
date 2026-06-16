import { useState } from "react";

function TransactionForm({ onAddTransaction }) {
    const [formData, setFormData] = useState({
        amount: "",
        category: "",
        type: "expense",
        date: "",
        note: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !formData.amount ||
            !formData.category ||
            !formData.type ||
            !formData.date
        ) {
            alert("Please fill all required fields.");
            return;
        }

        onAddTransaction({
            ...formData,
            amount: Number(formData.amount)
        });

        setFormData({
            amount: "",
            category: "",
            type: "expense",
            date: "",
            note: ""
        });
    };

    return (
        <div className="card">
            <h2>Add Transaction</h2>

            <form className="transaction-form" onSubmit={handleSubmit}>
                <input
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="category"
                    placeholder="Category (Food, Salary...)"
                    value={formData.category}
                    onChange={handleChange}
                    required
                />

                <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                >
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                </select>

                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="note"
                    placeholder="Optional note"
                    value={formData.note}
                    onChange={handleChange}
                    rows="3"
                />

                <button type="submit">
                    Add Transaction
                </button>
            </form>
        </div>
    );
}

export default TransactionForm;