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
    const topics = ['Html', 'JavaScript', 'JSX', 'ReactJS'];
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

class CommentBox extends React.Component {
  render(){
    const comments = this._getComments();
    return(
      <div>
        <h2>Comments</h2>
        <h4 className="comment-count">{this._getCommentsTitle(comments.length)}</h4>
        <div>
          {comments}
        </div>
      </div>
    );
  }

  _getComments(){
    const commentList = [
      {id:0, author: "Annie Droid", body: "I wanna know what love is"},
      {id:1, author: "Jackson Amber", body: "I wanna know how to smile"}
    ];
    return commentList.map( (comment)=>{
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
}

ReactDOM.render(
  <CommentBox />,
  document.getElementById('comment-app')
);

//----------------------------------------------------

class tile extends React.Component{

  render(){
    return(
      <h3>1333</h3>
    );
  }
}

ReactDOM.render(
  <tile />,
  document.getElementById('loadingTile-app')
);