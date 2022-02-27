import React from "react";
// Chakra imports
import {
    Button,
    Flex, Input, SimpleGrid, Stat, StatNumber, Text, Th, useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import EarnApi from "api/earns";
import Table from "./modals/AdminTable"

import {useState} from "react";
import {useEffect} from "react";
import {NotificationManager} from "react-notifications";

function AdminEarnTable() {

    const columns = [
        {
            label: 'id',
            field: 'id',
            width: 150,
        },
        {
            label: 'User id',
            field: 'user_id',
            width: 150,
        },
        {
            label: 'Withdraw Address',
            field: 'withdraw_address',
            width: 150,
        },
        {
            label: 'Withdraw Amount USD',
            field: 'withdraw_amount',
            width: 270,
        },
        {
            label: 'Coin Type',
            field: 'coin_type',
            sort: 'disabled',
            width: 100,
        },
        {
            label: 'Coin Price',
            field: 'coin_price',
            sort: 'disabled',
            width: 100,
        },
        {
            label: 'Status ',
            field: 'status',
            width: 100,
        },
    ]

    function deleteEarnWithdraw(id){
        EarnApi.DeleteEarnById(id)
            .then(() => {
                NotificationManager.success("Earn Withdraw deleted");
            })
            .catch(err => {
                NotificationManager.error("Earn Withdraw doesn't delete only you can delete Pending status");
                console.log("err:", err)
            })
    }

    const [data, setData] = useState([{
        id: "",
        user_id: "",
        withdraw_address: "",
        withdraw_amount: "",
        coin_type: "",
        coin_price: "",
        status: "",
    }]);

    useEffect(() => {
        EarnApi.FindEarnsByUserId()
            .then(res => {
                setData(res.data)
            })
            .catch(err => console.log("err:", err))
    }, [])

    return (
        <Flex direction="column" pt={{base: "120px", md: "75px"}} marginLeft="10%" marginRight="10%">
            <Flex direction="column" pt={{base: "24px"}}>
                <Table data={data} dataColumns={columns} deleteEarnWithdraw={deleteEarnWithdraw}/>
            </Flex>
        </Flex>
    );
}

export default AdminEarnTable;
