 /**
  * React v15.4.1
  */ 

//----------------------------------------------------   

class Story extends React.Component {
  render(){
    return(
        <h5 className="comment-header">{this.props.body} </h5>
    );
  }
}

class StoryBox extends React.Component {
  render(){
    const Storys = this._storyMaker();
    return(
      <div>
        {Storys}
      </div>      
    );
  }

  _storyMaker(){
    const topics = ['Html', 'JavaScript', 'JSX', 'ReactJS'];
    var arr = Array.from(Array(100).keys());
    return arr.map(x => {
      return(
        <Story ref={x} body={topics[Math.floor(Math.random() * topics.length)]} />
      );
    });
  }
}

ReactDOM.render(    
    <StoryBox />,
    document.getElementById('root')
);


// function tick(){

//   const topics = ['Html', 'JavaScript', 'JSX', 'ReactJS'];
//   ReactDOM.render(
//     <Story body={topics[Math.floor(Math.random() * topics.length)]} />,
//     document.getElementById()
//   );
// }