import React from "react";
// Chakra imports
import {
    Flex, Text, useColorModeValue
} from "@chakra-ui/react";
import Card from "components/Card/Card.js";
// Custom components

import {useState} from "react";
import {useEffect} from "react";
import {adminStakeColumn, userWithdrawalColumn} from "./Columns";
import Table from "./modals/AdminUsersTable"
import AdminStakeApi from "../../api/adminstake";
import AddModalWithdraw from "./modals/AddModalWithdraw";
import CardHeader from "../../components/Card/CardHeader";
import CardBody from "../../components/Card/CardBody";

function AdminStake() {
    const textColor = useColorModeValue("gray.700", "white");

    const [modalShow, setModalShow] = useState(false);
    const columns = adminStakeColumn

    const [data, setData] = useState([{
        id: "",
        stake_type: "",
        started_stake_amount: "",
        expiry_stake_time: "",
        stake_percentage: "",
        start_date: "",
        end_date: "",
        date: "",
        status: ""
    }]);

    useEffect(() => {
        AdminStakeApi.GetAllStakes()
            .then(res=>{
                setData(res.data)
            })
            .catch(err=>console.log("err:",err))
    }, [])


    return (
        <Flex direction="column" pt={{base: "120px", md: "75px"}} marginLeft="10%" marginRight="10%">
            <Flex direction="column" pt={{base: "24px"}}>
                <Card>
                    <CardHeader p="6px 0px 22px 0px">
                        <Text fontSize="xl" color={textColor} fontWeight="bold">
                            Admin All Stakes
                        </Text>
                    </CardHeader>
                    <CardBody>
                        <AddModalWithdraw show={modalShow} onHide={() => setModalShow(false)}/>
                        <Table data={data} dataColumns={columns}/>
                    </CardBody>
                </Card>
            </Flex>
        </Flex>
    );
}

export default AdminStake;

