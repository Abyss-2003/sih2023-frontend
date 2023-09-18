import {Routes, Route} from 'react-router-dom'
import Demo from '../pages/Demo'

export default function Home(){
    return(
        <Routes>
            <Route path='/' element={<Demo/>}/>
        </Routes>
    )
}