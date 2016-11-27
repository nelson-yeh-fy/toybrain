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