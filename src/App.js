import {useState, useEffect } from 'react';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from "react-redux";
import axios from 'axios';
import {store} from './redux/store'
import Home from './routes'
import Navbar from './components/Navbar';

function App() {
  const [userDetails, setUserDetails] = useState()

  const getUserDetails = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await axios.get(`http://localhost:8000/getuser`, {
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
  },[])

  return (
    <>
      <Provider store={store}>  
        <BrowserRouter>
          <Navbar userDetails={userDetails} key={userDetails?._id}/>
          <Home userDetails={userDetails}/>
        </BrowserRouter>  
      </Provider>
    </>
  );
}

export default App;
