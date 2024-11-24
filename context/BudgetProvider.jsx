import React, { createContext, useContext, useState } from "react";

const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
    const [balance, setBalance] = useState(0);
    const [transaction, setTransaction] = useState([])

    const setInitialBalance = (value) => {
        setBalance((prev) => prev + value);
    };


    const handleTransactions = (item) => {
            if (item.data.selectedOption === "income") {
                setBalance((prev) => prev + Number(item.data.amount));
                setTransaction((prev) => [...prev, item]);
            } else {
                if (Number(item.data.amount) > balance) return;
                setBalance((prev) => prev - Number(item.data.amount));
                setTransaction((prev) => [...prev, item]);
            }
    };

    return (
        <BudgetContext.Provider value={{ balance, setInitialBalance, handleTransactions, transaction }}>
            {children}
        </BudgetContext.Provider>
    );
};

export const useBudget = () => useContext(BudgetContext)