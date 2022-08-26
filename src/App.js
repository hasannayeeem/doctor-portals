
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';
import History from './Pages/Dashboard/History';
import AllUsers from './Pages/Dashboard/AllUsers';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctor from './Pages/Dashboard/ManageDoctor';
import Payment from './Pages/Dashboard/Payment';
function App() {
  return (
    <div  className="max-w-7xl mx-auto px-12">
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/appointment' element={
            <RequireAuth>
              <Appointment></Appointment>
            </RequireAuth>
          }></Route>
          <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
            <Route index element={<MyAppointment></MyAppointment>} ></Route>
            <Route path='review' element={<MyReview></MyReview>} ></Route>
            <Route path='history' element={<History></History>} ></Route>
            <Route path='payment/:id' element={<Payment></Payment>} ></Route>

            <Route path='users' element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>} ></Route>
            <Route path='addDoctor' element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>} ></Route>
            <Route path='manageDoctor' element={<RequireAdmin><ManageDoctor></ManageDoctor></RequireAdmin>} ></Route>
          </Route>
        </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
