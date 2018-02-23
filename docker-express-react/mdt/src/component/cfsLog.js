import React from 'react';
import _ from 'lodash';
import { Comment } from 'semantic-ui-react';
import '../assets/App.css';
import imgElliot from '../assets/images/elliot.jpg';
import imgHelen from '../assets/images/helen.jpg';
import imgJenny from '../assets/images/jenny.jpg';

const imgArray = [imgElliot, imgHelen, imgJenny];

const cfsLog = item => (
  <Comment key={item.idx}>
    <Comment.Avatar src={_.sample(imgArray)} />
    <Comment.Content>
      <Comment.Author as="a" className="timeEventAvator">{item.addby}</Comment.Author>
      <Comment.Metadata>
        <div className="timeEventDate">{item.addon}</div>
      </Comment.Metadata>
      <Comment.Text className="timeEventContent">
        <p>{item.text}</p>
      </Comment.Text>
    </Comment.Content>
  </Comment>
);

export default cfsLog;

