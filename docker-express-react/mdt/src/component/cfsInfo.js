import React, { Component } from 'react'
import { Container, Comment, Form, Button, Input, Divider } from 'semantic-ui-react'
import '../assets/App.css';
import imgDefault from '../assets/images/image.png'
import imgElliot from '../assets/images/elliot.jpg'
import imgHelen from '../assets/images/helen.jpg'
import imgJenny from '../assets/images/jenny.jpg'

class CfsInfo extends Component {
    state = {
        visible: true,
        percent: 20,
    };

    render() {
        return (
            <Container>
                <div className="cfs-info">
                    <span className="title"> Description: </span>
                    <div className="desc">
                        <p>A fire started behind the pizza oven and is getting worse. One employee is stuck in bathroom. Propane Tanks in Basement. A fire started behind the pizza oven and is getting worse. One employee is stuck in bathroom. Propane Tanks in Basement. Anim pariatur cliche reprehenderit,
                              enim eiusmod high life accusamus terry richardson ad squid. Nihil  </p>
                    </div>                
                </div>
                <Divider />
                {
                    //CFS TimeEvent Area, expandable and collapsable
                }
                <div className="cfs-info">
                    <span className="title"> Time Event: </span>
                    <div className="timeEvent">
                    <Comment.Group>
                        <Comment>
                            <Comment.Avatar src={imgElliot} />
                            <Comment.Content>
                                <Comment.Author as='a' className='timeEventAvator'>Matt</Comment.Author>
                                <Comment.Metadata>
                                    <div className='timeEventDate'>5 days ago</div>
                                </Comment.Metadata>
                                <Comment.Text className='timeEventContent'>How artistic!</Comment.Text>
                            </Comment.Content>
                        </Comment>
                        <Comment>
                            <Comment.Avatar src={imgHelen} />
                            <Comment.Content>
                                <Comment.Author as='a' className='timeEventAvator'>Elliot Fu</Comment.Author>
                                <Comment.Metadata>
                                    <div className='timeEventDate'>Yesterday at 12:30AM</div>
                                </Comment.Metadata>
                                <Comment.Text className='timeEventContent'>
                                    <p>This has been very useful for my research. Thanks as well!</p>
                                </Comment.Text>
                            </Comment.Content>
                        </Comment>
                        <Comment>
                            <Comment.Avatar src={imgJenny} />
                            <Comment.Content>
                                <Comment.Author as='a' className='timeEventAvator'>Joe Henderson</Comment.Author>
                                <Comment.Metadata>
                                    <div className='timeEventDate'>Today at 5:42AM</div>
                                </Comment.Metadata>
                                <Comment.Text className='timeEventContent'>
                                    Dude, this is awesome. Thanks so much
                                </Comment.Text>
                            </Comment.Content>
                        </Comment>
                        <Comment>
                            <Comment.Avatar src={imgHelen} />
                            <Comment.Content>
                                <Comment.Author as='a' className='timeEventAvator'>Joe Henderson</Comment.Author>
                                <Comment.Metadata>
                                    <div className='timeEventDate'>Today at 5:42AM</div>
                                </Comment.Metadata>
                                <Comment.Text className='timeEventContent'>
                                we surely will come back for more of the same another
                                day soon. Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all
                                over again. Even if we don't run extra laps that day, 
                                </Comment.Text>
                            </Comment.Content>
                        </Comment>
                        <Comment>
                            <Comment.Avatar src={imgJenny} />
                            <Comment.Content>
                                <Comment.Author as='a' className='timeEventAvator'>Joe Henderson</Comment.Author>
                                <Comment.Metadata>
                                    <div className='timeEventDate'>Today at 5:42AM</div>
                                </Comment.Metadata>
                                <Comment.Text className='timeEventContent'>
                                Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all
                                over again. Even if we don't run extra laps that day, we surely will come back for more of the same another
                                day soon. Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all
                                over again. Even if we don't run extra laps that day, we surely will come back for more of the same another
                                day soon. Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all
                                over again. Even if we don't run extra laps that day, we surely will come back for more of the same another
                                day soon.
                                </Comment.Text>
                            </Comment.Content>
                        </Comment>
                    </Comment.Group>
                    </div>
                    <Divider />
                    <Form reply>
                        <Form.Group widths='equal'>
                            <Form.Field control={Input} placeholder='Enter more comments...' />
                            <Button content='Add' labelPosition='left' icon='edit' primary />
                        </Form.Group>
                    </Form>
                </div>
            </Container>
        )
    }
}

export default CfsInfo;
