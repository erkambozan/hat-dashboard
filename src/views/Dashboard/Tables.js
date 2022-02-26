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
import TablesTableRow from "components/Tables/TablesTableRow";
import { tablesProjectData, tablesTableData } from "variables/general";
import StakeApi from "api/stake";
import StakeUserTable from "./StakeUserTable"

import { useState } from "react";
import { useEffect } from "react";
class GetStakesByUserId extends React.Component {
  state={
      response:[]
  }
  componentDidMount(){
      
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

  const [data, setData] = useState([]);

  useEffect(() => {
    StakeApi.FindStakesByUserId()
      .then(res=>{
          setData(res.data)
      })
      .catch(err=>console.log("err:",err))
  },[])

  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <StakeUserTable data={data}/>
    </Flex>
  );
}

export default Tables;
