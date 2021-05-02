import logo from './logo.svg';
import './App.css';
import FirstPage from './pages/firstPage/firstPage';
import InputPage from './pages/inputPage/inputPage';
import DisplayPage from './pages/displayPage/displayPage';


const App = () => {
  return (
    <div className="App">
      <FirstPage></FirstPage>
      <InputPage></InputPage>
      <DisplayPage></DisplayPage>
    </div>
  );
}

export default App;
