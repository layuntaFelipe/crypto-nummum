import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CoinPage from './pages/CoinPage';

function App() {
  

  return (
    <>
      <Navbar />

      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin' element={<CoinPage/>}>
          <Route path=':coinId' element={<CoinPage/>}/>
        </Route>
      </Routes>
      


    </>
  );
}

export default App;
