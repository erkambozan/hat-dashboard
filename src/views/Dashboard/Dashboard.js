// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Portal,
  Progress,
  SimpleGrid,
  Spacer,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
// assets
import peopleImage from "assets/img/people-image.png";
import logoChakra from "assets/svg/live-hat.svg";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import TotalBalance from "./Components/TotalBalance.js"
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  RocketIcon,
  StatsIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import DashboardTableRow from "components/Tables/DashboardTableRow";
import TimelineRow from "components/Tables/TimelineRow";
import React, {useEffect, useState} from "react";
// react icons
import { BsArrowRight } from "react-icons/bs";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { dashboardTableData, timelineData } from "variables/general";
import UserApi from "../../api/user";
import Config from "../../config";

export default function Dashboard() {
  const [user, setUser] = useState({});
  useEffect(() => {
    UserApi.GetUserDetails().then(res => {
      setUser(res.data)
    }).catch(err => console.log("err:", err))
  }, []);
  // Chakra Color Mode
  const textColor = useColorModeValue("gray.700", "white");
  const overlayRef = React.useRef();


  function copyToClipboard(){
    const link = `http://${Config.dashboardPath}/helt/auth/signup?reference=${user.reference_id}`;
    navigator.clipboard.writeText(link)
  }
  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing="24px">
        <TotalBalance/>
      </SimpleGrid>
      <Grid
        templateColumns={{ md: "1fr", lg: "1.8fr 1.2fr" }}
        templateRows={{ md: "1fr auto", lg: "1fr" }}
        my="26px"
        gap="24px"
      >
        <Card minHeight="290.5px" p="1.2rem">
          <CardBody w="100%">
            <Flex flexDirection={{ sm: "column", lg: "row" }} w="100%">
              <Flex
                flexDirection="column"
                h="100%"
                lineHeight="1.6"
                width={{ lg: "45%" }}
              >
                <Text
                  fontSize="lg"
                  color={textColor}
                  fontWeight="bold"
                  pb=".5rem"
                >
                  Health Aid Token Billing
                </Text>
                <Text fontSize="sm" color="gray.400" fontWeight="normal">
                  Payments, Account Balance Details
                </Text>
                <Spacer />
                <Flex align="center">
                  <Button
                    p="0px"
                    variant="no-hover"
                    bg="transparent"
                    my={{ sm: "1.5rem", lg: "0px" }}
                  >
                    <Text
                      fontSize="sm"
                      color={textColor}
                      fontWeight="bold"
                      cursor="pointer"
                      transition="all .5s ease"
                      my={{ sm: "1.5rem", lg: "0px" }}
                      _hover={{ me: "4px" }}
                    >
                      <a href="/helt/user/profile">Go To</a>
                    </Text>
                    <Icon
                      as={BsArrowRight}
                      w="20px"
                      h="20px"
                      fontSize="2xl"
                      transition="all .5s ease"
                      mx=".3rem"
                      cursor="pointer"
                      pt="4px"
                      _hover={{ transform: "translateX(20%)" }}
                    />
                  </Button>
                </Flex>
              </Flex>
              <Spacer />
              <Flex
                bg="teal.300"
                align="center"
                justify="center"
                borderRadius="15px"
                width={{ lg: "40%" }}
                minHeight={{ sm: "250px" }}
              >
                <Image
                  src={logoChakra}
                  alt="image"
                  minWidth={{ md: "300px", lg: "auto" }}
                />
              </Flex>
            </Flex>
          </CardBody>
        </Card>
        <Card maxHeight="290.5px" p="1rem">
          <CardBody
            p="0px"
            backgroundImage={peopleImage}
            bgPosition="center"
            bgRepeat="no-repeat"
            w="100%"
            h={{ sm: "200px", lg: "100%" }}
            bgSize="cover"
            position="relative"
            borderRadius="15px"
          >
            <Box
              bg="linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)"
              w="100%"
              position="absolute"
              h="inherit"
              borderRadius="inherit"
              ref={overlayRef}
            ></Box>
            <Portal containerRef={overlayRef}>
              <Flex
                flexDirection="column"
                color="white"
                p="1.5rem 1.2rem 0.3rem 1.2rem"
                lineHeight="1.6"
              >
                <Text fontSize="xl" fontWeight="bold" pb=".3rem">
                  Share and Win
                </Text>
                <Text fontSize="sm" fontWeight="normal" pb="1%" w={{ lg: "92%" }}>
                  Invite people with your referral code if you want to earn coins directly from every referral.
                  You will earn 10% deposit amount coins.
                </Text>
                <Button backgroundColor="#4fd1c5" color="black" onClick={copyToClipboard} >
                  Copy Invite Link
                </Button>
                <Spacer />
              </Flex>
            </Portal>
          </CardBody>
        </Card>

      </Grid>
      <div className="row">
        <div className="col">
          <Card minHeight="290.5px" p="1.2rem">
            <CardBody w="100%">
              <Flex
                flexDirection="column"
                h="100%"
                lineHeight="1.6"
                width={{ lg: "45%" }}
              >
                <Text
                  fontSize="lg"
                  color={textColor}
                  fontWeight="bold"
                  pb=".5rem"
                >
                  Health Aid Stake
                </Text>
                <Text fontSize="sm" color="gray.400" fontWeight="normal">
                  Stake your tokens
                </Text>
                <Spacer />
                <Flex align="center">
                  <Button
                    p="0px"
                    variant="no-hover"
                    bg="transparent"
                    my={{ sm: "1.5rem", lg: "0px" }}
                  >
                    <Text
                      fontSize="sm"
                      color={textColor}
                      fontWeight="bold"
                      cursor="pointer"
                      transition="all .5s ease"
                      my={{ sm: "1.5rem", lg: "0px" }}
                      _hover={{ me: "4px" }}
                    >
                      <a href="/helt/user/stake">Go To</a>
                    </Text>
                    <Icon
                      as={BsArrowRight}
                      w="20px"
                      h="20px"
                      fontSize="2xl"
                      transition="all .5s ease"
                      mx=".3rem"
                      cursor="pointer"
                      pt="4px"
                      _hover={{ transform: "translateX(20%)" }}
                    />
                  </Button>
                </Flex>
              </Flex>
              <Spacer />
              <Flex
                bg="teal.300"
                align="center"
                justify="center"
                borderRadius="15px"
                width={{ lg: "40%" }}
                minHeight={{ sm: "250px" }}
              >
                <Image
                  src={logoChakra}
                  alt="chakra image"
                  minWidth={{ md: "300px", lg: "auto" }}
                />
              </Flex>
            </CardBody>
          </Card>
        </div>
      </div>

    </Flex>
  );
}
