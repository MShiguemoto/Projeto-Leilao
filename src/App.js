import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import DefaultLayout from './components/default/DefaultLayout';
import SimpleLayout from './components/default/SimpleLayout';
import PrivateRouter from './components/header/PrivateRouter';
import Header from './components/header/Header';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout><Home /></DefaultLayout>} />
          <Route path="/Home" element={<Home />} />
          <Route path="/login" element={<Login />} />


          <Route element={<PrivateRouter />}>
            <Route path="/private" element={<Home/>} />
            {/* <Route path="/recover-password" element={<RecoverPassword />} /> */}
            {/* <Route path="/change-password" element={<ChangePassword />} /> */}
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
