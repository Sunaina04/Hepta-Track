import './App.css';
import LoginForm from './Components/Login/LoginForm.tsx'
import {BrowserRouter, Routes , Route } from 'react-router-dom'
import ForgotPassword from './ForgotPassword/ForgotPassword.tsx'
import ResetPassword from './ResetPassword/ResetPassword.tsx'
import AddUser from './Components/Add User/AddUser.tsx'
// import SidebarMenu from './layout/SidebarMenu';


function App() {
  return (
    <div className="App">
      
      <AddUser/>
      {/* <Routes>
      <Route path='/' element = {<LoginForm/>} />
      <Route path ='/forgotPassword' element = {<ForgotPassword/>} />
      <Route path ='/ResetPassword' element = {<ResetPassword/>} /> */}
      {/* <SidebarMenu/> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;
