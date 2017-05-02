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