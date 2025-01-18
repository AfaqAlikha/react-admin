
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from"./pages/Home"
import Header from"./components/Header"
import Sidbare from "./components/Sidbare"
import Index from './pages/Inbox';
import Schedule from './pages/Schedule';
import Reviews from './pages/Reviews';
import Settings from './pages/Settings';
function App() {
  return (
   <>
   <BrowserRouter>
   <Header/>
   <div className='main d-flex'>
   <div className='sidebareWeper'>
   <Sidbare/>
   </div>
   <div className='contantWeper'>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/dashboard" element={<Home/>}/>
    <Route path="/inbox" element={<Index/>}/>
    <Route path="/schedule" element={<Schedule/>}/>
    <Route path="/reviews" element={<Reviews/>}/>
    <Route path="/settings" element={<Settings/>}/>
   </Routes>
   </div>
   </div>
   
   </BrowserRouter>
   </>
  );
}

export default App;
