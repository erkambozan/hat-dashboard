import React from "react";
// Chakra imports
import {
    Button,
    Flex, Text, useColorModeValue
} from "@chakra-ui/react";
import Card from "components/Card/Card.js";
// Custom components

import {useState} from "react";
import {useEffect} from "react";
import {adminWithdrawalColumn, userWithdrawalColumn} from "./Columns";
import Table from "./modals/AdminWithdrawalTable"
import UserApi from "../../api/user";
import AddModalWithdraw from "./modals/AddModalWithdraw";
import CardHeader from "../../components/Card/CardHeader";
import AdminStakeApi from "../../api/adminstake";
import EarnApi from "../../api/earns";
import {NotificationManager} from "react-notifications";

function AdminWithdrawalTable() {
    const textColor = useColorModeValue("gray.700", "white");

    const [modalShow, setModalShow] = useState(false);
    const columns = adminWithdrawalColumn

    const [data, setData] = useState([{
        id: "",
        userId: "",
        wallet_address: "",
        withdraw_amount: "",
        status: "",
    }]);

    useEffect(() => {
        AdminStakeApi.GetAllWithdraw()
            .then(res => {
                setData(res.data)
            })
            .catch()
    }, [])

    function deleteWithdraw(id){
        UserApi.DeleteWithdrawById(id)
            .then(() => {
                NotificationManager.success("Withdraw deleted");
            })
            .catch(err => {
                NotificationManager.error("Withdraw doesn't delete only you can delete Pending status");
                console.log("err:", err)
            })
    }


    return (
        <Flex direction="column" pt={{base: "120px", md: "75px"}} marginLeft="10%" marginRight="10%">
            <Flex direction="column" pt={{base: "24px"}}>
                <Card>
                    <CardHeader p="6px 0px 22px 0px">
                        <Text fontSize="xl" color={textColor} fontWeight="bold">
                            Admin All Withdrawal
                        </Text>
                    </CardHeader>

                </Card>

                <AddModalWithdraw show={modalShow} onHide={() => setModalShow(false)}/>
                <Table data={data} dataColumns={columns} deleteWithdraw={deleteWithdraw}/>
            </Flex>
        </Flex>
    );
}

export default AdminWithdrawalTable;

