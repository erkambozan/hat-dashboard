import React from "react";
import Table from "./modals/AdminUsersTable"
import {transactionsColumn} from "./Columns";


export default function Transactions(props) {
    return (
        <Table data={props.transactions} dataColumns={transactionsColumn}/>
    );
}
