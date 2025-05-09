import { createContext, useEffect, useState, ReactNode, useContext} from "react";
import { api } from "../services/api";

export interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

interface TransactionProviderProps {
    children: ReactNode;
}

interface TransactionInput{
    title: string;
    amount: number;
    type: string; 
    category: string;
}

export interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput)=> Promise<void>;
    deleteTransaction: (id: number) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
)

export function TransactionProvider ({ children }: TransactionProviderProps) {

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    
    useEffect(()=>{
        api.get('transactions').then(response => setTransactions(response.data.transactions))
    }, [])

    async function deleteTransaction(id: number) {
        setTransactions(transactions.filter(transaction => transaction.id !== id));
    }
    

    async function createTransaction (transactionInput: TransactionInput) {
        const response = await api.post('/transactions', {...transactionInput, createdAt: new Date()})
        const {transaction} = response.data
        setTransactions([...transactions, transaction])
    }


    return (
        <TransactionsContext.Provider value={{transactions, createTransaction, deleteTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionsContext)
    return context
}


