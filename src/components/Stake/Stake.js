// Chakra imports
import {
    Flex,
    SimpleGrid,
    Spacer,
    Stat,
    StatHelpText,
    StatLabel,
    StatNumber,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
import { Row, Col, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactWOW from 'react-wow';
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import IconBox from "components/Icons/IconBox";
// Custom icons
import {
    CartIcon,
    DocumentIcon,
    GlobeIcon,
    WalletIcon,
} from "components/Icons/Icons.js";
import React, { useState } from "react";
import './css/style.css';




export default function Dashboard(props) {
    const value = "$100.000";
    // Chakra Color Mode
    const { colorMode, toggleColorMode } = useColorMode();
    const iconTeal = useColorModeValue("teal.300", "teal.300");
    const iconBoxInside = useColorModeValue("white", "white");
    const textColor = useColorModeValue("gray.700", "white");
    const [series, setSeries] = useState([
        {
            type: "area",
            name: "Mobile apps",
            data: [190, 220, 205, 350, 370, 450, 400, 360, 210, 250, 292, 150],
        },
        {
            type: "area",
            name: "Websites",
            data: [400, 291, 121, 117, 25, 133, 121, 211, 147, 25, 201, 203],
        },
    ]);

    const overlayRef = React.useRef();
    
    //
    let contents = (
        <Row>
         
          <Col lg={10} md={9} sm={12} >
            
            <Col lg={6} md={6} sm={6}>
              <div className="tokens mr-r50">
                <div className="token-name">ICO</div>
                <div className="token-body">
                  <p>Target – to Raise USD 20,000,000</p>
                  <button className="right-btn">Price 1 BIT - $1.00</button>
                  <div className="prices">
                    <h3 className="f-20">Bonus for ICO :</h3>
                    <table>
                      <thead>
                        <tr>
                          <th>Time</th>
                          <th>bonus</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1day</td>
                          <td>35%</td>
                        </tr>
                        <tr>
                          <td>2 - 4 Days </td>
                          <td>20%</td>
                        </tr>
                        <tr>
                          <td>5 - 13 Days</td>
                          <td>10%</td>
                        </tr>
                        <tr>
                          <td>14 - 31 Day</td>
                          <td>0%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Col>
          </Col>
        </Row>
      )
      
    //

    return (<>
        <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
            <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing="24px">
                <Card minH="83px">
                    <CardBody>
                        <Flex flexDirection="row" align="center" justify="center" w="100%">
                            <Stat me="auto">
                                <StatLabel
                                    fontSize="sm"
                                    color="gray.400"
                                    fontWeight="bold"
                                    pb=".1rem"
                                >
                                    Today's Money
                                </StatLabel>
                                <Flex>
                                    <StatNumber fontSize="lg" color={textColor}>
                                        $53,000
                                    </StatNumber>
                                    <StatHelpText
                                        alignSelf="flex-end"
                                        justifySelf="flex-end"
                                        m="0px"
                                        color="green.400"
                                        fontWeight="bold"
                                        ps="3px"
                                        fontSize="md"
                                    >
                                        +55%
                                    </StatHelpText>
                                </Flex>
                            </Stat>
                            <IconBox as="box" h={"45px"} w={"45px"} bg={iconTeal}>
                                <WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />
                            </IconBox>
                        </Flex>
                    </CardBody>
                </Card>
                <Card minH="83px">
                    <CardBody>
                        <Flex flexDirection="row" align="center" justify="center" w="100%">
                            <Stat me="auto">
                                <StatLabel
                                    fontSize="sm"
                                    color="gray.400"
                                    fontWeight="bold"
                                    pb=".1rem"
                                >
                                    Today's Users
                                </StatLabel>
                                <Flex>
                                    <StatNumber fontSize="lg" color={textColor}>
                                        2,300
                                    </StatNumber>
                                    <StatHelpText
                                        alignSelf="flex-end"
                                        justifySelf="flex-end"
                                        m="0px"
                                        color="green.400"
                                        fontWeight="bold"
                                        ps="3px"
                                        fontSize="md"
                                    >
                                        +5%
                                    </StatHelpText>
                                </Flex>
                            </Stat>
                            <IconBox as="box" h={"45px"} w={"45px"} bg={iconTeal}>
                                <GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />
                            </IconBox>
                        </Flex>
                    </CardBody>
                </Card>
                <Card minH="83px">
                    <CardBody>
                        <Flex flexDirection="row" align="center" justify="center" w="100%">
                            <Stat>
                                <StatLabel
                                    fontSize="sm"
                                    color="gray.400"
                                    fontWeight="bold"
                                    pb=".1rem"
                                >
                                    New Clients
                                </StatLabel>
                                <Flex>
                                    <StatNumber fontSize="lg" color={textColor}>
                                        +3,020
                                    </StatNumber>
                                    <StatHelpText
                                        alignSelf="flex-end"
                                        justifySelf="flex-end"
                                        m="0px"
                                        color="red.500"
                                        fontWeight="bold"
                                        ps="3px"
                                        fontSize="md"
                                    >
                                        -14%
                                    </StatHelpText>
                                </Flex>
                            </Stat>
                            <Spacer />
                            <IconBox as="box" h={"45px"} w={"45px"} bg={iconTeal}>
                                <DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />
                            </IconBox>
                        </Flex>
                    </CardBody>
                </Card>
                <Card minH="83px">
                    <CardBody>
                        <Flex flexDirection="row" align="center" justify="center" w="100%">
                            <Stat me="auto">
                                <StatLabel
                                    fontSize="sm"
                                    color="gray.400"
                                    fontWeight="bold"
                                    pb=".1rem"
                                >
                                    Total Sales
                                </StatLabel>
                                <Flex>
                                    <StatNumber fontSize="lg" color={textColor} fontWeight="bold">
                                        $173,000
                                    </StatNumber>
                                    <StatHelpText
                                        alignSelf="flex-end"
                                        justifySelf="flex-end"
                                        m="0px"
                                        color="green.400"
                                        fontWeight="bold"
                                        ps="3px"
                                        fontSize="md"
                                    >
                                        +8%
                                    </StatHelpText>
                                </Flex>
                            </Stat>
                            <IconBox as="box" h={"45px"} w={"45px"} bg={iconTeal}>
                                <CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />
                            </IconBox>
                        </Flex>
                    </CardBody>
                </Card>
            </SimpleGrid>

        </Flex>
        
        <div id="tokens" className="wd_scroll">
        <section className="tokens-area section">
          <Container>
            {contents}
          </Container>
        </section>
      </div>
        

    </>
    );
}
