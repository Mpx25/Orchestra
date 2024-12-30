import { Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';


// Import halaman
import Home from './pages/Home';
import Orkestra from './pages/Orkestra';
import Konser from './pages/Konser';
import Kontak from './pages/Kontak';
import Berita from './pages/Berita';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orkestra" element={<Orkestra />} />
        <Route path="/konser" element={<Konser />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/kontak" element={<Kontak />} />
      </Routes>
    </div>
  );
};

export default App;
