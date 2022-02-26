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
import StakeApi from "api/stake";

class GetStakesByUserId extends React.Component {
  state={
      response:[]
  }
  componentDidMount(){
      StakeApi.FindStakesByUserId()
      .then(res=>{
          this.setState({response:res.data})
      })
      .catch(err=>console.log("err:",err))
  }

  getReady = ()=>{
      const result = this.state.response.map((item) => {
          return (
            <TablesTableRow
            name={item.stake_type}
            logo={item.logo}
            email={item.email}
            startedStakeAmount={item.started_stake_amount}
            expiryStakeAmount={item.expiry_stake_amount}
            expiryStakeTime={item.expiry_stake_time}
            stakePercentage={item.stake_percentage}
            startDate={item.start_date}
            endDate={item.end_date}
            date={item.date}
            status={item.stake_status}
          />
          );
      })

      return result;
  }

  render() {
      return(
          <>{this.getReady()}</>
      )
  }
}


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
              <GetStakesByUserId/>
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Tables;
