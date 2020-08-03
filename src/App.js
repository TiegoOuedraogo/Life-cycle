import React, {Component} from 'react';
/**For this program we’re going to need to create a stateful class component.  This will allow us to create state that we can update/use in our program to represent the data we collect from the API. ▸The main functionality of this program is to go out and grab some JSON data on the web and then format it to correctly be displayed to our specifications */
class App extends Component{
  // Items will be initialized to an empty array where we will store the data we retrieve from the API. isLoaded is a boolean we set to false that we will use later to make sure the data we received is populated
  constructor(){
    super();
    this.state = {
      item: [],
      isLoaded: false,
    }
  }
  componentDidMount(){
    //Now we need to grab the data from an API that contains JSON objects and use a lifecycle method to accomplish this task. ▸Think about what lifecycle method will we want to use for an API call
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      return res.json();
    })
    .then(data =>{
      console.log(data);
      this.setState({
        isLoaded: true,
        item: data,
      })
    })
  }
  render(){
    {/**First lets deconstruct our state keys by typing line 28 below the starting code block of the render method and before the return statement. */}
    var {isLoaded,item} = this.state;
    if(!isLoaded){
      return <div>Loading....</div>;
    }else{
    return(
      <div className="App">
        <div className="Names">
          <ul>
            {item.map(el =>{
              return(
                <li key={el.id}>
                Name: {el.name} | UserName:{el.username} |{' '}
                <a href={'https://${el.website}'}>website</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
}
export default App;