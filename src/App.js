import Home from './Pages/Home/Home/Home';
import { Routes, Route } from 'react-router-dom'
import Header from './Pages/Home/Header/Header';
import Services from './Pages/Home/Services/Services';
import Experts from './Pages/Home/Experts/Experts';
import Booking from './Pages/Bookings/Booking/Booking';
import Bookings from './Pages/Bookings/Bookings';
import Login from './Pages/Login/Login';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="services" element={<Services />} />
          {/* <Route path="bookings" element={<Bookings />} >
            <Route path=":bookingId" element={<Booking />} />
          </Route> */}
          <Route path="experts" element={<Experts />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
