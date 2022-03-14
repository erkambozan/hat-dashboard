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
import AdminStakeApi from 'api/adminstake';

//Notification
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import UserApi from "../../../api/user";
import EmailApi from "../../../api/email";
import AuthApi from "../../../api/auth";

export default function VerificationLoginModal(props) {
    const bgColor = useColorModeValue("white", "gray.700");

    const [email, setEmail] = useState("")
    const [verificationCode, setVerificationCode] = useState(0);


    const [buttonText, setButtonText] = useState("Verify");
    const [error, setError] = useState(undefined);

    const Verify = () => {
        if (verificationCode.length < 6) {
            NotificationManager.error("Wrong Verification Code");
        }

        EmailApi.VerifyCodeNotLogged({
            email: props.email,
            verification_code: verificationCode
        })
            .then(() => {
                NotificationManager.success("Successfully");
                props.onHide();
            }).catch(() => {
            NotificationManager.error("Verification Code problem !")
        })
    }

    const SendCode = () => {
        EmailApi.SendCodeNotLogged({
            email: email,
            verification_code: ''
        }).then(() => {
            NotificationManager.success("Verification Code sent to email ...");
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
                                        Email
                                    </FormLabel>
                                    <Input
                                        fontSize="sm"
                                        ms="4px"
                                        borderRadius="15px"
                                        type="text"
                                        placeholder="Email"
                                        mb="24px"
                                        size="lg"
                                        onChange={(event) => {
                                            setEmail(event.target.value);
                                        }}
                                    />
                                    <Button onClick={SendCode}> Send Code </Button>
                                    <FormLabel mt="5%" ms="4px" fontSize="sm" fontWeight="normal">
                                        Verification Code
                                    </FormLabel>
                                    <Input
                                        fontSize="sm"
                                        ms="4px"
                                        borderRadius="15px"
                                        type="number"
                                        placeholder="Verification Code"
                                        mb="24px"
                                        size="lg"
                                        onChange={(event) => {
                                            setVerificationCode(event.target.value);
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
                                            Verify();
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
