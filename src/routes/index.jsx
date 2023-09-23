import {Routes, Route} from 'react-router-dom'
import Demo from '../pages/Demo'
import LoginSignup from '../pages/LoginSignup'
import Main from '../pages/Main'

export default function Home(){
    return(
        <Routes>
            {/* <Route path='/' element={<LoginSignup/>}/> */}
            <Route path='/' element={<Main/>}/>
        </Routes>
    )
}