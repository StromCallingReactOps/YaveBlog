import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <headline>Yave Study Blog</headline>
        <menuline>Blog Cluture OpenSource Careers</menuline>
        <banerline>Yave Tech</banerline>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Clone <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
