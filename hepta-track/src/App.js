import './App.css';
import LoginForm from './login/LoginForm';
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <LoginForm/>
      </BrowserRouter>
    </div>
  );
}

export default App;
