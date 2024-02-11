import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Front from './components/Front';


function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?page=1&results=1&seed=abc");
        const userData = await response.json();
        setUserData(userData.results[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Front userData={userData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
