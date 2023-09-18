import {BrowserRouter} from 'react-router-dom'
import { Provider } from "react-redux";
import {store} from './redux/store'
import Home from './routes'

function App() {
  return (
    <>
      <Provider store={store}>  
        <BrowserRouter>
           <Home/>
        </BrowserRouter>  
      </Provider>
    </>
  );
}

export default App;
