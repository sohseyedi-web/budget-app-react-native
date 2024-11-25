import { useState } from "react"
import { useBudget } from "../context/BudgetProvider"

export const useTransaction = () => {
    const [loading, setLoading] = useState(false)
    const { handleTransactions } = useBudget();

    const onSubmitTransaction = (title, amount, description = "", selectedOption) => {
        setLoading(true)
        try {
            const newItem = {
                id: Math.ceil(Math.random() * 10000),
                data: {
                    title, amount, description, selectedOption
                },
                createdAt: new Date().toISOString(),
            }
            handleTransactions(newItem)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return { loading, onSubmitTransaction }
}