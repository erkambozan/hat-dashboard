import UserApi from "../../api/user";
import React, {useEffect, useState} from "react";
import TransactionRow from "../../components/Tables/TransactionRow";
import {FaArrowDown, FaArrowUp} from "react-icons/fa";

export default function Transactions(props) {
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
            UserApi.GetTransactions(props.id).then(res => {
                setTransactions(res.data)
            })
        }
    )

    return transactions.map((transaction) => {
        return (
            <TransactionRow
                name={transaction.title}
                logo={transaction.amount >= 0 ? FaArrowUp : FaArrowDown}
                date={transaction.date}
                price={transaction.amount}
            />
        );
    })
}
