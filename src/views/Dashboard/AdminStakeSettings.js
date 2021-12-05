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
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import TablesTableRowAdminStakeSettings from "components/Tables/TablesTableRowAdminStakeSettings";
import { tablesProjectData, tablesTableData } from "variables/general";

function AdminStakeSettings() {
    const textColor = useColorModeValue("gray.700", "white");

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
                                <Th>
                                    <Button p="0px" bg="transparent" variant="no-hover">
                                        <Text
                                            fontSize="md"
                                            color="blue.400"
                                            fontWeight="bold"
                                            cursor="pointer"
                                        >
                                            Add
                                        </Text>
                                    </Button>
                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {tablesTableData.map((row) => {
                                return (
                                    <TablesTableRowAdminStakeSettings
                                        expiryStakeTime={row.expiryStakeTime}
                                        stakePercentage={row.stakePercentage}
                                        stakeType={row.stakeType}
                                        minimumLimit={row.minimumLimit}
                                    />
                                );
                            })}
                        </Tbody>
                    </Table>
                </CardBody>
            </Card>
        </Flex>
    );
}

export default AdminStakeSettings;
