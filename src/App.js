import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './Pages/Layout/Layout';
import Login from './Pages/Athentication/Login'
import SignUp from './Pages/Athentication/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
