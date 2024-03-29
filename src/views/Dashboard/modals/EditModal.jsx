
import {Modal } from 'react-bootstrap';
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
import {NotificationManager} from "react-notifications";

export default function EditModal(props) {

    const bgColor = useColorModeValue("white", "gray.700");

    const [expiry_stake_time, setTime] = useState(0);
    const [stake_percentage, setPercent] = useState(0);
    const [stake_type, setStake] = useState("");
    const [min_limit, setMinLim] = useState(0);
    const [max_limit, setMaxLim] = useState(0);

    const [buttonText, setButtonText] = useState("Update Stake Type");
    const [error, setError] = useState(undefined);
    const {id,expiryStakeTime, stakePercentage, stakeType, minimumLimit, maximumLimit} = props;
    
    const updateStakeType = (_id)=>{
        AdminStakeApi.UpdateStakeType(_id,{
            expiry_stake_time: expiry_stake_time,
            stake_percentage: stake_percentage,
            stake_type: stake_type,
            minimum_limit: min_limit,
            maximum_limit: max_limit,
        })
            .then(() => {
                props.onHide();
                NotificationManager.success("Stake Withdraw Updated");
            }).catch(() => {
            props.onHide();
            NotificationManager.error("Stake Withdraw didn't update");
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
                                    defaultValue={stakeType}
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
                                    type="text"
                                    placeholder="%"
                                    mb="24px"
                                    size="lg"
                                    defaultValue={stakePercentage}
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
                                    defaultValue={minimumLimit}
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
                                    defaultValue={maximumLimit}
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
                                    defaultValue={expiryStakeTime}
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
                                    onClick={()=>{
                    updateStakeType(id)
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
