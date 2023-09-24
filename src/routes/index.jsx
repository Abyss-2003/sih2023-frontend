import {Routes, Route} from 'react-router-dom'
import Main from '../pages/Main'
import LoginSignup from '../pages/LoginSignup'
import Category from '../pages/Category'
import ImageUpload from '../pages/ImageUpload'
import VdoUpload from '../pages/VdoUpload'

export default function Home({userDetails}){
    return(
        <Routes>
            <Route path='/' element={<Main userDetails={userDetails}/>}/>
            <Route path='/login' element={<LoginSignup/>}/>
            <Route path='/home' element={<Category userDetails={userDetails}/>}/>
            <Route path='/image-upload' element={<ImageUpload />}/>
            <Route path='/video-upload' element={<VdoUpload/>}/>
        </Routes>
    )
}