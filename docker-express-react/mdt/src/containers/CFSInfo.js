import React from 'react';
import PropTypes from 'prop-types';
import { Container, Comment, Form, Button, Input, Divider } from 'semantic-ui-react';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  refreshCFSLog,
  refreshCFSLogAsync,
} from '../reducers/cfslog';
import '../assets/App.css';
import imgDefault from '../assets/images/image.png';
import imgElliot from '../assets/images/elliot.jpg';
import imgHelen from '../assets/images/helen.jpg';
import imgJenny from '../assets/images/jenny.jpg';

const imgArray = [imgElliot, imgHelen, imgJenny];


const renderCfsLogs = item => (
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

const CfsInfo = (props) => {
  // const filteredItems = getVisibleTimeEvents(this.props.timeEvents, this.props.isUserCommentFiltered);
  const timeEventLogsItems = props.timeEventLogs.map(renderCfsLogs);

  return (
    <Container>
      <div className="cfs-info">
        <span className="title"> Description: </span>
        <div className="desc">
          <p>A fire started behind the pizza oven and is getting worse. One employee is stuck in bathroom. Propane Tanks in Basement. A fire started behind the pizza oven and is getting worse. One employee is stuck in bathroom. Propane Tanks in Basement. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil
          </p>
        </div>
      </div>
      <Divider />
      {
        // CFS TimeEvent Area, expandable and collapsable
      }
      <div className="cfs-info">
        <span className="title"> Time Event: </span>
        <div className="timeEvent">
          <Comment.Group>
            <Comment>
              <Comment.Avatar src={imgElliot} />
              <Comment.Content>
                <Comment.Author as="a" className="timeEventAvator">Matt</Comment.Author>
                <Comment.Metadata>
                  <div className="timeEventDate">5 days ago</div>
                </Comment.Metadata>
                <Comment.Text className="timeEventContent">How artistic!</Comment.Text>
              </Comment.Content>
            </Comment>
            {timeEventLogsItems}
          </Comment.Group>
        </div>
        <Divider />
        <Form reply>
          <Form.Group widths="equal">
            <Form.Field control={Input} placeholder="Enter more comments..." />
            <Button content="Add" labelPosition="left" icon="edit" primary />
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
};

CfsInfo.propTypes = {
  timeEventLogs: PropTypes.arrayOf({
    idx: PropTypes.number,
    isUserComment: PropTypes.bool,
    text: PropTypes.string,
    addby: PropTypes.string,
    addon: PropTypes.string,
  }).isRequired,
  isRefreshingis: PropTypes.bool.isRequired,
  isAdding: PropTypes.bool.isRequired,
};

// Take application state (our redux store) as an argument,
// and passed as props to this component.
const mapStateToProps = state => ({
  // 'timeEventLogs' means one of CFSInfo.js's prop;
  // 'state.counter.count' means store (createStore via rootReducer)'s counter
  timeEventLogs: state.cfslog.timeEventLogs,
  isRefreshingis: state.cfslog.isRefreshingis,
  isAdding: state.cfslog.isAdding,
});

// Take function 'dispatch' as an argument,
// this causes our actions to be sent toward store (via reducers)
const mapDispatchToProps = dispatch => bindActionCreators({
  refreshCFSLog,
  refreshCFSLogAsync,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CfsInfo);
