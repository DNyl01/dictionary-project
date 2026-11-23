
import './App.css';
import SearchEngine from "./SearchEngine.js";

function App() {
  return (
    <div className= "container">
    <div className="App">
      <header className="App-header">
       <h1>Dictionary</h1>
        <SearchEngine/>
      </header>
      <footer> Coded by DNyl hosnted on <a href="#">GitHub</a> & Deplyed on <a href="#">Netlify</a> </footer>
    </div></div>
  );
}

export default App;
