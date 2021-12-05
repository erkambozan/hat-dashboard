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

function TablesTableRowAdminStake(props) {
    const {userId, email, startedStakeAmount, expiryStakeAmount, expiryStakeTime, stakePercentage, startDate, endDate, status} = props;
    const textColor = useColorModeValue("gray.700", "white");
    const bgStatus = useColorModeValue("gray.400", "#1a202c");
    const colorStatus = useColorModeValue("white", "gray.400");

    return (
        <Tr>
            {/*<Td minWidth={{sm: "250px"}} pl="0px">*/}
            {/*    <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">*/}
            {/*        <Avatar src={logo} w="50px" borderRadius="12px" me="18px"/>*/}
            {/*        <Flex direction="column">*/}
            {/*            <Text*/}
            {/*                fontSize="md"*/}
            {/*                color={textColor}*/}
            {/*                fontWeight="bold"*/}
            {/*                minWidth="100%"*/}
            {/*            >*/}
            {/*                {name}*/}
            {/*            </Text>*/}
            {/*            <Text fontSize="sm" color="gray.400" fontWeight="normal">*/}
            {/*                {email}*/}
            {/*            </Text>*/}
            {/*        </Flex>*/}
            {/*    </Flex>*/}
            {/*</Td>*/}
            <Td>
                <Flex direction="column">
                    <Text fontSize="md" color={textColor} fontWeight="bold">
                        {userId}
                    </Text>
                </Flex>
            </Td>
            <Td>
                <Flex direction="column">
                    <Text fontSize="md" color={textColor} fontWeight="bold">
                        {email}
                    </Text>
                </Flex>
            </Td>
            <Td>
                <Flex direction="column">
                    <Text fontSize="md" color={textColor} fontWeight="bold">
                        {startedStakeAmount}
                    </Text>
                </Flex>
            </Td>
            <Td>
                <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
                    {expiryStakeAmount}
                </Text>
            </Td>
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
                    {startDate}
                </Text>
            </Td>
            <Td>
                <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
                    {endDate}
                </Text>
            </Td>
            <Td>
                <Button p="0px" bg="transparent" variant="no-hover">
                    <Text
                        fontSize="md"
                        color="gray.400"
                        fontWeight="bold"
                        cursor="pointer"
                    >
                        Edit
                    </Text>
                </Button>
            </Td>
            <Td>
                <Badge
                    bg={status === "ACTIVE" ? "green.400" : bgStatus}
                    color={status === "ACTIVE" ? "white" : colorStatus}
                    fontSize="16px"
                    p="3px 10px"
                    borderRadius="8px"
                >
                    {status}
                </Badge>
            </Td>
        </Tr>
    );
}

export default TablesTableRowAdminStake;
