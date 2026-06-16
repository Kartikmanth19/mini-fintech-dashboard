const express = require("express");

const router = express.Router();

const {
    addTransaction,
    getTransactions,
    getSummary,
    getInsight
} = require("../controllers/transactionController");


router.post("/", addTransaction);

router.get("/", getTransactions);

router.get("/summary", getSummary);

router.get("/insight", getInsight);


module.exports = router;