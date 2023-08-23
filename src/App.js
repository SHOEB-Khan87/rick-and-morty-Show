
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Character from './components/Character';
import CharacterDetail from './components/CharacterDetail';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Character />} />
          <Route path='/CharacterDetail' element={<CharacterDetail />} />
        </Routes>
     
      </BrowserRouter>
    </>
  );
}

export default App;
