import React from "react";
// Chakra imports
import {
  Flex,
} from "@chakra-ui/react";
import StakeApi from "api/stake";
import Table from "./modals/UserTableWithDelete";

import { useState } from "react";
import { useEffect } from "react";
import {stakeUserColumn} from "./Columns";

function StakeUserTable() {

    const columns = stakeUserColumn

  const [data, setData] = useState([{
      started_stake_amount: "",
      expiry_stake_amount: "",
      expiry_stake_time: "",
      stake_percentage: "",
      start_date: "",
      end_date: ""
  }]);

  useEffect(() => {
    StakeApi.FindStakesByUserId()
      .then(res=>{
          setData(res.data)
      })
      .catch(err=>console.log("err:",err))
  },[])

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Table data={data} dataColumns={columns}/>
    </Flex>
  );
}

export default StakeUserTable;
