
import { Modal } from 'react-bootstrap';
import {
    Box,
    Flex,
    FormControl,
    FormLabel,
    Button,
    Input,

    useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import UserApi from "../../../api/user";


//Notification
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

export default function EditModalUserWithdrawal(props) {

    const bgColor = useColorModeValue("white", "gray.700");

    const [wallet_address, setWalletAddress] = useState("");
    const [withdraw_amount, setWithdrawAmount] = useState(0);

    const [buttonText, setButtonText] = useState("Update Withdraw");
    const [error, setError] = useState(undefined);
    const { id, walletAddress, withdrawAmount } = props;

    const updateWithdraw = () => {
        if (wallet_address == "" || withdraw_amount == 0) {
            NotificationManager.warning("Please fill in all required fields.")
        }
        else {
            UserApi.UpdateWithdraw(props.id, {
                wallet_address: wallet_address,
                withdraw_amount: withdraw_amount,
            })
            NotificationManager.success("Successfully update withdraw.")
            props.onHide();
        }
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
                                mx={{ base: "100px" }}
                                bg={bgColor}
                                boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
                            >



                                <FormControl>
                                    <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                                        Wallet Address
                                    </FormLabel>
                                    <Input
                                        fontSize="sm"
                                        ms="4px"
                                        borderRadius="15px"
                                        type="text"
                                        placeholder="Wallet Adress"
                                        mb="24px"
                                        size="lg"
                                        onChange={(event) => {
                                            setWalletAddress(event.target.value);
                                            setError(undefined);
                                        }}
                                    />
                                    <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                                        Withdraw Amount
                                    </FormLabel>
                                    <Input
                                        fontSize="sm"
                                        ms="4px"
                                        borderRadius="15px"
                                        type="text"
                                        placeholder="Amount"
                                        mb="24px"
                                        size="lg"
                                        onChange={(event) => {
                                            setWithdrawAmount(event.target.value);
                                            setError(undefined);
                                        }}
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
                                            updateWithdraw();
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
            <NotificationContainer />
        </>
    )
}
