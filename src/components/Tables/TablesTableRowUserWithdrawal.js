import {
    Avatar,
    Badge,
    Button,
    Flex,
    Td,
    Text,
    Tr,
    useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import EditModalUserWithdrawal from "views/Dashboard/modals/EditModalUserWithdrawal";
import { useState } from "react";
function TablesTableRowUserWithdrawal(props) {
    const {id,walletAddress, withdrawAmount, status} = props;
    const textColor = useColorModeValue("gray.700", "white");
    const bgStatus = useColorModeValue("gray.400", "#1a202c");
    const colorStatus = useColorModeValue("white", "gray.400");
    const [modalShow, setModalShow] = useState(false);

    return (
        <Tr>

            <Td>
                <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
                    {walletAddress}
                </Text>
            </Td>
            <Td>
                <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
                    {withdrawAmount}
                </Text>
            </Td>
            <Td>
                <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
                    {status}
                </Text>
            </Td>
            <Td>
                <Button onClick={() => setModalShow(true)} p="0px" bg="transparent" variant="no-hover">
                    <Text
                        fontSize="md"
                        color="gray.400"
                        fontWeight="bold"
                        cursor="pointer"
                    >
                        Edit
                    </Text>
                </Button>
                <EditModalUserWithdrawal id={id}
                           walletAddress={walletAddress}
                           withdrawAmount={withdrawAmount}
                           status={status}
                           show={modalShow} onHide={() => setModalShow(false)}/>
            </Td>
        </Tr>
    );
}

export default TablesTableRowUserWithdrawal;
