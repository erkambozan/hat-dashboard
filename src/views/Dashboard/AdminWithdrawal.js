import React, {useState} from "react";
// Chakra imports
import {Button, Flex, Table, Tbody, Text, Th, Thead, Tr, useColorModeValue,} from "@chakra-ui/react";
import AddModalWithdraw from './modals/AddModalWithdraw'
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import AdminStake from "api/adminstake";
import TablesTableRowAdminWithdrawal from "../../components/Tables/TablesTableRowAdminWithdrawal";

class GetAllWithdraws extends React.Component {
    state = {
        response: []
    }
    componentDidMount() {
        AdminStake.GetAllWithdraw()
            .then(res => {
                console.log(res)
                this.setState({ response: res.data })
            })
            .catch()
    }

    getReady = () => {
        return this.state.response.map((item) => {
            return (
                <TablesTableRowAdminWithdrawal
                    id={item.id}
                    userId={item.userId}
                    walletAddress={item.wallet_address}
                    withdrawAmount={item.withdraw_amount}
                    status={item.status}
                />
            );
        });
    }

    render() {
        return (
            <>{this.getReady()}</>
        )
    }
}

function AdminWithdraws() {
    const textColor = useColorModeValue("gray.700", "white");
    const [modalShow, setModalShow] = useState(false);
    return (
        <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
            <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
                <CardHeader p="6px 0px 22px 0px">
                    <Text fontSize="xl" color={textColor} fontWeight="bold">
                        Withdraw
                    </Text>
                </CardHeader>
                <CardBody>
                    <Table variant="simple" color={textColor}>
                        <Thead>
                            <Tr my=".8rem" pl="0px" color="gray.400">
                                <Th color="gray.400">User Id</Th>
                                <Th color="gray.400">Wallet Address</Th>
                                <Th color="gray.400">Amount</Th>
                                <Th color="gray.400">Status</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <GetAllWithdraws />
                        </Tbody>
                    </Table>
                </CardBody>
            </Card>
        </Flex>
    );
}

export default AdminWithdraws;
