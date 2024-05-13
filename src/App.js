import {  Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './subcomponent/home'
import Navbar from './component/navbar';
import Login from './component/login';
import Register from './component/register';
import Booking from './component/booking';
import Feedback from './component/feedback';
import Gallery from './component/gallery';
import Payment from './component/payment';






function App() {
  return (
    <div >
      <BrowserRouter>
         {/* <Navbar/> */}
          <Routes>
          <Route element={<Home />} path='/home' />
            <Route element={<Navbar />} path='/navbar'/>
            <Route element={<Login />} path='/login'/>
            <Route element={<Register />} path='/register'/>
            
            <Route element={<Booking />} path='/booking'/>

            <Route element={<Feedback />} path='/f'/>
            <Route element={<Gallery />} path='/gallery'/>
            <Route element={<Payment />} path='/payment'/>


          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
