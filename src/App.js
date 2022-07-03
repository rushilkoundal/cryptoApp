import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Currencies from './components/Currencies';
import Exchanges from './components/Exchanges';
import News from './components/News';
import CryptoDetails from './components/CryptoDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app_navbar">
          <Navbar />
        </div>
        <div className="app_links">
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/currencies' element={<Currencies />} />
            <Route path='/crypto-details/:coinId' element={<CryptoDetails />} />
            <Route path='/exchanges' element={<Exchanges />} />
            <Route path='/news' element={<News />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
