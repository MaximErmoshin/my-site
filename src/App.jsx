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
const App = () => {
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
      <small>
        {getDateNow()}
      </small>
      <TextPage/>
    </div>
  );
}

export default App;
