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
            link: "https://commerce.coinbase.com/checkout/85be8ac1-52c7-4d52-9731-de6eb0651025"
        },
        {
            price: "100.000",
            link: "https://commerce.coinbase.com/checkout/7f951b1c-7b1a-4357-9fe0-ae27b7bf595a"
        },
        {
            price: "150.000",
            link: "https://commerce.coinbase.com/checkout/635caa73-5d41-4f95-ad05-d868dd308026"
        },
        {
            price: "200.000",
            link: "https://commerce.coinbase.com/checkout/2d4223f2-c7e0-4d2d-8c9d-fbb310874cd6"
        },
        {
            price: "250.000",
            link: "https://commerce.coinbase.com/checkout/585f79ee-9b1c-4ff7-b4ef-f113a60c3d35"
        },
        {
            price: "300.000",
            link: "https://commerce.coinbase.com/checkout/90f7dca2-7b8a-4c37-bdf4-551c6b4b45e3"
        },
        {
            price: "350.000",
            link: "https://commerce.coinbase.com/checkout/719da5b6-1977-40ce-a3ad-7f0b1683a6f8"
        },
        {
            price: "400.000",
            link: "https://commerce.coinbase.com/checkout/12f254f8-ed75-48cf-9c19-c59be2808536"
        },
        {
            price: "450.000",
            link: "https://commerce.coinbase.com/checkout/1ededdb6-39fb-4b47-a6ad-b4108528551b"
        },
        {
            price: "500.000",
            link: "https://commerce.coinbase.com/checkout/b5d5a559-7788-40d3-90fd-29d6bb1f27fd"
        },
        {
            price: "550.000",
            link: "https://commerce.coinbase.com/checkout/f0ddd1c0-3629-4ae5-a29d-56dda77d3dd9"
        },
        {
            price: "600.000",
            link: "https://commerce.coinbase.com/checkout/e0cdde93-fb10-4c52-83ae-47d63b485891"
        },
        {
            price: "650.000",
            link: "https://commerce.coinbase.com/checkout/77cd38d3-0abe-4a2a-8a5e-3c3df2c0c36b"
        },
        {
            price: "700.000",
            link: "https://commerce.coinbase.com/checkout/3f05f2bf-bf7c-4faf-8eaa-bab2c1d55b8b"
        },
        {
            price: "750.000",
            link: "https://commerce.coinbase.com/checkout/5a69280b-bc75-4d07-9049-b071409dd250"
        },
        {
            price: "800.000",
            link: "https://commerce.coinbase.com/checkout/489bcb08-5812-4f5d-ae51-e89041b23333"
        },
        {
            price: "850.000",
            link: "https://commerce.coinbase.com/checkout/1123e73b-000f-4b4e-a9f5-20f637c8cc0e"
        },
        {
            price: "900.000",
            link: "https://commerce.coinbase.com/checkout/73d0beaa-253f-446f-bd52-315943eb1589"
        },
        {
            price: "950.000",
            link: "https://commerce.coinbase.com/checkout/7c1cf80f-8807-49d4-9d25-76dea9100628"
        },
        {
            price: "1.000.000",
            link: "https://commerce.coinbase.com/checkout/a87930a7-90de-4e78-bcc4-dfaf3fa3c31f"
        },
        {
            price: "1.050.000",
            link: "https://commerce.coinbase.com/checkout/49409a94-9da5-4a08-a402-2502e59f8f82"
        },
        {
            price: "1.100.000",
            link: "https://commerce.coinbase.com/checkout/c85f619a-28dd-4e8d-8060-92355b7ad0eb"
        },
        {
            price: "1.150.000",
            link: "https://commerce.coinbase.com/checkout/a97b239c-87cf-461b-9bfe-f588d2ab2663"
        },
        {
            price: "1.200.000",
            link: "https://commerce.coinbase.com/checkout/8abac36c-4c83-4051-932f-954ff052bc18"
        },
        {
            price: "1.250.000",
            link: "https://commerce.coinbase.com/checkout/3e3a262a-0706-43e4-b8d3-1ed8e6735e6e"
        },
        {
            price: "1.300.000",
            link: "https://commerce.coinbase.com/checkout/68458ddb-c8c4-40ac-ae3a-466bbb31eeb6"
        },
        {
            price: "1.350.000",
            link: "https://commerce.coinbase.com/checkout/0a185fe9-44ca-4101-a8a7-ddbe0c486abb"
        },
        {
            price: "1.400.000",
            link: "https://commerce.coinbase.com/checkout/70e7da22-4cd1-476e-96a6-3f305ea51386"
        },
        {
            price: "1.450.000",
            link: "https://commerce.coinbase.com/checkout/94ff20be-9550-44c7-9765-0f6cd1adaeff"
        },
        {
            price: "1.500.000",
            link: "https://commerce.coinbase.com/checkout/2bde7390-2425-4389-95e8-bb12c0dc03aa"
        },
        {
            price: "1.550.000",
            link: "https://commerce.coinbase.com/checkout/29ca29d5-9f4a-4fc7-9fe2-1088afd8c683"
        },
        {
            price: "1.600.000",
            link: "https://commerce.coinbase.com/checkout/ba9f64b4-dc36-4cd5-a656-eb1d3e86fdbb"
        },
        {
            price: "1.650.000",
            link: "https://commerce.coinbase.com/checkout/a6e44e6e-4a3f-4f55-af34-b26b42577128"
        },
        {
            price: "1.700.000",
            link: "https://commerce.coinbase.com/checkout/597989b3-51e2-46b7-acf2-4eb73130044d"
        },
        {
            price: "1.750.000",
            link: "https://commerce.coinbase.com/checkout/357a52b4-20ef-42fd-8897-8adb10453b60"
        },
        {
            price: "1.800.000",
            link: "https://commerce.coinbase.com/checkout/014db53f-4ea9-4659-8d3c-d50d46064db1"
        },
        {
            price: "1.850.000",
            link: "https://commerce.coinbase.com/checkout/2b79ddf8-4c42-470e-b2a6-1c12c757e51f"
        },
        {
            price: "1.900.000",
            link: "https://commerce.coinbase.com/checkout/751e6d6f-d105-4845-b8fd-171499e3a40e"
        },
        {
            price: "1.950.000",
            link: "https://commerce.coinbase.com/checkout/36453dac-9ad3-4b30-b18c-1e716d326069"
        },
        {
            price: "2.000.000",
            link: "https://commerce.coinbase.com/checkout/4eb30627-5023-498c-bbe5-44a5124ea56d"
        },
        {
            price: "2.050.000",
            link: "https://commerce.coinbase.com/checkout/06290b54-ead2-40e5-8c18-91e28c1695b2"
        },
        {
            price: "2.100.000",
            link: "https://commerce.coinbase.com/checkout/67420bcf-2986-4eba-be15-d6d7584d6d0d"
        },
        {
            price: "2.150.000",
            link: "https://commerce.coinbase.com/checkout/f32717bc-9cba-4d2e-8f56-1348b25023f6"
        },
        {
            price: "2.200.000",
            link: "https://commerce.coinbase.com/checkout/65bcf22c-5d5e-4985-8073-6f26e2d27b29"
        },
        {
            price: "2.250.000",
            link: "https://commerce.coinbase.com/checkout/edec14aa-655a-4a41-bed1-dcd17f365082"
        },
        {
            price: "2.300.000",
            link: "https://commerce.coinbase.com/checkout/7dca00d1-39bd-4495-bf81-3b73e85821bd"
        },
        {
            price: "2.350.000",
            link: "https://commerce.coinbase.com/checkout/6332e87b-1e20-4422-8aee-2ee341cfe9a2"
        },
        {
            price: "2.400.000",
            link: "https://commerce.coinbase.com/checkout/06b0df5b-cde7-4ba8-9563-c73c5375990b"
        },
        {
            price: "2.450.000",
            link: "https://commerce.coinbase.com/checkout/9efb1055-8c9b-4a72-8cb0-1e1bdb185f7e"
        },
        {
            price: "2.500.000",
            link: "https://commerce.coinbase.com/checkout/f409a3af-e47d-47eb-b1f1-2eb361be34db"
        },
        {
            price: "2.550.000",
            link: "https://commerce.coinbase.com/checkout/76ea3f9a-6966-493b-8ca1-852faeb21ef2"
        },
        {
            price: "2.600.000",
            link: "https://commerce.coinbase.com/checkout/1918cf03-e667-4b3f-86ff-fc5fdd26701b"
        },
        {
            price: "2.650.000",
            link: "https://commerce.coinbase.com/checkout/171a8dcd-d0a9-4888-af88-efea803478cb"
        },
        {
            price: "2.700.000",
            link: "https://commerce.coinbase.com/checkout/a78ab786-2667-4109-b8fa-310779f9f457"
        },
        {
            price: "2.750.000",
            link: "https://commerce.coinbase.com/checkout/f3b8c500-42a2-4c09-86d4-368ea3f52286"
        },
        {
            price: "2.800.000",
            link: "https://commerce.coinbase.com/checkout/309544d9-6a65-41f2-8287-aee273ae7861"
        },
        {
            price: "2.850.000",
            link: "https://commerce.coinbase.com/checkout/edd8d856-768e-44ce-8e3b-fc3bb07a53ee"
        },
        {
            price: "2.900.000",
            link: "https://commerce.coinbase.com/checkout/9e80b2ff-c387-454a-8e38-e2b6e6ca37ef"
        },
        {
            price: "2.950.000",
            link: "https://commerce.coinbase.com/checkout/a0a74564-b8c0-4d06-ab93-0ffc8c626528"
        },
        {
            price: "3.000.000",
            link: "https://commerce.coinbase.com/checkout/2589887a-6555-4302-9717-9c88f8966284"
        },
        {
            price: "3.050.000",
            link: "https://commerce.coinbase.com/checkout/425e41cc-fc6e-4c81-b29e-1062318d10e1"
        },
        {
            price: "3.100.000",
            link: "https://commerce.coinbase.com/checkout/8899a15e-ad2c-47d9-b4f2-9554b475f59e"
        },
        {
            price: "3.150.000",
            link: "https://commerce.coinbase.com/checkout/d341fd6a-8987-4f07-ad01-277219af1331"
        },
        {
            price: "3.200.000",
            link: "https://commerce.coinbase.com/checkout/b37d7a35-2154-4f80-8ce3-c89ca5f242c8"
        },
        {
            price: "3.250.000",
            link: "https://commerce.coinbase.com/checkout/29cad96b-2a56-4baa-bb01-fad193299466"
        },
        {
            price: "3.300.000",
            link: "https://commerce.coinbase.com/checkout/48604c29-1ed1-425e-83e5-6035dfd0cda3"
        },
        {
            price: "3.350.000",
            link: "https://commerce.coinbase.com/checkout/074d5f68-640d-44e1-9b5d-fc90c5d30c89"
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
                    window.location.href = data[selectedIndex].link
                }}>
                    <Text fontSize="2xl">BUY</Text>
                </Button>
            </Card>
        </Flex>
    );
}
