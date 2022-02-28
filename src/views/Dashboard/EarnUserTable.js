import React from "react";
// Chakra imports
import {
    Button,
    Flex, Input, SimpleGrid, Text, Th, useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import EarnApi from "api/earns";
import Table from "./modals/UserTable"

import {useState} from "react";
import {useEffect} from "react";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import {ChevronDoubleRightIcon} from "@heroicons/react/solid";
import Config from "../../config";
import MoveEarnToWithdrawModal from "./modals/MoveEarnToWithdrawModal";
import AddEarnWithdrawModal from "./modals/AddEarnWithdrawModal";
import TotalBalance from "./Components/TotalBalance";
import {NotificationManager} from "react-notifications";

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
            label: 'Withdraw Amount USD',
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

    function deleteEarnWithdraw(id) {
        EarnApi.DeleteEarnById(id)
            .then(() => {
                NotificationManager.success("Earn Withdraw deleted");
            })
            .catch(err => {
                NotificationManager.error("Earn Withdraw doesn't delete only you can delete Pending status");
                console.log("err:", err)
            })
    }

    const [data, setData] = useState([{
        id: "",
        withdraw_address: "",
        withdraw_amount: "",
        coin_type: "",
        coin_price: "",
        status: "",
    }]);

    const [amount, setAmount] = useState(0)
    const [earnAmount, setEarnAmount] = useState(0)
    const [multiplyAmount, setMultiplyAmount] = useState(0)
    const [modalShow, setModalShow] = useState(false);
    const [moveModalShow, setMoveModalShow] = useState(false);
    const [moveAmount, setMoveAmount] = useState(0)
    const heltPrice = Config.heltPrice

    useEffect(() => {
        EarnApi.FindEarnsByUserId()
            .then(res => {
                setData(res.data)
            })
            .catch(err => console.log("err:", err))
    }, [])

    function calculatePrice() {
        setMultiplyAmount(amount * heltPrice)
        setEarnAmount(multiplyAmount)
    }

    function handleChangeAmount(event) {
        setAmount(event.target.value)
    }

    function handleChangeMoveAmount(event) {
        console.log(event.target.value)
        setMoveAmount(event.target.value)
    }

    function exchangeEarnBalanceToWithdrawBalance() {
        EarnApi.ExchangeEarnBalanceToWithdrawBalance({
            amount: moveAmount
        }).then(() => {
            NotificationManager.success("Earn Balance successfully moved to Withdraw Balance");
            setMoveModalShow(false);
        }).catch(err => {
            console.log(err)
            NotificationManager.error("Earn Balance didn't moved to Withdraw Balance an error occurred");
            setMoveModalShow(false)
        })
    }

    return (
        <Flex direction="column" pt={{base: "120px", md: "75px"}} marginLeft="10%" marginRight="10%">
            <SimpleGrid columns={{sm: 1, md: 2, xl: 4}} spacing="24px">
                <TotalBalance/>
            </SimpleGrid>

            <Flex direction="column" pt={{base: "50px", md: "24px"}} marginLeft="20%" marginRight="20%" marginBottom="24px">
                <Flex>
                    <Card minHeight="200px" justifyContent="center">

                        <Flex marginBottom="10%">
                            <Text fontWeight="Bold" fontSize="18px">Earn Balance to Withdraw Balance</Text>
                        </Flex>
                        <CardBody>
                            <Flex direction="column" marginLeft="20%">
                                <Text align="start">
                                    Earn Amount
                                </Text>
                                <Input type="number" onChange={handleChangeMoveAmount}/>
                            </Flex>
                            <Card alignItems="center" maxWidth="25%">
                                <Button w="120px" bg={iconTeal} onClick={() => setMoveModalShow(true)}>
                                    Move
                                </Button>
                                <MoveEarnToWithdrawModal yesButton={exchangeEarnBalanceToWithdrawBalance} show={moveModalShow}
                                                         onHide={() => setMoveModalShow(false)}/>
                            </Card>
                        </CardBody>
                    </Card>
                </Flex>
            </Flex>

            <Flex>
                <Card minHeight="300px" justifyContent="center">
                    <Flex marginBottom="10%">
                        <Text fontWeight="Bold"  fontSize="18px">Earn Balance to USD and Withdraw</Text>
                    </Flex>
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
                                <ChevronDoubleRightIcon h={"48px"} w={"48px"}/>
                            </Button>
                        </Card>
                        <Flex direction="column" justifyContent="right" marginRight="20%">
                            <Text>
                                Amount USD
                            </Text>
                            <Input value={multiplyAmount}/>
                            <Text fontSize="xs">Minimum 50 USD you can withdraw</Text>
                        </Flex>
                    </CardBody>
                    <Flex justifyContent="flex-end" paddingTop="5%" paddingRight="5%">
                        <Button w="120px" bg={iconTeal} onClick={() => setModalShow(true)}>
                            Withdraw
                        </Button>
                        <AddEarnWithdrawModal earnAmount={multiplyAmount} show={modalShow}
                                              onHide={() => setModalShow(false)}/>
                    </Flex>
                </Card>
            </Flex>

            <Flex direction="column" pt={{base: "24px"}}>
                <Table data={data} dataColumns={columns} deleteEarnWithdraw={deleteEarnWithdraw}/>
            </Flex>
        </Flex>
    );
}

export default EarnUserTable;
