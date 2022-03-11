
import React from "react";
// Chakra imports
import {
    Flex, useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Table from "./modals/AdminUsersTable"

import {useState} from "react";
import {useEffect} from "react";
import AdminStakeApi from "../../api/adminstake";
import {adminAllUsersColumn} from "./Columns";

function EarnUserTable() {

    const columns = adminAllUsersColumn

    const [data, setData] = useState([{
        id: "",
        reference_id: "",
        firstName: "",
        lastName: "",
        email: "",
    }]);

    useEffect(() => {
        AdminStakeApi.GetAllUsers()
            .then(res => {
                setData(res.data)
            })
            .catch(err => console.log("err:", err))
    }, [])


    return (
        <Flex direction="column" pt={{base: "120px", md: "75px"}} marginLeft="10%" marginRight="10%">
            <Flex direction="column" pt={{base: "24px"}}>
                <Table data={data} dataColumns={columns}/>
            </Flex>
        </Flex>
    );
}

export default EarnUserTable;

