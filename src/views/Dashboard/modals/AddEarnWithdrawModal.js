import {Modal} from 'react-bootstrap';
import {
    Box,
    Flex,
    FormControl,
    FormLabel,
    Button,
    Input,

    useColorModeValue,
} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import EarnApi from 'api/earns';

//Notification
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

export default function AddModal(props) {

    const titleColor = useColorModeValue("teal.300", "teal.200");
    const textColor = useColorModeValue("gray.700", "white");
    const bgColor = useColorModeValue("white", "gray.700");
    const bgIcons = useColorModeValue("teal.200", "rgba(255, 255, 255, 0.5)");

    const [withdraw_address, setWithdrawAddress] = useState("");
    const [withdraw_amount, setWithdrawAmount] = useState(0);
    const [coin_type, setCoinType] = useState("LTC");
    const [coin_price, setCoinPrice] = useState(1);


    const [buttonText, setButtonText] = useState("Create Earn Withdraw");
    const [error, setError] = useState(undefined);

    const CreateEarnWithdrawType = () => {
        if (withdraw_address === "") {
            NotificationManager.error("Please fill in the blanks.");
        }else if(props.earnAmount  <= 50){
            NotificationManager.error("Withdraw amount should be bigger than 50 USD.");
        }

        EarnApi.CreateEarnWithdraw({
            withdraw_address: withdraw_address,
            withdraw_amount: props.earnAmount,
            coin_type: coin_type,
            coin_price: coin_price,
        })
            .then(res => {
                props.onHide();
                NotificationManager.success("Successfully created.");
            })
    }
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Body>
                    <Flex
                        direction="column"
                        alignSelf="center"
                        justifySelf="center"
                        overflow="hidden"
                    >


                        <Flex alignItems="center" justifyContent="center" mb="60px" mt="20px">
                            <Flex
                                direction="column"
                                w="445px"
                                background="transparent"
                                borderRadius="15px"
                                p="40px"
                                mx={{base: "100px"}}
                                bg={bgColor}
                                boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
                            >


                                <FormControl>
                                    <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                                        Withdraw Address LTC
                                    </FormLabel>
                                    <Input
                                        fontSize="sm"
                                        ms="4px"
                                        borderRadius="15px"
                                        type="text"
                                        placeholder="Withdraw address LTC"
                                        mb="24px"
                                        size="lg"
                                        onChange={(event) => {
                                            setWithdrawAddress(event.target.value);
                                            setError(undefined);
                                        }}
                                    />
                                    <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                                        Withdraw Amount USD
                                    </FormLabel>
                                    <Input
                                        fontSize="sm"
                                        ms="4px"
                                        borderRadius="15px"
                                        type="number"
                                        placeholder="Withdraw Amount"
                                        mb="24px"
                                        size="lg"
                                        value={props.earnAmount}
                                    />
                                    <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                                        Coin Type
                                    </FormLabel>
                                    <Input
                                        fontSize="sm"
                                        ms="4px"
                                        borderRadius="15px"
                                        type="text"
                                        placeholder="Coin Type"
                                        mb="24px"
                                        size="lg"
                                        value={coin_type}
                                    />


                                    <h4
                                        style={{
                                            fontSize: ".9em",
                                            color: "red",
                                            textAlign: "center",
                                            fontWeight: 400,
                                            transition: ".2s all",
                                            marginBottom: '1em'
                                        }}
                                    >
                                        {error}
                                    </h4>
                                    <Button
                                        type="submit"
                                        bg="teal.300"
                                        fontSize="15px"
                                        color="white"
                                        fontWeight="bold"
                                        w="100%"
                                        h="45"
                                        mb="24px"
                                        _hover={{
                                            bg: "teal.200",
                                        }}
                                        _active={{
                                            bg: "teal.400",
                                        }}
                                        onClick={() => {
                                            CreateEarnWithdrawType();
                                        }}

                                    >
                                        {buttonText}
                                    </Button>
                                </FormControl>

                            </Flex>
                        </Flex>
                    </Flex>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
            <NotificationContainer/>
        </>
    )
}
