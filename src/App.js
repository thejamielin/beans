import logo from './logo.svg';
import './App.css';
import { Welcome } from "./components/project_growth"

function App() {
  return (
    <div className="App">
      <Welcome name="user"/>
      <SomeText />
    </div>
  );
}

function SomeText() {
  return<p>hello, this is some text!</p>;
}

export default App;
