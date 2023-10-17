import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  render() {
    return <h1> Hello { 5 + 20 } World! </h1> // jsx
  }
}

function App1() {
  // return <h1> Hello { 5 + 10 } World! </h1> // jsx
  // return React.createElement('h1', {'id': 'samtext'}, `Hello ${5 + 10} World2!`); // without jsx
  const a = 'prakash';
  const html =  
    false ? 
    (<>
      <h1> Hello </h1>
      <h1> World</h1>
      <input type="text" className='name' value='{a}' style={{'color': 'red'}} />
    </>) : (
      <>
      <h1> Invalid!</h1>
      </>
    )
  
  if (a === 'prakash') {
    return html;
  }
  else {
    return null;
  }
}

export default App;