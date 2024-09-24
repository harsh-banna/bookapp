import { useState } from 'react';
import "./components/style.css";
import Header from './components/Header'
/**
 * 
 *111 booklist component
 * book compent
 */

import { Outlet } from 'react-router-dom' ;
import userContext from './utils/userContext'

function App() {
  const [username,setUserName] = useState("harsh");

  return(
    <>
    <Header/>
    <userContext.Provider value={{ loggedInUser: username, setUserName}}>
    <Outlet/>
    </userContext.Provider>
    </>
  )
}

export default App
