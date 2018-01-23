import React, { Component } from 'react'
import { Grid, Sidebar, Segment, Container, Button, Menu, Icon, Header, Label, Input, Divider, Feed, Progress, Tab } from 'semantic-ui-react'
import '../App.css';

class CfsBrief extends Component {

    render() {
        return (
            <Container fluid>
                <Segment className="cfs-info" style={{ padding: '1em 0em 0em 0em' }} vertical inverted>
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
                <Segment className="cfs-info" style={{ padding: '2em 0em 0em 0em' }} vertical inverted>
                    <span className="cfsDescTitle"> Time Event: </span>
                    <div className="cfs-timeEvent" id="scrollbar-style-6">
                        <Feed>
                            <Feed.Event>
                                <Feed.Label image='/assets/images/avatar/small/helen.jpg' />
                                <Feed.Content>
                                    <Feed.Summary>
                                        <a>Helen Troy</a> added <a>2 new illustrations</a>
                                        <Feed.Date>4 days ago</Feed.Date>
                                    </Feed.Summary>
                                    <Feed.Extra images>
                                        <a><img src='/assets/images/wireframe/image.png' alt='fs' /></a>
                                        <a><img src='/assets/images/wireframe/image.png' alt='fs' /></a>
                                    </Feed.Extra>
                                </Feed.Content>
                            </Feed.Event>

                            <Feed.Event>
                                <Feed.Label image='/assets/images/avatar/small/jenny.jpg' />
                                <Feed.Content>
                                    <Feed.Summary date='2 Days Ago' user='Jenny Hess' content='add you as a friend' />
                                </Feed.Content>
                            </Feed.Event>

                            <Feed.Event>
                                <Feed.Label image='/assets/images/avatar/small/joe.jpg' />
                                <Feed.Content>
                                    <Feed.Summary>
                                        <a>Joe Henderson</a> posted on his page
                                    <Feed.Date>3 days ago</Feed.Date>
                                    </Feed.Summary>
                                    <Feed.Extra text>
                                        <div className='cfs-timeEvent'>
                                            Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all
                                        over again. Even if we don't run extra laps that day, we surely will come back for more of the same another
                                        day soon.
                                      </div>
                                    </Feed.Extra>
                                </Feed.Content>
                            </Feed.Event>

                            <Feed.Event>
                                <Feed.Label image='/assets/images/avatar/small/joe.jpg' />
                                <Feed.Content>
                                    <Feed.Summary>
                                        <a>Joe Henderson</a> posted on his page
                                    <Feed.Date>3 days ago</Feed.Date>
                                    </Feed.Summary>
                                    <Feed.Extra text>
                                        <div className='cfs-timeEvent'>
                                            Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all
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

export default CfsBrief;
