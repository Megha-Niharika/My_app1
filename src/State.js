

import React from 'react';
class State extends React.Component{
    constructor()
    {
        super()
        this.state = {
          answer : "yes"
    }
  }
  
    render()
    {
      return(
        <div>
            <h1>state is {this.state.answer}</h1>
            </div>
      )

    }
  }
  expor default State