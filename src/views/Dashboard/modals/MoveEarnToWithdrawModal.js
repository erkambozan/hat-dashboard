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
import {NotificationContainer} from 'react-notifications';
import {Text} from "@chakra-ui/layout";

export default function MoveEarnToWithdrawModal(props) {

    const iconTeal = useColorModeValue("teal.300", "teal.300");

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
                        direction="inherit"
                        alignSelf="center"
                        justifySelf="center"
                        overflow="hidden"
                    >
                        <Flex>
                            <Text color="red"> Warning! </Text>
                        </Flex>
                        <Text> If you move your Earn Balance to Withdraw balance you cannot transfer this money to back</Text>
                        <Button bgColor="red" onClick={props.onHide}>No</Button>
                        <Button marginLeft="2%" bgColor={iconTeal} onClick={props.yesButton}>Yes</Button>
                    </Flex>
                </Modal.Body>
            </Modal>
            <NotificationContainer/>
        </>
    )
}
