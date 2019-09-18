import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import ReactDOM from "react-dom"

class App extends React.Component{
  render(){
  return (
    <div>
     {/* <Header username= "Abhay"/>
     <Greeting/> */}
     <State/>
      </div>
  )
}
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  // );
  
}
class State extends React.Component{
  constructor()
  {
      super()
      this.state = {
        answer:"yes"
  }
}

  render()
  {
    return(
      <div>
          <h1>state is {this.state}</h1>
          </div>
    )
  }
}

// class Header extends React.Component{

// render(props)
// {
//   return(
//     <div>
//       <h1>welcome!{this.props.username}</h1>
//       </div>

//   )
// }
// }




// class  Greeting extends React.Component{
// render()
// {
//   const date = new Date()
//   const Hours =  date.getHours()
//   let timeday

//   if(Hours < 12){
//     timeday="morning"
//   }
//   else if(Hours >= 12 && Hours < 17)
//   {
//     timeday ="afternun"

//   }
//   else{
//     timeday = "night"
//   }
// return(
//   <h1>{timeday} to you</h1>
// )

// }
// }
export default App;
