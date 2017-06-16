function* _getStory(){
	var index = 0;
	while(true)
		yield index++;
}

var gen = _getStory();
console.log(gen.next().value);
console.log(gen.next().value);

let arr = Array.from(Array(3).keys());
arr.map( 
	(x)=>{console.log(x);}
);

function setPageThread(name, {popular, expires, activeClass} = {}) {
	console.log("name: ", name);
	console.log("popular: ", popular);
	console.log("expires: ", expires);
	console.log("activeClass: ", activeClass);
}
setPageThread("MyName", {popular: true, expires: 12, activeClass: "abc"});
