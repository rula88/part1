import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';
const Hello = (props) => {
  return(
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}
const App = () => {
  console.log('Hello from komponentti')
  const now = new Date()
  const a = 10
  const b = 20
  const Footer = () => {
    return (
      <div>
        greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
      </div>
    )
  }
  return React.createElement(
    'div', null,
    React.createElement(
      'p', null, 'Hello world, it is ', now.toString()
    ),
    React.createElement(
      'p', null, a, ' plus ', b, ' is ', a + b
    ),
    <div>
      <Hello name='x'/>
      <Footer />
    </div>
  )

}
ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
