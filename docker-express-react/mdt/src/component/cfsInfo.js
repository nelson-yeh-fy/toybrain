import React, { Component } from 'react'
import { Segment, Container, Feed } from 'semantic-ui-react'
import '../App.css';
import '../assets/fontawesome-all';
import imgDefault from '../assets/images/image.png'
import imgElliot from '../assets/images/elliot.jpg'
import imgHelen from '../assets/images/helen.jpg'
import imgJenny from '../assets/images/jenny.jpg'

class CfsInfo extends Component {

    render() {
        return (
            <Container fluid>
                <Segment className="cfs-info" style={{ padding: '0em 0em 1em 0em' }} vertical inverted>
                    <span className="cfsDescTitle"> Description: </span>
                    <div className="cfsDesc" id="scrollbar-style-6">
                        <p>A fire started behind the pizza oven and is getting worse. One employee is stuck in bathroom. Propane Tanks in Basement. A fire started behind the pizza oven and is getting worse. One employee is stuck in bathroom. Propane Tanks in Basement. Anim pariatur cliche reprehenderit,
                              enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                              nesciunt sapiente ea proident. </p>
                    </div>
                </Segment>
                {
                    //CFS TimeEvent Area, expandable and collapsable
                }
                <Segment className="cfs-info" style={{ padding: '1em 0em 1em 0em' }} vertical inverted>
                    <span className="cfsDescTitle"> Time Event: </span>
                    <div className="cfs-timeEvent" id="scrollbar-style-6">
                        <Feed>
                            <Feed.Event>
                                <Feed.Label>
                                    <img src={imgElliot} alt={"elliot"} />
                                </Feed.Label>
                                <Feed.Content>
                                    <Feed.Summary>
                                        <a>Helen Troy</a> added <a>2 new illustrations</a>
                                        <Feed.Date>4 days ago</Feed.Date>
                                    </Feed.Summary>
                                    <Feed.Extra images>
                                        <a><img src={imgDefault} alt={"defaultImg"} /> </a>
                                        <a><img src={imgDefault} alt={"defaultImg"} /> </a>
                                    </Feed.Extra>
                                </Feed.Content>
                            </Feed.Event>

                            <Feed.Event>
                                <Feed.Label>
                                    <img src={imgHelen} alt={"imgHelen"} />
                                </Feed.Label>
                                <Feed.Content>
                                    <Feed.Summary date='2 Days Ago' user='Jenny Hess' content='add you as a friend' />
                                </Feed.Content>
                            </Feed.Event>

                            <Feed.Event>
                                <Feed.Label>
                                    <img src={imgJenny} alt={"imgJenny"} />
                                </Feed.Label>
                                <Feed.Content>
                                    <Feed.Summary>
                                        <a>Joe Henderson</a> posted on his page
                                    <Feed.Date>3 days ago</Feed.Date>
                                    </Feed.Summary>
                                    <Feed.Extra text>
                                        <div>
                                            Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all
                                        over again. Even if we don't run extra laps that day, we surely will come back for more of the same another
                                        day soon. Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all
                                        over again. Even if we don't run extra laps that day, we surely will come back for more of the same another
                                        day soon. Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all
                                        over again. Even if we don't run extra laps that day, we surely will come back for more of the same another
                                        day soon.
                                      </div>
                                    </Feed.Extra>
                                </Feed.Content>
                            </Feed.Event>

                            <Feed.Event>
                                <Feed.Label>
                                    <img src={imgHelen} alt={"imgHelen"} />
                                </Feed.Label>
                                <Feed.Content>
                                    <Feed.Summary>
                                        <a>Joe Henderson</a> posted on his page
                                    <Feed.Date>3 days ago</Feed.Date>
                                    </Feed.Summary>
                                    <Feed.Extra text>
                                        <div>
                                            Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all
                                        over again. Even if we don't run extra laps that day, we surely will come back for more of the same another
                                        day soon. Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all
                                        over again. Even if we don't run extra laps that day, we surely will come back for more of the same another
                                        day soon. Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all
                                        over again. Even if we don't run extra laps that day, we surely will come back for more of the same another
                                        day soon.
                                      </div>
                                    </Feed.Extra>
                                </Feed.Content>
                            </Feed.Event>
                        </Feed>
                    </div>
                </Segment>
            </Container>
        )
    }
}

export default CfsInfo;
