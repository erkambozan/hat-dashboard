// Chakra imports
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    HStack,
    Icon,
    Input,
    Link,
    Switch,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
//Notification
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
// Assets
import BgSignUp from "assets/img/BgSignUp.png";
import React, {useState} from "react";

import AuthApi from "../../api/auth";
import {useHistory, useLocation} from "react-router-dom";
import VerificationModal from "../Dashboard/modals/VerificationModal";

function SignUp() {
    const history = useHistory();

    const bgColor = useColorModeValue("white", "gray.700");

    const [referenceId, setReferenceId] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [buttonText, setButtonText] = useState("Sign up");
    const [error, setError] = useState(undefined);
    const [message, setMessage] = useState("");
    const [verificationModalShow, setVerificationModalShow] = useState(false);


    const location = useLocation();
    React.useEffect(() => {
        const params = new URLSearchParams(location.search)
        setReferenceId(params.has('reference') ? params.get('reference') : "")
    }, [])

    const register = async (event) => {
        const emailRegex = new RegExp(/[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g);
        const passRegex = new RegExp("(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
        if (emailRegex.test(email)) {
            setMessage("Email is Valid");
            if (passRegex.test(password)) {
                NotificationManager.success("Your account has been successfully created");
                return handleSubmit();
            } else {
                NotificationManager.warning("Password is not valid. Password must contain at least one uppercase letter, one lowercase letter, one special character and number. Should not be less than 8");
            }
        } else if ((!emailRegex.test(email) && email !== "") && (!passRegex.test(email) && passRegex !== "")) {
            NotificationManager.warning("Email is not valid");
        } else {
            NotificationManager.warning("Email is not valid");
        }
        Validate();


    };

    const Validate = async () => {
        if (firstName === "") {
            return NotificationManager.warning("You must enter your first name.");
        }
        if (lastName === "") {
            return NotificationManager.warning("You must enter a last name.");
        }
        if (password === "") {
            return NotificationManager.warning("You must enter a password.");
        }
        if (email === "") {
            return NotificationManager.warning("You must enter a email.");
        }

        setVerificationModalShow(true)
    }

    const handleSubmit = async () => {
        setButtonText("Signing up");
        AuthApi.Register({
            reference_id: referenceId,
            email: email,
            first_name: firstName,
            last_name: lastName,
            password,
        }).then(response => {
            if (response.data && response.data.success === false) {
                setButtonText("Sign up");
                return setError(response.data.msg);
            }
            return history.push("/auth/signin");
        }).catch(err => {
            console.log(err);
            setButtonText("Sign up");
            if (err.response) {
                return setError(err.response.data.msg);
            }
            return setError("There has been an error.");
        })
    }

    return (
        <Flex
            direction="column"
            alignSelf="center"
            justifySelf="center"
            overflow="hidden"
        >
            <Box
                position="absolute"
                minH={{base: "70vh", md: "50vh"}}
                w={{md: "calc(100vw - 50px)"}}
                borderRadius={{md: "15px"}}
                left="0"
                right="0"
                bgRepeat="no-repeat"
                overflow="hidden"
                zIndex="-1"
                top="0"
                bgImage={BgSignUp}
                bgSize="cover"
                mx={{md: "auto"}}
                mt={{md: "14px"}}
            ></Box>
            <Flex
                direction="column"
                textAlign="center"
                justifyContent="center"
                align="center"
                mt="6.5rem"
                mb="30px"
            >
                <Text fontSize="4xl" color="white" fontWeight="bold">
                    Welcome!
                </Text>
                <Text
                    fontSize="md"
                    color="white"
                    fontWeight="normal"
                    mt="10px"
                    mb="26px"
                    w={{base: "90%", sm: "60%", lg: "40%", xl: "30%"}}
                >
                    Sign Up to Helt Coin
                </Text>
            </Flex>
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
                            Reference ID
                        </FormLabel>
                        <Input
                            borderRadius="15px"
                            mb="24px"
                            fontSize="sm"
                            type="text"
                            placeholder="Reference ID"
                            size="lg"
                            defaultValue={referenceId}
                            onChange={(event) => {
                                setReferenceId(event.target.value);
                                setError(undefined);
                            }}
                        />
                        <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                            First Name
                        </FormLabel>
                        <Input
                            borderRadius="15px"
                            mb="24px"
                            fontSize="sm"
                            type="text"
                            placeholder="First Name"
                            size="lg"
                            defaultValue={firstName}
                            onChange={(event) => {
                                setFirstName(event.target.value);
                                setError(undefined);
                            }}
                        />

                        <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                            Last Name
                        </FormLabel>
                        <Input
                            borderRadius="15px"
                            mb="24px"
                            fontSize="sm"
                            type="text"
                            placeholder="Last Name"
                            size="lg"
                            defaultValue={lastName}
                            onChange={(event) => {
                                setLastName(event.target.value);
                                setError(undefined);
                            }}
                        />
                        <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                            Email
                        </FormLabel>
                        <Input
                            fontSize="sm"
                            ms="4px"
                            borderRadius="15px"
                            type="email"
                            placeholder="Your email address"
                            mb="24px"
                            size="lg"
                            onChange={(event) => {
                                setEmail(event.target.value);
                                setError(undefined);
                            }}
                        />
                        <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                            Password
                        </FormLabel>
                        <Input
                            fontSize="sm"
                            ms="4px"
                            borderRadius="15px"
                            type="password"
                            placeholder="Your password"
                            mb="24px"
                            size="lg"
                            onChange={(event) => {
                                setPassword(event.target.value);
                                setError(undefined);
                            }}
                        />
                        <h1 style={{fontSize: "xs"}}>
                            Password must contain at least one uppercase letter, one lowercase letter, one special
                            character and number. Should not be less than 8
                        </h1>
                        <FormControl display="flex" alignItems="center" mt="24px" mb="24px">
                            <Switch id="remember-login" colorScheme="teal" me="10px"/>
                            <FormLabel htmlFor="remember-login" mb="0" fontWeight="normal">
                                Remember me
                            </FormLabel>
                        </FormControl>
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
                            fontSize="10px"
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
                            onClick={register}
                        >
                            {buttonText}
                        </Button>
                        <NotificationContainer/>
                        <VerificationRegisterModal email={email} verifyFunction={handleSubmit} show={verificationModalShow} onHide={() => setVerificationModalShow(false)}/>
                    </FormControl>
                    <Flex
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        maxW="100%"
                        mt="0px"
                    >
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default SignUp;
