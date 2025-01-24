import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Add from './pages/Add';
import List from './pages/List';
import Orders from './pages/Orders';
import Login from './pages/Login';
import { ToastContainer } from 'react-toastify';
import Subscriber from './pages/Subscriber';
import Review from './pages/Review';
import Message from './pages/message';

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency= '₹';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);

  return (
    <div className="bg-rose-50 h-screen flex flex-col">
      <ToastContainer />
      {token === '' ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar setToken={setToken} />
          <hr />
          <div className="flex flex-1 overflow-hidden">
            <Sidebar />
            <div className="w-[70%] h-full overflow-auto mx-auto ml-[max(5vw,25px)] my-8 pb-10 text-gray-600 text-base">
              <Routes>
                <Route path="/add" element={<Add token={token} />} />
                <Route path="/list" element={<List token={token} />} />
                <Route path="/order" element={<Orders token={token} />} />
                <Route path="/subscriber" element={<Subscriber token={token} />} />
                <Route path="/review" element={<Review token={token} />} />
                <Route path="/message" element={<Message token={token} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
