import React, { Component , useState } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {

  state = {
    persons: [
      { name: 'Smith', age: 25},
      { name: 'Manu', age: 33},
      { name: 'Sam', age: 22}
    ],
    country : 'Singapore'
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Jenny', age: 43},
        { name: 'Manu', age: 83},
        { name: 'Sammy', age: 42}
      ]
    });
  }


  render() {
    return (
      <div className="App">
        <h1> Hello, I am Reatjs</h1>
        <button onClick={this.switchNameHandler}>Switch button</button>
        <p> Country is {this.state.country}</p>
        <Person name="Max" age="22"/>
        <Person name="John" age="30"> My Hobbies: Racing </Person>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/> 
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/> 
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/> 
        
        
      </div>
    );
  }
}

const PropsApp = props => { 

  const [companyState, setCompanyState] = useState('I2S Solutions');

  const switchCompanyHandler = () => {
    setCompanyState('Prudential');
  };
  
  return (<div> <p> Company : {companyState}</p> 
  <button onClick={switchCompanyHandler}>Switch button</button> </div>);
  
  
}


export  {App , PropsApp };
