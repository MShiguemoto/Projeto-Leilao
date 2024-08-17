import './App.css';
import {BrowserRouter, Route, Routes} from  'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import DefaultLayout from './components/default/DefaultLayout';
import DefaultCleanLayout from './components/default/DefaultCleanLayout';


function App() {
  return (
   <>
    {/* <Header/> */}
      <BrowserRouter>
        <Routes>
            <Route path='/' Element={<DefaultLayout> <Home></Home></DefaultLayout>}/>
            <Route path='/login' Element={<DefaultCleanLayout><Login></Login></DefaultCleanLayout>}/>
        </Routes>
      </BrowserRouter>
    {/* <Footer/> */}
   </>
  );
}

export default App;
