 /**
  * React v15.4.1
  */ 

function formatName(userName){
  return userName.firstName + "&" + userName.LastName;
};

const userName = {
  'firstName' : 'Nelson',
  'LastName' : 'Yeh'
};

const element = (
  <h1>
    Hello, {formatName(userName)}  
  </h1>
);

ReactDOM.render(
  //<h1>Hello, world!</h1>,
  element,
  document.getElementById('root')
);    

class StoryBox extends React.Component {
  render(){
    const now = new Date();
    const topics = ['Html', 'JavaScript', 'JSX', 'ReactJS'];
    return( 
      <div>
        <h1>Story Box</h1>
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

class CommentBox extends React.Component {
  render(){
    return(
      <div>
        <h1>Comments</h1>
        <h4 className="comment-count">2 comments</h4>
        <div>
          <Comment author="Anne Droid" body="I wanna know what love is" />
          <Comment author="Jackson Amber" body="I wanna know how to smile" />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <CommentBox />,
  document.getElementById('comment-app')
);
