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
import {Row, Col, Container} from 'reactstrap';
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
import React, {useState} from "react";
import './css/style.css';
import TotalBalance from "../Components/TotalBalance";
import StakeApi from "api/stake";


class PrintStakes extends React.Component {
    state = {
        stakeAmount: 0,
        response: []
    }

    componentDidMount() {
        StakeApi.GetAllStakeSettings()
            .then(res => {
                console.log("responze:", res)
                this.setState({response: res.data})
            })
            .catch(err => console.log("err:", err))
    }

    handleSubmit = (event) => {
        console.log(event.stake_type)
        console.log(this.state.stakeAmount)
        StakeApi.MakeStake({
            stake_type: event.stake_type,
            stake_amount: this.state.stakeAmount
        })
    }
    handleStakeAmount = (e) => {
        this.setState({stakeAmount: e.target.value})
    }
    getReady = () => {
        const result = this.state.response.map((item) => {
            return (
                <Col id="stake-margin" className="col-xs-6 text-right ">
                    <div className="tokens mr-r50">
                        <div className="token-name">{item.stake_type}</div>
                        <div className="token-body">
                            <div className="prices">
                                <table>
                                    <tbody>
                                    <tr>
                                        <td> Stake Percentage</td>
                                        <td> {item.stake_percentage}</td>
                                    </tr>
                                    <tr>
                                        <td> Expiry Stake Time</td>
                                        <td> {item.expiry_stake_time}</td>
                                    </tr>
                                    <tr>
                                        <td> Minimum Limit</td>
                                        <td> {item.minimum_limit} HT</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label>Stake Amount</label>
                                        </td>
                                        <td>
                                            <input onChange={this.handleStakeAmount} type="text"
                                                   className="form-control" required/>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <button onClick={() => this.handleSubmit(item)} className="right-btn">Make Stake</button>
                        </div>
                    </div>
                </Col>
            );
        })

        return result;
    }

    render() {
        return (
            <>{this.getReady()}</>
        )
    }
}


export default function Dashboard(props) {
    const value = "$100.000";
    // Chakra Color Mode
    const {colorMode, toggleColorMode} = useColorMode();
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
        <PrintStakes/>
    )

    //

    return (<>
            <Flex flexDirection="column" pt={{base: "120px", md: "75px"}}>
                <SimpleGrid columns={{sm: 1, md: 2, xl: 4}} spacing="24px">
                    <TotalBalance/>
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
                                    <GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside}/>
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
                                <Spacer/>
                                <IconBox as="box" h={"45px"} w={"45px"} bg={iconTeal}>
                                    <DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside}/>
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
                                    <CartIcon h={"24px"} w={"24px"} color={iconBoxInside}/>
                                </IconBox>
                            </Flex>
                        </CardBody>
                    </Card>
                </SimpleGrid>

            </Flex>
            <div className="wd_scroll_wrap">

                <div id="tokens" className="wd_scroll">
                    <section className="tokens-area section">
                        <Container>
                            <Row>
                                {contents}
                            </Row>
                        </Container>
                    </section>
                </div>
            </div>

        </>
    );
}
