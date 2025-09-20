import Navbar from './components/Navbar/Navbar'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import LoginPopup from './components/LoginPopup/LoginPopup'

const App = () => {
  const [showLogin,setShowLogin]=useState(false);
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/Cart' element={<Cart></Cart>}></Route>
       <Route path='/Order' element={<PlaceOrder></PlaceOrder>}></Route>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
