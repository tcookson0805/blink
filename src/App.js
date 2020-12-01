import React from 'react';
import './App.css';
import Blink from './components/Blink';
import './style/Blink.css';

class TestLink extends React.Component {
  render() {
    return (
      <a href="https://www.leftfieldlabs.com/">Child Components</a>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Blink tag</h1>
      </header>
      <div className="content">
        <div className="features">
          <h2>Basic Requirements</h2>
          <ol>
            <li>Contents within the tag are preset to alternate between being visibible/invisible in 1/4 second increments</li>
            <li>Wheather using the <span className="blink">blink class</span> or using the custom <Blink>Blink</Blink> component, the surrounding text does not shift.</li>
          </ol>
        </div>

        <div className="features">
          <h2>The Blink component also has additional features that allow it to:</h2>
          <ol>
            <li>handle<Blink> <TestLink /> </Blink></li>
            <li>accept <Blink tag="strong"> custom element </Blink>tags</li>
            <li>and even <Blink rate=".1">increase</Blink> or <Blink rate="4">decrease</Blink> its blink rate</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
