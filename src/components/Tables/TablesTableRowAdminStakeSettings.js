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
import EditModal from "views/Dashboard/modals/EditModal";
import { useState } from "react";
function TablesTableRowAdminStakeSettings(props) {
    const {id,expiryStakeTime, stakePercentage, stakeType, minimumLimit} = props;
    const textColor = useColorModeValue("gray.700", "white");
    const bgStatus = useColorModeValue("gray.400", "#1a202c");
    const colorStatus = useColorModeValue("white", "gray.400");
    const [modalShow, setModalShow] = useState(false);

    return (
        <Tr>
           
            <Td>
                <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
                    {expiryStakeTime}
                </Text>
            </Td>
            <Td>
                <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
                    {stakePercentage}
                </Text>
            </Td>
            <Td>
                <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
                    {stakeType}
                </Text>
            </Td>
            <Td>
                <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
                    {minimumLimit}
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
                <EditModal expiryStakeTime={expiryStakeTime}
                    stakePercentage={stakePercentage}
                    stakeType={stakeType}
                    minimumLimit={minimumLimit}
                    id={id}
                    show={modalShow} onHide={() => setModalShow(false)}/>
            </Td>
        </Tr>
    );
}

export default TablesTableRowAdminStakeSettings;
