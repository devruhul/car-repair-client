import Home from './Pages/Home/Home/Home';
import { Routes, Route } from 'react-router-dom'
import Header from './Pages/Home/Header/Header';
import Services from './Pages/Home/Services/Services';
import Experts from './Pages/Home/Experts/Experts';
import Booking from './Pages/Bookings/Booking/Booking';
import Bookings from './Pages/Bookings/Bookings';
import Login from './Pages/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateOutlet from './Pages/PrivateOutlet/PrivateOutlet';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import AddService from './Pages/Home/AddService/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="bookings" element={<Bookings />} >
            <Route path=":bookingId" element={<Booking />} />
          </Route>
          <Route path="manage" element={<ManageServices/>} />

          <Route path="/*" element={<PrivateOutlet />}>
            <Route path="services" element={<Services />} />
            <Route path="experts" element={<Experts />} />
          </Route>
          <Route
            path="services"
            element=
            {<PrivateRoute>
              < Services/>
            </PrivateRoute>
            }
          />
          <Route
            path="experts"
            element=
            {<PrivateRoute>
              < Experts/>
            </PrivateRoute>
            }
          />
          <Route path="add-service" element={<AddService/>} />

          <Route path="login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
