// Chakra imports
import {
    Box,
    Button,
    Flex,
    Grid,
    Icon,
    Image,
    Portal,
    Progress,
    SimpleGrid,
    Spacer,
    Stat,
    StatHelpText,
    StatLabel,
    StatNumber,
    Table,
    Tbody,
    Text,
    Th,
    Thead,
    Tr,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
// assets
import peopleImage from "assets/img/people-image.png";
import logoChakra from "assets/svg/live-hat.svg";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import IconBox from "components/Icons/IconBox";
import TotalBalance from "./Components/TotalBalance.js"
// Custom icons
import {
    CartIcon,
    DocumentIcon,
    GlobeIcon,
    RocketIcon,
    StatsIcon,
    WalletIcon,
} from "components/Icons/Icons.js";
import DashboardTableRow from "components/Tables/DashboardTableRow";
import TimelineRow from "components/Tables/TimelineRow";
import React, {useState} from "react";
// react icons
import {BsArrowRight} from "react-icons/bs";
import {IoCheckmarkDoneCircleSharp} from "react-icons/io5";
import {dashboardTableData, timelineData} from "variables/general";

export default function Buy() {
    const value = "$100.000";
    // Chakra Color Mode
    const {colorMode, toggleColorMode} = useColorMode();
    const iconTeal = useColorModeValue("teal.300", "teal.300");
    const iconBoxInside = useColorModeValue("white", "white");
    const textColor = useColorModeValue("gray.700", "white");
    const [series, setSeries] = useState([
        {
            type: "area",
            name: "Mobile apps",
            data: [190, 220, 205, 350, 370, 450, 400, 360, 210, 250, 292, 150],
        },
        {
            type: "area",
            name: "Websites",
            data: [400, 291, 121, 117, 25, 133, 121, 211, 147, 25, 201, 203],
        },
    ]);
    const overlayRef = React.useRef();

    return (
        <Flex flexDirection="column" pt={{base: "120px", md: "75px"}}>
            <Card minH="83px">
                <CardBody>
                    <Flex flexDirection="row" align="center" justify="center" w="100%">
                        <Stat me="auto">
                            <Flex>
                                <StatNumber fontSize="lg" color={textColor}>
                                    1.000.000 HELT
                                </StatNumber>
                            </Flex>
                        </Stat>
                        <Button as="box" h={"45px"} w={"45px"} bg={iconTeal} onClick={(e) => {
                            e.preventDefault();
                            window.location.href='https://commerce.coinbase.com/checkout/a06c0614-253f-4cab-a008-55ceaa4cc641';}}>
                            <WalletIcon h={"24px"} w={"24px"} color={iconBoxInside}/>
                        </Button>
                    </Flex>
                </CardBody>
            </Card>
            <Card minH="83px">
                <CardBody>
                    <Flex flexDirection="row" align="center" justify="center" w="100%">
                        <Stat me="auto">
                            <Flex>
                                <StatNumber fontSize="lg" color={textColor}>
                                    100.000 HELT
                                </StatNumber>
                            </Flex>
                        </Stat>
                        <Button as="box" h={"45px"} w={"45px"} bg={iconTeal} onClick={(e) => {
                            e.preventDefault();
                            window.location.href='https://commerce.coinbase.com/checkout/77369bb7-d738-4867-8099-22630be6a6dd';}}>
                            <WalletIcon h={"24px"} w={"24px"} color={iconBoxInside}/>
                        </Button>
                    </Flex>
                </CardBody>
            </Card>
            <Card minH="83px">
                <CardBody>
                    <Flex flexDirection="row" align="center" justify="center" w="100%">
                        <Stat me="auto">
                            <Flex>
                                <StatNumber fontSize="lg" color={textColor}>
                                    10.000 HELT
                                </StatNumber>
                            </Flex>
                        </Stat>
                        <Button as="box" h={"45px"} w={"45px"} bg={iconTeal} onClick={(e) => {
                            e.preventDefault();
                            window.location.href='https://commerce.coinbase.com/checkout/2ffbe029-31b7-495f-8cd4-5a39bc1a0ca0';}}>
                            <WalletIcon h={"24px"} w={"24px"} color={iconBoxInside}/>
                        </Button>
                    </Flex>
                </CardBody>
            </Card>
        </Flex>
    );
}
