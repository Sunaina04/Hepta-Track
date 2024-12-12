import './App.css';
import LoginForm from './login/LoginForm.tsx'
import {BrowserRouter, Routes , Route } from 'react-router-dom'
import ForgotPassword from './ForgotPassword/ForgotPassword.tsx'
import ResetPassword from './ResetPassword/ResetPassword.tsx'

// import SidebarMenu from './layout/SidebarMenu';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element = {<LoginForm/>} />
      <Route path ='/forgotPassword' element = {<ForgotPassword/>} />
      <Route path ='/ResetPassword' element = {<ResetPassword/>} />
      {/* <SidebarMenu/> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
