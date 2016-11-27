 /**
  * React v15.4.1
  */
  
/*React.render(  
			React.DOM.h1(null, "Hello world! ReactJS!"),  
			document.getElementById("app") 
		); */
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
		return( <div>Story Box </div> );
	}
}
ReactDOM.render(  	
  	<StoryBox />,
  	document.getElementById('story-app')
);