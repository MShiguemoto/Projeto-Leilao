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
          <Route element={<PrivateRouter />}>
            {/* Private */}
            <Route path='/' Element={<DefaultLayout><Home /></DefaultLayout>} />

            {/* Inserir todas as rotas restritas dentro da tag com o "PrivateRoute, para limitar o acesso." */}

            {/* Private */}
          </Route>
          <Route path='/login' /*Element={<DefaultCleanLayout><Login /></DefaultCleanLayout>}*/ Component={DefaultLayout(Home)} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
