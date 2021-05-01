import logo from './logo.svg';
import './App.css';
import TextPage from './pages/text/textPage';

function plus(a,b) {
  return a+b;
}
function minus(a,b) {
  return a-b;
}
function getDateNow() {
  return new Date().toISOString();
}
function App() {
  return (
    <div className="App">
      <p>
        asdasdasdasd
      </p>
      <h1>
        {plus(11,2)}
      </h1>
      <h1>
        {minus(11,2)}
      </h1>
      <h1>
        {getDateNow()}
      </h1>
      <TextPage/>
    </div>
  );
}

export default App;
