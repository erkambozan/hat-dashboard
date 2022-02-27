// Chakra imports
import {
    Button,
    Flex,
    Stat,
    StatNumber,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
// assets
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
// Custom icons
import React, {useState} from "react";
// react icons
import {MinusCircleIcon, PlusIcon} from "@heroicons/react/solid";

export default function Buy() {
    // Chakra Color Mode
    const iconTeal = useColorModeValue("teal.300", "teal.300");
    const iconBoxInside = useColorModeValue("white", "white");
    const textColor = useColorModeValue("gray.700", "white");

    const data = [
        {
            price: "50.000",
            link: "https://commerce.coinbase.com/checkout/a06c0614-253f-4cab-a008-55ceaa4cc641"
        },
        {
            price: "100.000",
            link: "https://commerce.coinbase.com/checkout/a06c0614-253f-4cab-a008-55ceaa4cc641"
        },
        {
            price: "150.000",
            link: "https://commerce.coinbase.com/checkout/a06c0614-253f-4cab-a008-55ceaa4cc641"
        },
        {
            price: "200.000",
            link: "https://commerce.coinbase.com/checkout/a06c0614-253f-4cab-a008-55ceaa4cc641"
        },
        {
            price: "250.000",
            link: "https://commerce.coinbase.com/checkout/a06c0614-253f-4cab-a008-55ceaa4cc641"
        }
    ]
    const [selectedIndex, setSelectedIndex] = useState(0)

    function getPrice() {
        return data[selectedIndex].price
    }

    function increase(){
        console.log(selectedIndex)
        if(selectedIndex < data.length - 1) {
            setSelectedIndex(prevState => prevState + 1)
        }

        return selectedIndex
    }
    function decrease(){
        if(selectedIndex > 0) {
            setSelectedIndex(prevState => prevState - 1)
        }

        return selectedIndex
    }

    return (
        <Flex flexDirection="column" pt={{base: "120px", md: "100px"}} marginLeft="25%" marginRight="25%">
            <Card minHeight="300px" justifyContent="center">
                <CardBody>
                    <Button as="box" h={"90px"} w={"90px"} bg={iconTeal} onClick={() => decrease()}>
                        <MinusCircleIcon h={"24px"} w={"24px"} color={iconBoxInside}/>
                    </Button>
                    <Flex flexDirection="row" alignItems="center" justifyContent="center" w="100%">
                        <Stat me="auto">
                            <Flex flexDirection="row" alignItems="center" justifyContent="center" w="100%">
                                <StatNumber fontSize="4xl" color={textColor}>
                                    {getPrice()} HELT
                                </StatNumber>
                            </Flex>
                        </Stat>
                    </Flex>
                    <Button as="box" h={"90px"} w={"90px"} bg={iconTeal} onClick={() => increase()}>
                        <PlusIcon h={"24px"} w={"24px"} color={iconBoxInside}/>
                    </Button>
                </CardBody>
            </Card>
            <Card>
                <Button h="60px" bg={iconTeal} onClick={() => {
                    window.location.href = data[0].link
                }}>
                    <Text fontSize="2xl">BUY</Text>
                </Button>
            </Card>
        </Flex>
    );
}
