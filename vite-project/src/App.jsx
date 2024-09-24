import { useState } from 'react';
import "./components/style.css";
import Header from './components/Header'
/**
 * 
 *111 booklist component
 * book compent
 */

import { Outlet } from 'react-router-dom' ;
import userContext from './utils/userContext';
import {Provider} from "react-redux";
import appStore from './utils/appStore';

function App() {
  const [username,setUserName] = useState("harsh");

  return(
    
    <Provider store={appStore}>
    
    <userContext.Provider value={{ loggedInUser: username, setUserName}}>
    <Header/>
    <Outlet/>
    </userContext.Provider>
    </Provider>
  )
}

export default App
