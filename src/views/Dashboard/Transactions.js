import UserApi from "../../api/user";
import React, {useEffect, useState} from "react";
import Table from "./modals/AdminUsersTable"
import {transactionsColumn} from "./Columns";
import useMountEffect from "@restart/hooks/cjs/useMountEffect";


export default function Transactions(props) {
    const [transactions, setTransactions] = useState([
        {
            title: "",
            date: "",
            amount: ""
        }
    ])
    const columns = transactionsColumn

    useMountEffect(() => {
            UserApi.GetTransactions(props.id).then(res => {
                setTransactions(res.data)
            })
        });

    return (
        <Table data={transactions} dataColumns={columns}/>
    );
}
