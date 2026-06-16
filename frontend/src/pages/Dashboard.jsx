import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    getTransactions,
    addTransaction,
    getSummary,
    getInsight
} from "../api/transactionApi";

import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import SummaryCards from "../components/SummaryCards";
import InsightCard from "../components/InsightCard";
import SpendingChart from "../components/SpendingChart";

import "../App.css";

function Dashboard() {
    const [transactions, setTransactions] = useState([]);
    const [summary, setSummary] = useState({});
    const [insight, setInsight] = useState("");

    const navigate = useNavigate();

    const fetchTransactions = async () => {
        try {
            const res = await getTransactions();
            setTransactions(res.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchSummary = async () => {
        try {
            const res = await getSummary();
            setSummary(res.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchInsight = async () => {
        try {
            const res = await getInsight();
            setInsight(res.data.insight);
        } catch (error) {
            console.error(error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/");
    };

    const handleAddTransaction = async (transactionData) => {
        try {
            await addTransaction(transactionData);
            fetchTransactions();
            fetchSummary();
            fetchInsight();
        } catch (error) {
            console.error(error);
            alert("Failed to add transaction");
        }
    };

    useEffect(() => {
        fetchTransactions();
        fetchSummary();
        fetchInsight();
    }, []);

    return (
        <div className="container">
            <button
                className="logout-btn"
                onClick={handleLogout}
            >
                Logout
            </button>

            <h1 className="title">
                Mini Fintech Dashboard
            </h1>

            <SummaryCards summary={summary} />

            <InsightCard insight={insight} />

            <SpendingChart
                transactions={transactions}
            />

            <TransactionForm
                onAddTransaction={handleAddTransaction}
            />


            <TransactionList
                transactions={transactions}
            />
        </div>
    );
}

export default Dashboard;