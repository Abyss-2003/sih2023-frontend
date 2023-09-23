import {Routes, Route} from 'react-router-dom'
import Main from '../pages/Main'
import LoginSignup from '../pages/LoginSignup'
// import Category from '../pages/Category'

export default function Home({userDetails}){
    return(
        <Routes>
            <Route path='/' element={<Main userDetails={userDetails}/>}/>
            <Route path='/login' element={<LoginSignup/>}/>
            {/* <Route path='/home' element={<Category userDetails={userDetails}/>}/> */}
        </Routes>
    )
}