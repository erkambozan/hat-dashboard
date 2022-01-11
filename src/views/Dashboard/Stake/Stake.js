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
                this.setState({response: res.data})
            })
            .catch(err => console.log("err:", err))
    }

    handleSubmit = (event) => {
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
                                            <input onChange={this.handleStakeAmount} type="number"
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
