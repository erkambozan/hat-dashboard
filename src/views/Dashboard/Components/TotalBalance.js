import CardBody from "../../../components/Card/CardBody";
import {Flex, Stat, StatHelpText, StatLabel, StatNumber, useColorMode, useColorModeValue} from "@chakra-ui/react";
import IconBox from "../../../components/Icons/IconBox";
import {WalletIcon} from "../../../components/Icons/Icons";
import Card from "../../../components/Card/Card";
import React, {useEffect, useState} from "react";
import UserApi from "../../../api/user";

export default function TotalBalance() {
    const value = "$100.000";
    // Chakra Color Mode
    const { colorMode, toggleColorMode } = useColorMode();
    const iconTeal = useColorModeValue("teal.300", "teal.300");
    const iconBoxInside = useColorModeValue("white", "white");
    const textColor = useColorModeValue("gray.700", "white");

    const [userTotalBalance, setUserTotalBalance] = useState(0.0);
    useEffect(() => {
        UserApi.GetTotalBalance().then(res => {
            setUserTotalBalance(res.data);
        }).catch(err => console.log("err:", err))
    }, []);

    return (
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
                            Total Balance
                        </StatLabel>
                        <Flex>
                            <StatNumber fontSize="lg" color={textColor}>
                                {userTotalBalance}
                            </StatNumber>
                        </Flex>
                    </Stat>
                    <IconBox as="box" h={"45px"} w={"45px"} bg={iconTeal}>
                        <WalletIcon h={"24px"} w={"24px"} color={iconBoxInside}/>
                    </IconBox>
                </Flex>
            </CardBody>
        </Card>
    )
}