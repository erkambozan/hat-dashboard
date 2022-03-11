import CardBody from "../../../components/Card/CardBody";
import {Button, Flex, Stat, StatHelpText, StatLabel, StatNumber, useColorMode, useColorModeValue} from "@chakra-ui/react";
import IconBox from "../../../components/Icons/IconBox";
import {WalletIcon} from "../../../components/Icons/Icons";
import Card from "../../../components/Card/Card";
import React, {useEffect, useState} from "react";
import UserApi from "../../../api/user";
import { useHistory } from "react-router-dom";

export default function TotalBalance() {
    // Chakra Color Mode
    const iconTeal = useColorModeValue("teal.300", "teal.300");
    const iconBoxInside = useColorModeValue("white", "white");
    const textColor = useColorModeValue("gray.700", "white");

    const [userTotalBalance, setUserTotalBalance] = useState({
        withdrawable_balance: 0.0,
        locked_balance: 0.0,
        earn_balance: 0.0
    });
    const [referenceCount, setReferenceCount] = useState(0)
    useEffect(() => {
        UserApi.GetTotalBalance().then(res => {
            setUserTotalBalance(res.data);
        }).catch(err => console.log("err:", err))
        UserApi.GetUserReferenceCount().then(res => {
            setReferenceCount(res.data);
        }).catch(err => console.log("err:", err))
    }, []);

    function redirectEarn(){
        let path = `/helt/user/earn`;
        let history = useHistory();
        history.push(path);
    }

    return (
        <>
            <Card minH="83px">
                <CardBody>
                    <Flex flexDirection="row" align="center" justify="center" w="100%">
                        <Stat me="auto">
                            <StatLabel
                                fontSize="sm"
                                color="gray.400"
                                fontWeight="bold"
                                pb=".1rem"
                            >
                                Withdrawal Balance HELT
                            </StatLabel>
                            <Flex>
                                <StatNumber fontSize="lg" color={textColor}>
                                    {userTotalBalance.withdrawable_balance}
                                </StatNumber>
                            </Flex>
                        </Stat>
                        <Button as="box" h={"45px"} w={"45px"} bg={iconTeal}>
                            <a href="/helt/user/withdraw">
                                <WalletIcon h={"24px"} w={"24px"} color={iconBoxInside}/>
                            </a>
                        </Button>
                    </Flex>
                </CardBody>
            </Card>
            <Card minH="83px">
                <CardBody>
                    <Flex flexDirection="row" align="center" justify="center" w="100%">
                        <Stat me="auto">
                            <StatLabel
                                fontSize="sm"
                                color="gray.400"
                                fontWeight="bold"
                                pb=".1rem"
                            >
                                Locked Balance HELT
                            </StatLabel>
                            <Flex>
                                <StatNumber fontSize="lg" color={textColor}>
                                    {userTotalBalance.locked_balance}
                                </StatNumber>
                            </Flex>
                        </Stat>
                        <Button as="box" h={"45px"} w={"45px"} bg={iconTeal}>
                            <a href="/helt/user/stake-tables">
                                <WalletIcon h={"24px"} w={"24px"} color={iconBoxInside}/>
                            </a>
                        </Button>
                    </Flex>
                </CardBody>
            </Card>
            <Card minH="83px">
                <CardBody>
                    <Flex flexDirection="row" align="center" justify="center" w="100%">
                        <Stat me="auto">
                            <StatLabel
                                fontSize="sm"
                                color="gray.400"
                                fontWeight="bold"
                                pb=".1rem"
                            >
                                Earn Balance HELT
                            </StatLabel>
                            <Flex>
                                <StatNumber fontSize="lg" color={textColor}>
                                    {userTotalBalance.earn_balance}
                                </StatNumber>
                            </Flex>
                        </Stat>
                        <Button as="box" h={"45px"} w={"45px"} bg={iconTeal}>
                            <a href="/helt/user/earns">
                            <WalletIcon h={"24px"} w={"24px"} color={iconBoxInside}/>
                            </a>
                        </Button>
                    </Flex>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <Flex flexDirection="row" align="center" justify="center" w="100%">
                        <Stat me="auto">
                            <StatLabel
                                fontSize="sm"
                                color="gray.400"
                                fontWeight="bold"
                                pb=".1rem"
                            >
                                References
                            </StatLabel>
                            <Flex>
                                <StatNumber fontSize="lg" color={textColor}>
                                    {referenceCount}
                                </StatNumber>
                            </Flex>
                        </Stat>
                        <IconBox as="box" h={"45px"} w={"45px"} bg={iconTeal}>
                            <WalletIcon h={"24px"} w={"24px"} color={iconBoxInside}/>
                        </IconBox>
                    </Flex>
                </CardBody>
            </Card>
        </>
    )
}