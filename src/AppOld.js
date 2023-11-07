import logo from './logo.svg';
import './App.css';
import React from 'react';

// class App1 extends React.Component {
//   render() {
//     return <h1> Hello { 5 + 20 } World! </h1> // jsx
//   }
// }

class App extends React.Component {
  constructor() {

  }

  getDerivedStateFromProps() {

  }

  render() {
    return <h1> Good Morning! </h1>
  }

  componentDidMount() {

  }
}

function App1(props) {
  // return <h1> Hello { 5 + 10 } World! </h1> // jsx
  // return React.createElement('h1', {'id': 'samtext'}, `Hello ${5 + 10} World2!`); // without jsx
  const a = 'prakash';
  console.log('props.name', props.name);
  const html =  
    false ? 
    (<>
      <h1> Hello </h1>
      <h1> World</h1>
      <input type="text" className='name' value='{a}' style={{'color': 'red'}} />
    </>) : (
      <>
      <h1> Invalid!</h1>
      <App />
      </>
    )
  
  if (a === 'prakash') {
    return html;
  }
  else {
    return null;
  }
}

export default App1;