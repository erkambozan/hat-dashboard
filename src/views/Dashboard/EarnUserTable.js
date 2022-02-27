import React from "react";
// Chakra imports
import {
    Button,
    Flex, Input, Stat, StatNumber, Text, Th, useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import EarnApi from "api/earns";
import Table from "./Table"

import {useState} from "react";
import {useEffect} from "react";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import {ChevronDoubleRightIcon} from "@heroicons/react/solid";
import Config from "../../config";
import AddModal from "./modals/AddModal";
import AddEarnWithdrawModal from "./modals/AddEarnWithdrawModal";

function EarnUserTable() {

    const iconTeal = useColorModeValue("teal.300", "teal.300");
    const iconBoxInside = useColorModeValue("white", "white");
    const textColor = useColorModeValue("gray.700", "white");

    const columns = [
        {
            label: 'Withdraw Address',
            field: 'withdraw_address',
            width: 150,
        },
        {
            label: 'Withdraw Amount',
            field: 'withdraw_amount',
            width: 270,
        },
        {
            label: 'Coin Type',
            field: 'coin_type',
            sort: 'disabled',
            width: 100,
        },
        {
            label: 'Coin Price',
            field: 'coin_price',
            sort: 'disabled',
            width: 100,
        },
        {
            label: 'Status ',
            field: 'status',
            width: 100,
        },
    ]

    const [data, setData] = useState([{
        withdraw_address: "",
        withdraw_amount: "",
        coin_type: "",
        coin_price: "",
        status: ""
    }]);

    const [amount, setAmount] = useState(0)
    const [earnAmount, setEarnAmount] = useState(0)
    const [multiplyAmount, setMultiplyAmount] = useState(0)
    const [modalShow, setModalShow] = useState(false);
    const heltPrice = Config.heltPrice

    useEffect(() => {
        EarnApi.FindEarnsByUserId()
            .then(res => {
                console.log("Earn response" + res)
                setData(res.data)
            })
            .catch(err => console.log("err:", err))
    }, [])

    function calculatePrice() {
        setMultiplyAmount(amount * heltPrice)
        setEarnAmount(multiplyAmount)
    }

    function handleChangeAmount (event){
        setAmount(event.target.value)
    }

    return (
        <Flex direction="column" pt={{base: "120px", md: "75px"}} marginLeft="10%" marginRight="10%">
            <Flex>
                <Card minHeight="300px" justifyContent="center">
                    <CardBody>
                        <Flex direction="column" marginLeft="20%">
                            <Text>
                                Earn Amount
                            </Text>
                            <Input type="number" onChange={handleChangeAmount}/>
                            <Text fontSize="xs">Helt Price = {heltPrice} USD</Text>
                        </Flex>
                        <Card alignItems="center" maxWidth="25%">
                            <Button bg={iconTeal} onClick={() => calculatePrice()}>
                                <ChevronDoubleRightIcon h={"24px"} w={"24px"} />
                            </Button>
                        </Card>
                        <Flex direction="column" justifyContent="right" marginRight="20%">
                            <Text>
                                Amount USD
                            </Text>
                            <Input value={multiplyAmount}/>
                        </Flex>
                    </CardBody>
                    <Flex justifyContent="flex-end" paddingTop="5%" paddingRight="5%">
                        <Button w="120px" bg={iconTeal} onClick={() => setModalShow(true)}>
                            Withdraw
                        </Button>
                        <AddEarnWithdrawModal earnAmount={earnAmount} show={modalShow} onHide={() => setModalShow(false)} />
                    </Flex>
                </Card>

            </Flex>
            <Flex direction="column" pt={{base: "120px"}}>
                <Table data={data} dataColumns={columns}/>
            </Flex>
        </Flex>
    );
}

export default EarnUserTable;
