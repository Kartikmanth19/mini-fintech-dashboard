const Transaction = require("../models/Transaction");

exports.addTransaction = async (req, res) => {
    try {
        const { amount, category, type, date, note } = req.body;

        if (!amount || !category || !type || !date) {
            return res.status(400).json({
                success: false,
                message: "Please provide all required fields"
            });
        }

        const transaction = await Transaction.create({
            amount,
            category,
            type,
            date,
            note
        });

        res.status(201).json({
            success: true,
            data: transaction
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};



exports.getTransactions = async (req, res) => {
    try {

        const { category, startDate, endDate } = req.query;

        let filter = {};

        if (category) {
            filter.category = category;
        }

        if (startDate && endDate) {
            filter.date = {
                $gte: new Date(startDate),
                $lte: new Date(endDate)
            };
        }

        const transactions = await Transaction.find(filter)
            .sort({ date: -1 });

        res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};



exports.getSummary = async (req, res) => {

    try {

        const transactions = await Transaction.find();

        let totalIncome = 0;
        let totalExpense = 0;

        const categoryTotals = {};

        transactions.forEach((transaction) => {

            if (transaction.type === "income") {
                totalIncome += transaction.amount;
            }

            if (transaction.type === "expense") {

                totalExpense += transaction.amount;

                categoryTotals[transaction.category] =
                    (categoryTotals[transaction.category] || 0)
                    + transaction.amount;
            }

        });

        const netBalance = totalIncome - totalExpense;

        let topSpendingCategory = "No expenses";

        let maxExpense = 0;

        for (const category in categoryTotals) {

            if (categoryTotals[category] > maxExpense) {

                maxExpense = categoryTotals[category];

                topSpendingCategory = category;
            }
        }

        res.status(200).json({
            success: true,
            data: {
                totalIncome,
                totalExpense,
                netBalance,
                topSpendingCategory
            }
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


exports.getInsight = async (req, res) => {

    try {

        const expenses = await Transaction.find({
            type: "expense"
        });

        if (expenses.length === 0) {

            return res.status(200).json({
                success: true,
                insight: "No expense data available yet."
            });

        }

        const categoryTotals = {};

        let totalExpense = 0;

        expenses.forEach((expense) => {

            totalExpense += expense.amount;

            categoryTotals[expense.category] =
                (categoryTotals[expense.category] || 0)
                + expense.amount;

        });

        let topCategory = "";

        let highestAmount = 0;

        for (const category in categoryTotals) {

            if (categoryTotals[category] > highestAmount) {

                highestAmount = categoryTotals[category];

                topCategory = category;
            }

        }

        const percentage =
            ((highestAmount / totalExpense) * 100).toFixed(1);

        const insight =
            `You spent ${percentage}% of your expenses on ${topCategory}.`;

        res.status(200).json({
            success: true,
            insight
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};