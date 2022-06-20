import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'

function App() {
  const Button = styled.button`
  background-image: url("paper.gif");
  opacity: 0.5;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: dark;
  margin: 0 1em;
  padding: 0.25em 1em;
  width: 100px;
  height: 100px;
`
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button > hello </Button>
      </header>
      
    </div>
  );
}

export default App;
