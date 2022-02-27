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
import React, {useState} from "react";
import EarnApi from 'api/earns';
import {NotificationManager} from "react-notifications";

export default function EditEarnModal(props) {

    const bgColor = useColorModeValue("white", "gray.700");

    const [withdraw_address, setWithdrawAddress] = useState("");
    const [withdraw_amount, setWithdrawAmount] = useState(0);
    const [coin_type, setCoinType] = useState("");
    const [coin_price, setCoinPrice] = useState(0);
    const [_status, setStatus] = useState("");

    const [buttonText, setButtonText] = useState("Update Stake Type");
    const [error, setError] = useState(undefined);
    const {id, withdrawAddress, withdrawAmount, coinType, coinPrice, status} = props;

    const updateEarnWithdraw = (id) => {
        EarnApi.UpdateEarnWithdraw(id, {
            withdraw_address: withdraw_address,
            withdraw_amount: withdraw_amount,
            coin_type: coin_type,
            coin_price: coin_price,
            status: _status,
        })
            .then(() => {
                props.onHide();
                NotificationManager.success("Earn Withdraw Updated");
            }).catch(() => {
            props.onHide();
                NotificationManager.error("Earn Withdraw doesn't delete only you can delete Pending status");
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
                            mx={{base: "100px"}}
                            bg={bgColor}
                            boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
                        >


                            <FormControl>
                                <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                                    Withdraw Address
                                </FormLabel>
                                <Input
                                    fontSize="sm"
                                    ms="4px"
                                    borderRadius="15px"
                                    type="text"
                                    placeholder="Withdraw Address"
                                    mb="24px"
                                    size="lg"
                                    defaultValue={withdrawAddress}
                                    onChange={(event) => {
                                        setWithdrawAddress(event.target.value);
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
                                    placeholder="Withdraw Amount"
                                    mb="24px"
                                    size="lg"
                                    defaultValue={withdrawAmount}
                                    onChange={(event) => {
                                        setWithdrawAmount(event.target.value);
                                        setError(undefined);
                                    }}
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
                                    defaultValue={coinType}
                                    onChange={(event) => {
                                        setCoinType(event.target.value);
                                        setError(undefined);
                                    }}
                                />
                                <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                                    Coin Price
                                </FormLabel>
                                <Input
                                    fontSize="sm"
                                    ms="4px"
                                    borderRadius="15px"
                                    type="number"
                                    placeholder="Coin Price"
                                    mb="24px"
                                    size="lg"
                                    defaultValue={coinPrice}
                                    onChange={(event) => {
                                        setCoinPrice(event.target.value);
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
                                    onClick={() => {
                                        updateEarnWithdraw(id)
                                    }}
                                    _hover={{
                                        bg: "teal.200",
                                    }}
                                    _active={{
                                        bg: "teal.400",
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
