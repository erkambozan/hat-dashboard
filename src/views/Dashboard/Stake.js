// Chakra imports
import {
    Flex,
    SimpleGrid,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
import { Row, Col, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import './Stake/css/style.css';
import TotalBalance from "./Components/TotalBalance";
import StakeApi from "api/stake";

//Notification
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';


class PrintStakes extends React.Component {
    state = {
        stakeAmount: 0,
        response: [],
        max: 0,
        min: 0,
    }

    componentDidMount() {
        StakeApi.GetAllStakeSettings()
            .then(res => {
                this.setState({ response: res.data })
            })
            .catch(err => console.log("err:", err))
    }

    handleSubmit = (event) => {
        
        if (this.state.stakeAmount <= 0) {
            NotificationManager.error("Please fill in the blanks.");

        }
        else {
            StakeApi.MakeStake({
                stake_type: event.stake_type,
                stake_amount: this.state.stakeAmount
            }).then(res => {
                NotificationManager.success("Successfully created.");
            })
            console.log(this.state.response.minimum_limit)
        }

    }
    handleStakeAmount = (e) => {
        this.setState({ stakeAmount: e.target.value })
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
                                            <td> Expiry Stake Day</td>
                                            <td> {item.expiry_stake_time}</td>
                                        </tr>
                                        <tr>
                                            <td> Minimum Limit</td>
                                            <td> {item.minimum_limit} HELT</td>
                                        </tr>
                                        <tr>
                                            <td> Maximum Limit</td>
                                            <td> {item.maximum_limit} HELT</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label>Stake Amount</label>
                                            </td>
                                            <td>
                                                <input onChange={this.handleStakeAmount} type="number"
                                                    className="form-control" required />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <button onClick={() => this.handleSubmit(item)} className="right-btn">Make Stake</button>
                            <NotificationContainer />
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


export default function Dashboard() {
    //
    let contents = (
        <PrintStakes />
    )

    //

    return (<>
        <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
            <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing="24px">
                <TotalBalance />
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
