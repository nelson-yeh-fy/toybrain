 /**
  * React v15.4.1
  */ 

function formatName(userName){
  return userName.firstName + "&" + userName.LastName;
};

const userName = {
  'firstName' : 'Lindon',
  'LastName' : 'D'
};

const element = (
  <h1>
    Storyboard - {formatName(userName)}  
  </h1>
);

ReactDOM.render(
  //<h1>Hello, world!</h1>,
  element,
  document.getElementById('root')
); 

//----------------------------------------------------   

class StoryBox extends React.Component {
  render(){
    const now = new Date();
    const topics = ['Html', 'JavaScript', 'JSX'];
    return( 
      <div>
        <h2>Story Box</h2>
        <h3>Current time: {now.toDateString()} {now.toTimeString()}</h3>
        <ul>
          {topics.map(topic => <li>{topic}</li>)}
        </ul>
      </div> 
    );
  }
}

ReactDOM.render(    
    <StoryBox />,
    document.getElementById('story-app')
);

//----------------------------------------------------

class Comment extends React.Component {
  render(){
    return(
      <div>
        <p className="comment-header">{this.props.author}</p>
        <p className="comment-body">{this.props.body}</p>
        <div>
          <a href="#" className="comment-footer-delete">delete comment</a>
        </div>
      </div>      
    );
  }
}

class CommentForm extends React.Component {
  render(){
    return (
      <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
        <label>Join the discussion</label>
        <div className="comment-form-fields">
          <input placeholder="Name:" ref={(input) => this._author=input} />
          <textarea placeholder="Comments:" ref={(textarea) => this._body=textarea} />
        </div>
        <div className="comment-form-actions">
          <button type="submit">Post comment</button>
        </div>
      </form>
    );
  }

  _handleSubmit(event){
    event.preventDefault(); //prevent page reload when click the submit button
    let author = this._author;
    let body = this._body;
    this.props.addComment(author.value, body.value);
  }
}

class CommentBox extends React.Component {

  constructor(){
    super();
    this.state = {
      showComments: true,
      comments: [{id:1, author: "Annie Droid", body: "I wanna know what love is"}
                ]
    };
  }

  render(){
    const comments = this._getComments();
    let buttonText = "Show comments";
    let commentNode;
    if(this.state.showComments){
      buttonText = "Hide comments";
      commentNode = comments;
    }

    return(
      <div>
        <h2>Comments</h2>
        <h4 className="comment-count">{this._getCommentsTitle(comments.length)}</h4>
        <button onClick={this._handleClick.bind(this)} >{buttonText}</button>
        <CommentForm addComment={this._addComment.bind(this)}/>
        <div>
          {commentNode}
        </div>        
      </div>
    );
  }

  _addComment(author, body){ //this method will be trigered by commentForm 
    let newComment = {id: this.state.comments.length+1, author, body};
    this.setState({ comments: this.state.comments.concat([newComment]) });
  }

  _getComments(){
    return this.state.comments.map( (comment)=>{
      return (
        <Comment author={comment.author} body={comment.body} key={comment.id} />
      );
    });
  }

  _getCommentsTitle(count){
    if(count === 0)
      return "no comments";
    else if(count === 1)
      return "1 comment";
    else
      return `${count} comments`;
  }

  _handleClick(){
    this.setState(
      {showComments: !this.state.showComments}
    );
  }
}


ReactDOM.render(
  <CommentBox />,
  document.getElementById('comment-app')
);

//----------------------------------------------------

const { createStore } = Redux; // import {createStore} from 'redux';
const { connect, Provider } = ReactRedux; // import {connect, Provider} from 'react-redux';
// import * as ReduxActions from './reduxActions'
// import { addTodo, removeTodo } from 'reduxActions'


// Redux - Actions
const ADD_TODO = 'INCREMENT';
const DEC_TODO = 'DECREMENT';

// Redux - ActionCreators
function addTodo(num){
  return {
    type: ADD_TODO,
    number: num
  }
} 
function removeTodo(num){
  return {
    type: DEC_TODO,
    number: num
  }
}

// Redux - Reducers Default State
const initialTodo = {
  TodoCount: 0
}

// Redux - Reducers
const counter = (state = initialTodo, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {TodoCount: state.TodoCount + action.number};
    case 'DECREMENT':
      return {TodoCount: state.TodoCount - action.number};
    default:
      return state;
  }
}

const store = createStore(counter);
store.subscribe(() =>
  console.log(store.getState())
)

// The only way to mutate the internal state is to dispatch an action. 
// The actions can be serialized, logged or stored and later replayed. 
store.dispatch(addTodo(3))
store.dispatch(removeTodo(3))
store.dispatch({ type: 'INCREMENT', number: 1 })
store.dispatch({ type: 'DECREMENT', number: 1 })


class TodoBox extends React.Component {
  render(){
    return(
      <div>
        <h2>ToDos:</h2>
        <h4>{this.props.value}</h4>
        <button onClick={this.props.onIncreaseClick}> + </button>
        <button onClick={this.props.onDecreaseClick}> - </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    value: state.TodoCount
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(addTodo(3)),
    onDecreaseClick: () => dispatch(removeTodo(3))
  }
}

const ReduxConnectedTodoBox = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoBox)


ReactDOM.render(
  <Provider store={store}>
    <ReduxConnectedTodoBox />
  </Provider>,
  document.getElementById('todo-app')
);