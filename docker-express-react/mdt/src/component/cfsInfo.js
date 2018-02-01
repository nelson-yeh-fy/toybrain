import React, { Component } from 'react'
import { Segment, Container, Feed, Checkbox } from 'semantic-ui-react'
import '../App.css';
import '../assets/fontawesome-all';
import imgDefault from '../assets/images/image.png'
import imgElliot from '../assets/images/elliot.jpg'
import imgHelen from '../assets/images/helen.jpg'
import imgJenny from '../assets/images/jenny.jpg'
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid/Grid';

class CfsInfo extends Component {

    render() {
        return (
            <Container fluid>
                <Segment className="cfs-info" style={{ padding: '0em 0em 1em 0em' }} vertical inverted>
                    <span className="title"> Description: </span>
                    <div className="desc">
                        <p>A fire started behind the pizza oven and is getting worse. One employee is stuck in bathroom. Propane Tanks in Basement. A fire started behind the pizza oven and is getting worse. One employee is stuck in bathroom. Propane Tanks in Basement. Anim pariatur cliche reprehenderit,
                              enim eiusmod high life accusamus terry richardson ad squid. Nihil  </p>
                    </div>
                </Segment>
                {
                    //CFS TimeEvent Area, expandable and collapsable
                }
                <Segment className="cfs-info" style={{ padding: '1em 0em 1em 0em' }} vertical inverted>
                    <Grid columns={2}>
                    <Grid.Column>
                        <span className="title"> Time Event: </span>
                    </Grid.Column>
                    <Grid.Column>
                        <Checkbox inverted label='Text only' toggle />
                    </Grid.Column>
                    </Grid>
                    <div className="timeEvent">
                        <Feed size='large'>
                            <Feed.Event>
                                <Feed.Label>
                                    <img src={imgElliot} alt={"elliot"} />
                                </Feed.Label>
                                <Feed.Content>
                                    <Feed.Date className='feedDate'>4 days ago</Feed.Date>
                                    <Feed.Summary className='feedContent'>
                                        <Feed.User inverted>Elliot Fu</Feed.User> added you as a friend
                                    </Feed.Summary>
                                    <Feed.Extra images>
                                        <a><img src={imgDefault} alt={"defaultImg"} /> </a>
                                        <a><img src={imgDefault} alt={"defaultImg"} /> </a>
                                    </Feed.Extra>
                                </Feed.Content>
                            </Feed.Event>

                            <Feed.Event>
                                <Feed.Label>
                                    <img src={imgElliot} alt={"elliot"} />
                                </Feed.Label>
                                <Feed.Content>
                                    <Feed.Date className='feedDate'>4 days ago</Feed.Date>
                                    <Feed.Summary className='feedContent'>
                                        <Feed.User inverted>Elliot Fu</Feed.User> added you as a friend
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
                                    <Feed.Date className='feedDate'>2 days ago</Feed.Date>
                                    <Feed.Summary className='feedContent' date='2 Days Ago' user='Jenny Hess' content='add you as a friend' />
                                </Feed.Content>
                            </Feed.Event>

                            <Feed.Event>
                                <Feed.Label>
                                    <img src={imgJenny} alt={"imgJenny"} />
                                </Feed.Label>
                                <Feed.Content>
                                    <Feed.Date className='feedDate'>3 days ago</Feed.Date>
                                    <Feed.Summary className='feedContent'>
                                        <a>Joe Henderson</a> posted on his page
                                    </Feed.Summary>
                                    <Feed.Extra text className='feedContent'>
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
                                    <Feed.Date className='feedDate'>3 days ago</Feed.Date>
                                    <Feed.Summary className='feedContent'>
                                    You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                                    </Feed.Summary>
                                    <Feed.Extra text className='feedContent'>
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
