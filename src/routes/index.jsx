import {Routes, Route} from 'react-router-dom'
import Main from '../pages/Main'
import LoginSignup from '../pages/LoginSignup'

export default function Home(){
    return(
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
    )
}