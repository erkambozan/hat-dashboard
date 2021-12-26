import React, {useState} from "react";
// Chakra imports
import {Button, Flex, Table, Tbody, Text, Th, Thead, Tr, useColorModeValue,} from "@chakra-ui/react";
import AddModalWithdraw from './modals/AddModalWithdraw'
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import TablesTableRowUserWithdrawal from "components/Tables/TablesTableRowUserWithdrawal";
import UserApi from "api/user";

class Withdrawal extends React.Component {
    state = {
        response: []
    }
    componentDidMount() {
        UserApi.GetAllWithdrawUser()
            .then(res => {
                this.setState({ response: res.data })
            })
            .catch()
    }

    getReady = () => {
        return this.state.response.map((item) => {
            return (
                <TablesTableRowUserWithdrawal
                    id={item.id}
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

function UserWithdrawal() {
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
                                <Th color="gray.400">Wallet Address</Th>
                                <Th color="gray.400">Amount</Th>
                                <Th color="gray.400">Status</Th>
                                <Th>
                                    <Button onClick={() => setModalShow(true)} p="0px" bg="transparent" variant="no-hover">
                                        <Text
                                            fontSize="md"
                                            color="blue.400"
                                            fontWeight="bold"
                                            cursor="pointer"
                                        >
                                            Withdraw
                                        </Text>
                                    </Button>
                                    <AddModalWithdraw show={modalShow} onHide={() => setModalShow(false)} />
                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Withdrawal />
                        </Tbody>
                    </Table>
                </CardBody>
            </Card>
        </Flex>
    );
}

export default UserWithdrawal;
