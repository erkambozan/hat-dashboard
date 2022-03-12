// Chakra imports
import {
    Box,
    Button,
    Flex,
    Grid,
    Icon,
    Spacer,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
// Assets
import BackgroundCard1 from "assets/img/BackgroundCard1.png";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import IconBox from "components/Icons/IconBox";
import {Separator} from "components/Separator/Separator";
import Config from '../../config';
import React, {useEffect, useState} from "react";
import {
    FaCoins,
    FaPlus,
    FaWallet,
} from "react-icons/fa";
import {RiMastercardFill} from "react-icons/ri";
import UserApi from "../../api/user";
import Perm from "../../api/perm";
import Transactions from "./Transactions";


function Billing() {
    // Chakra color mode
    const iconTeal = useColorModeValue("teal.300", "teal.300");
    const textColor = useColorModeValue("gray.700", "white");
    const borderColor = useColorModeValue("#dee2e6", "gray.500");
    const bgButton = useColorModeValue(
        "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
        "gray.800"
    );

    const [userTotalBalance, setUserTotalBalance] = useState({
        withdrawable_balance: 0.0,
        locked_balance: 0.0,
        earn_balance: 0.0
    });

    const [transactions, setTransactions] = useState([
        {
            title: "",
            date: "",
            amount: ""
        }
    ])

    const [user, setUser] = useState({});

    useEffect(() => {
        UserApi.GetTotalBalance().then(res => {
            setUserTotalBalance(res.data);
        }).catch(err => console.log("err:", err))

        UserApi.GetUserDetails().then(res => {
            setUser(res.data)
            return res.data.id
        }).catch(err => console.log("err:", err))

        UserApi.GetTransactions().then(res => {
            setTransactions(res.data)
        })
    }, []);

    return (
        <Flex direction="column" pt={{base: "120px", md: "75px"}}>
            <Grid templateColumns={{sm: "1fr", lg: "2fr 1.2fr"}} templateRows="1fr">
                <Box>
                    <Grid
                        templateColumns={{
                            sm: "1fr",
                            md: "1fr 1fr",
                            xl: "1fr 1fr 1fr 1fr",
                        }}
                        templateRows={{sm: "auto auto auto", md: "1fr auto", xl: "1fr"}}
                        gap="26px"
                    >
                        <Card
                            backgroundImage={BackgroundCard1}
                            backgroundRepeat="no-repeat"
                            background="cover"
                            bgPosition="10%"
                            p="16px"
                            h={{sm: "220px", xl: "100%"}}
                            gridArea={{md: "1 / 1 / 2 / 3", xl: "1 / 1 / 2 / 3"}}
                        >
                            <CardBody h="100%" w="100%">
                                <Flex
                                    direction="column"
                                    color="white"
                                    h="100%"
                                    p="0px 10px 20px 10px"
                                    w="100%"
                                >
                                    <Flex justify="space-between" align="center">
                                        <Text fontSize="md" fontWeight="bold">
                                            {user.firstName} {user.lastName}
                                        </Text>
                                        <Icon
                                            as={RiMastercardFill}
                                            w="48px"
                                            h="auto"
                                            color="gray.400"
                                        />
                                    </Flex>
                                    <Spacer/>
                                    <Flex direction="column">
                                        <Box>
                                            <Text fontSize="xl" letterSpacing="2px" fontWeight="bold">
                                                {user.email}
                                            </Text>
                                        </Box>
                                        <Flex mt="14px">
                                            <Flex direction="column">
                                                <Text fontSize="xs">Withdrawal Balance</Text>
                                                <Text fontSize="xs" fontWeight="bold">
                                                    {userTotalBalance.withdrawable_balance}
                                                </Text>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </CardBody>
                        </Card>
                        <Card
                            p="16px"
                            display="flex"
                            align="center"
                            justify="center"
                        >
                            <CardBody>
                                <Flex direction="column" align="center" w="100%" py="14px">
                                    <IconBox as="box" h={"60px"} w={"60px"} bg={iconTeal}>
                                        <Icon h={"24px"} w={"24px"} color="white" as={FaWallet}/>
                                    </IconBox>
                                    <Flex
                                        direction="column"
                                        m="14px"
                                        justify="center"
                                        textAlign="center"
                                        align="center"
                                        w="100%"
                                    >
                                        <Text fontSize="md" color={textColor} fontWeight="bold">
                                            Withdrawal Balance
                                        </Text>
                                        <Text
                                            mb="24px"
                                            fontSize="xs"
                                            color="gray.400"
                                            fontWeight="semibold"
                                        >
                                            Belong Interactive
                                        </Text>
                                        <Separator/>
                                    </Flex>
                                    <Text fontSize="lg" color={textColor} fontWeight="bold">
                                        {userTotalBalance.withdrawable_balance}
                                    </Text>
                                </Flex>
                            </CardBody>
                        </Card>
                        <Card
                            p="16px"
                            display="flex"
                            align="center"
                            justify="center"
                        >
                            <CardBody>
                                <Flex
                                    direction="column"
                                    align="center"
                                    justify="center"
                                    w="100%"
                                    py="14px"
                                >
                                    <IconBox as="box" h={"60px"} w={"60px"} bg={iconTeal}>
                                        <Icon h={"24px"} w={"24px"} color="white" as={FaCoins}/>
                                    </IconBox>
                                    <Flex
                                        direction="column"
                                        m="14px"
                                        justify="center"
                                        textAlign="center"
                                        align="center"
                                        w="100%"
                                    >
                                        <Text fontSize="md" color={textColor} fontWeight="bold">
                                            Balance
                                        </Text>
                                        <Text
                                            mb="24px"
                                            fontSize="xs"
                                            color="gray.400"
                                            fontWeight="semibold"
                                        >

                                        </Text>
                                        <Separator/>
                                    </Flex>
                                    <Button
                                        p="0px"
                                        bg="transparent"
                                        w="16px"
                                        h="16px"
                                        variant="no-hover"
                                        bgColor=""
                                    >
                                        <a href={`/helt/user/buy`} color="#799778">Add Balance
                                            <Icon paddingLeft="2" color="#799778" as={FaPlus}/>
                                        </a>
                                    </Button>
                                </Flex>
                            </CardBody>
                        </Card>
                    </Grid>

                </Box>
            </Grid>
            <div className="row">
                <div className="col">
                    <Card my="24px" ms={{lg: "24px"}}>
                        <CardHeader mb="12px">
                            <Flex direction="column" w="100%">
                                <Flex
                                    direction={{sm: "column", lg: "row"}}
                                    justify={{sm: "center", lg: "space-between"}}
                                    align={{sm: "center"}}
                                    w="100%"
                                    my={{md: "12px"}}
                                >
                                    <Text
                                        color={textColor}
                                        fontSize={{sm: "lg", md: "xl", lg: "lg"}}
                                        fontWeight="bold"
                                    >
                                        Your Transactions
                                    </Text>
                                </Flex>
                            </Flex>
                        </CardHeader>
                        <CardBody>
                            <Flex direction="column" w="100%">
                                <Transactions transactions={transactions}/>
                            </Flex>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </Flex>
    );
}

export default Billing;
