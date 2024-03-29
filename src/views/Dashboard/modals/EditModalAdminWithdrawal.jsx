
import {Modal } from 'react-bootstrap';
import {
    Flex,
    FormControl,
    FormLabel,
    Button,
    Input,
    useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import UserApi from "../../../api/user";
import {NotificationManager} from "react-notifications";
import AdminStakeApi from "../../../api/adminstake";

export default function EditModalAdminWithdrawal(props) {


    const titleColor = useColorModeValue("teal.300", "teal.200");
    const textColor = useColorModeValue("gray.700", "white");
    const bgColor = useColorModeValue("white", "gray.700");
    const bgIcons = useColorModeValue("teal.200", "rgba(255, 255, 255, 0.5)");

    const [wallet_address, setWalletAddress] = useState("");
    const [withdraw_amount, setWithdrawAmount] = useState(0);
    const [status_withdraw, setStatus] = useState("");

    const [buttonText, setButtonText] = useState("Update Withdraw");
    const [error, setError] = useState(undefined);
    const {id,walletAddress, withdrawAmount, status} = props;

    const updateWithdraw = ()=>{
        AdminStakeApi.UpdateWithdraw(id, {
            wallet_address: walletAddress,
            withdraw_amount: withdrawAmount,
            status: status_withdraw
        }).then(() => {
            NotificationManager.success("Withdraw updated")
            props.onHide()
        }).catch(() => {
            NotificationManager.error("Withdraw didn't update")
            props.onHide()
        })
    }

    return (
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
                                    defaultValue={walletAddress}
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
                                    defaultValue={withdrawAmount}
                                    onChange={(event) => {
                                        setWithdrawAmount(event.target.value);
                                        setError(undefined);
                                    }}
                                />
                                <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                                    Status
                                </FormLabel>
                                <Input
                                    fontSize="sm"
                                    ms="4px"
                                    borderRadius="15px"
                                    type="text"
                                    placeholder="Status"
                                    mb="24px"
                                    size="lg"
                                    defaultValue={status}
                                    onChange={(event) => {
                                        setStatus(event.target.value);
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
                                    onClick={()=>{
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
    )
}
