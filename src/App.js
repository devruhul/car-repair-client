import Home from './Pages/Home/Home/Home';
import { Routes, Route } from 'react-router-dom'
import Header from './Pages/Home/Header/Header';
import Services from './Pages/Home/Services/Services';
import Experts from './Pages/Home/Experts/Experts';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="experts" element={<Experts />} />
      </Routes>
    </div>
  );
}

export default App;
