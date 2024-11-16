import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Login from './Component/Login/Login';
import Singup from './Component/Singup/Singup';
import Chat from './Pages/Chat';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/singup' element={<Singup/>}/>
        <Route path='/chat' element={<Chat/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
