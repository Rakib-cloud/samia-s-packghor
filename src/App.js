import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import Question from './Components/Question/Question';

//Header added in app function
function App() {
  return (
    <div className="App">
    <Header></Header>
    <Shop></Shop>
    <Question></Question>
    </div>
  );
}

export default App;
