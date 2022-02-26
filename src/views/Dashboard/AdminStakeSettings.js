import React from "react";
// Chakra imports
import {
    Button,
    Flex,
    Table,
    Tbody, Td,
    Text,
    Th,
    Thead,
    Tr,
    useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import AddModal from './modals/AddModal'
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import TablesTableRowAdminStakeSettings from "components/Tables/TablesTableRowAdminStakeSettings";
import { tablesProjectData, tablesTableData } from "variables/general";
import StakeApi from "api/stake";

class GetAllStakeSettings extends React.Component {
    state = {
        response: []
    }
    componentDidMount() {
        StakeApi.GetAllStakeSettings()
            .then(res => {
                this.setState({ response: res.data })
            })
            .catch(err => console.log("err:", err))
    }

    getReady = () => {
        const result = this.state.response.map((item) => {
            return (
                <TablesTableRowAdminStakeSettings
                    id={item.id}
                    expiryStakeTime={item.expiry_stake_time}
                    stakePercentage={item.stake_percentage}
                    stakeType={item.stake_type}
                    minimumLimit={item.minimum_limit}
                    maximumLimit={item.maximum_limit}
                />
            );
        })

        return result;
    }

    render() {
        return (
            <>{this.getReady()}</>
        )
    }
}

function AdminStakeSettings() {
    const textColor = useColorModeValue("gray.700", "white");
    const [modalShow, setModalShow] = useState(false);
    return (
        <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
            <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
                <CardHeader p="6px 0px 22px 0px">
                    <Text fontSize="xl" color={textColor} fontWeight="bold">
                        Stake Settings Table
                    </Text>
                </CardHeader>
                <CardBody>
                    <Table variant="simple" color={textColor}>
                        <Thead>
                            <Tr my=".8rem" pl="0px" color="gray.400">
                                <Th color="gray.400">Expiry Stake Time</Th>
                                <Th color="gray.400">Stake Percentage</Th>
                                <Th color="gray.400">Stake Type</Th>
                                <Th color="gray.400">Minimum Limit</Th>
                                <Th color="gray.400">Maximum Limit</Th>
                                <Th>
                                    <Button onClick={() => setModalShow(true)} p="0px" bg="transparent" variant="no-hover">
                                        <Text
                                            fontSize="md"
                                            color="blue.400"
                                            fontWeight="bold"
                                            cursor="pointer"
                                        >
                                            Add
                                        </Text>
                                    </Button>
                                    <AddModal show={modalShow} onHide={() => setModalShow(false)} />
                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <GetAllStakeSettings />
                        </Tbody>
                    </Table>
                </CardBody>
            </Card>
        </Flex>
    );
}

export default AdminStakeSettings;
