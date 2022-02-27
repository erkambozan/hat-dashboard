import React from "react";
// Chakra imports
import {
  Flex,
} from "@chakra-ui/react";
import StakeApi from "api/stake";
import Table from "./modals/UserTable";

import { useState } from "react";
import { useEffect } from "react";

function StakeUserTable() {

    const [columns, setColumns] = useState([
        {
            label: 'Started Stake Amount',
            field: 'started_stake_amount',
            width: 150,
        },
        {
            label: 'Expiry Stake Amount',
            field: 'expiry_stake_amount',
            width: 270,
        },
        {
            label: 'Expiry Stake Day ',
            field: 'expiry_stake_time',
            width: 200,
        },
        {
            label: 'Stake Percentage',
            field: 'stake_percentage',
            width: 100,
        },
        {
            label: 'Start date',
            field: 'start_date',
            sort: 'disabled',
            width: 150,
        },
        {
            label: 'End Date',
            field: 'end_date',
            sort: 'disabled',
            width: 100,
        },
    ])

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
