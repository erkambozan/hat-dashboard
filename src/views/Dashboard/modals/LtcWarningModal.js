import {Modal} from 'react-bootstrap';
import {
    Flex,
    Button,
    Text, useColorModeValue,
} from "@chakra-ui/react";
import React, {useState} from "react";

//Notification
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';
import AddEarnWithdrawModal from "./AddEarnWithdrawModal";

export default function LtcWarningModal(props) {
    const iconTeal = useColorModeValue("teal.300", "teal.300");

    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Body>
                    <Flex>
                        <Text textColor="red">Warning !</Text>
                        <Text><br/>Only you can withdraw your usd to your LTC wallet you have to use LTC wallet address.</Text>
                    </Flex>
                </Modal.Body>
                <Modal.Footer>
                    <Button bg={iconTeal} onClick={()=> {setModalShow(true)}}>OK</Button>
                    <Button onClick={props.onHide}>Close</Button>
                    <AddEarnWithdrawModal onHideLtc={props.onHide} earnAmount={props.earnAmount} show={modalShow}
                                          onHide={() => setModalShow(false)}/>
                </Modal.Footer>
            </Modal>
            <NotificationContainer/>
        </>
    )
}
