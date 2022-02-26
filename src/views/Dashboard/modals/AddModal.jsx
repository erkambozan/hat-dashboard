
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
import AdminStakeApi from 'api/adminstake';

//Notification
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

export default function AddModal(props) {

    const titleColor = useColorModeValue("teal.300", "teal.200");
    const textColor = useColorModeValue("gray.700", "white");
    const bgColor = useColorModeValue("white", "gray.700");
    const bgIcons = useColorModeValue("teal.200", "rgba(255, 255, 255, 0.5)");

    const [expiry_stake_time, setTime] = useState(0);
    const [stake_percentage, setPercent] = useState(0);
    const [stake_type, setStake] = useState("");
    const [min_limit, setMinLim] = useState(0);
    const [max_limit, setMaxLim] = useState(0);


    const [buttonText, setButtonText] = useState("Create Stake Type");
    const [error, setError] = useState(undefined);

    const CreateStakeType = () => {
        if (expiry_stake_time <= 0 || stake_percentage <= 0 || stake_type == "" || min_limit <= 0 || max_limit <= 0) {
            NotificationManager.error("Please fill in the blanks.");
        } else {

            AdminStakeApi.CreateStakeType({
                expiry_stake_time: expiry_stake_time,
                stake_percentage: stake_percentage,
                stake_type: stake_type,
                minimum_limit: min_limit,
                maximum_limit: max_limit
            })
                .then(res => {
                    props.onHide();
                    NotificationManager.success("Successfully created.");
                })
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
                                        Stake Type
                                    </FormLabel>
                                    <Input
                                        fontSize="sm"
                                        ms="4px"
                                        borderRadius="15px"
                                        type="text"
                                        placeholder="Stack name"
                                        mb="24px"
                                        size="lg"
                                        onChange={(event) => {
                                            setStake(event.target.value);
                                            setError(undefined);
                                        }}
                                    />
                                    <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                                        Stake Percentage %
                                    </FormLabel>
                                    <Input
                                        fontSize="sm"
                                        ms="4px"
                                        borderRadius="15px"
                                        type="number"
                                        placeholder="%"
                                        mb="24px"
                                        size="lg"
                                        onChange={(event) => {
                                            setPercent(event.target.value);
                                            setError(undefined);
                                        }}
                                    />
                                    <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                                        Minimum Limit
                                    </FormLabel>
                                    <Input
                                        fontSize="sm"
                                        ms="4px"
                                        borderRadius="15px"
                                        type="number"
                                        placeholder="Set min limit"
                                        mb="24px"
                                        size="lg"
                                        onChange={(event) => {
                                            setMinLim(event.target.value);
                                            setError(undefined);
                                        }}
                                    />
                                    <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                                        Maximum Limit
                                    </FormLabel>
                                    <Input
                                        fontSize="sm"
                                        ms="4px"
                                        borderRadius="15px"
                                        type="number"
                                        placeholder="Set max limit"
                                        mb="24px"
                                        size="lg"
                                        onChange={(event) => {
                                            setMaxLim(event.target.value);
                                            setError(undefined);
                                        }}
                                    />
                                    <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                                        Expiry Stake Time
                                    </FormLabel>
                                    <Input
                                        fontSize="sm"
                                        ms="4px"
                                        borderRadius="15px"
                                        type="number"
                                        placeholder="monthly based"
                                        mb="24px"
                                        size="lg"
                                        onChange={(event) => {
                                            setTime(event.target.value);
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
                                            CreateStakeType();
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
