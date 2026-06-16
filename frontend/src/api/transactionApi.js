import axios from "axios";

const API = axios.create({
    baseURL: "https://mini-fintech-dashboard-p67c.onrender.com/api/transactions"
});

export const getTransactions = (params) =>
    API.get("/", { params });

export const addTransaction = (data) =>
    API.post("/", data);

export const getSummary = () =>
    API.get("/summary");

export const getInsight = () =>
    API.get("/insight");
