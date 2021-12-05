import React from "react";
// Chakra imports
import {
  Flex,
  Table,
  Tbody,
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
import TablesProjectRow from "components/Tables/TablesProjectRow";
import TablesTableRow from "components/Tables/TablesTableRow";
import { tablesProjectData, tablesTableData } from "variables/general";

function Tables() {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            Stake Table
          </Text>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                {/*<Th pl="0px" color="gray.400">*/}
                {/*  Author*/}
                {/*</Th>*/}
                <Th color="gray.400">Started Stake Amount</Th>
                <Th color="gray.400">Expiry Stake Amount</Th>
                <Th color="gray.400">Expiry Stake Time</Th>
                <Th color="gray.400">Stake Percentage</Th>
                <Th color="gray.400">Start Date</Th>
                <Th color="gray.400">End Date</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {tablesTableData.map((row) => {
                return (
                  <TablesTableRow
                    name={row.name}
                    logo={row.logo}
                    email={row.email}
                    startedStakeAmount={row.startedStakeAmount}
                    expiryStakeAmount={row.expiryStakeAmount}
                    expiryStakeTime={row.expiryStakeTime}
                    stakePercentage={row.stakePercentage}
                    startDate={row.startDate}
                    endDate={row.endDate}
                    date={row.date}
                    status={row.status}
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

export default Tables;
