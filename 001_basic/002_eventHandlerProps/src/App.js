import React, { Component , useState } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App"> Hello App !!
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
  <button onClick={switchCompanyHandler}>Switch Company</button> </div>);
}

export  {App , PropsApp };
