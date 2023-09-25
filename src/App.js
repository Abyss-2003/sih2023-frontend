import { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux"
import { store } from './redux/store'
import Home from './routes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [userDetails, setUserDetails] = useState()

  const getUserDetails = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await axios.get(`https://sih2023-backend.onrender.com/getuser`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
        if (response.data.user) {
          setUserDetails(response.data.user)
        } else {
          console.log("single user fetch failed");
        }
      }
    } catch (error) {
      console.log("Fetch user details failed");
    }
  }

  useEffect(() => {
    getUserDetails()
  }, [])

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="dark"
          />
          <Navbar userDetails={userDetails} key={userDetails?._id} />
          <Home userDetails={userDetails} />
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
