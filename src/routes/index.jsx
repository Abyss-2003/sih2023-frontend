import {Routes, Route} from 'react-router-dom'
import Main from '../pages/Main'

export default function Home(){
    return(
        <Routes>
            <Route path='/' element={<Main/>}/>
        </Routes>
    )
}