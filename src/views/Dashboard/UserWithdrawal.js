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
import {userWithdrawalColumn} from "./Columns";
import Table from "./modals/UserTableWithDelete"
import UserApi from "../../api/user";
import AddModalWithdraw from "./modals/AddModalWithdraw";
import CardHeader from "../../components/Card/CardHeader";
import {NotificationManager} from "react-notifications";

function UserWithdrawalTable() {
    const textColor = useColorModeValue("gray.700", "white");

    const [modalShow, setModalShow] = useState(false);
    const columns = userWithdrawalColumn

    const [data, setData] = useState([{
        id: "",
        wallet_address: "",
        withdraw_amount: "",
        status: "",
    }]);

    useEffect(() => {
        UserApi.GetAllWithdrawUser()
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
                            Withdraw HELT
                        </Text>
                        <Button onClick={() => setModalShow(true)} p="0px" bg="transparent" variant="no-hover" marginLeft="70%">
                            <Text
                                fontSize="md"
                                color="blue.400"
                                fontWeight="bold"
                                cursor="pointer"
                            >
                                Withdraw HELT
                            </Text>
                        </Button>
                        <AddModalWithdraw show={modalShow} onHide={() => setModalShow(false)}/>
                    </CardHeader>
                        <Table data={data} dataColumns={columns} deleteFunction={deleteWithdraw}/>
                </Card>


            </Flex>
        </Flex>
    );
}

export default UserWithdrawalTable;

