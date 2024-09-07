import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Booklist from './components/Booklist'
import { Books } from './utils/mockdata'
import { useEffect } from 'react'
import useFetch from './utils/useFetch'
import "./components/style.css"
import Header from './components/Header'
/**
 * 
 *111 booklist component
 * book compent
 */

import { Outlet } from 'react-router-dom' 

function App() {
  
  const [searchtext,setsearchtext]=useState("");
  const [filteredbooks, setfilteredbooks]=useState([]);
  const {data, error, loading} = useFetch("https://freetestapi.com/api/v1/books");
  useEffect(()=>{
    if(data){
      setfilteredbooks(data);
    }
   },[data]);

   if(error) {
    return <h1> error in data fetchiong</h1>;}

   if(loading) {
    return <p>Loading.....</p>;
   }

// async function fetchdata() {
//     const response = await fetch("https://freetestapi.com/api/v1/books");
//     const data = await response.json();

//     setfilteredbooks(data);

//     console.log("result",data);
// }
 
  function handlesearch(){
     console.log(searchtext);
     const filterbooks = Books.filter((book) => 
    book.title.toLowerCase().includes(searchtext.toLowerCase()));
     console.log(filteredbooks,"ye");
     setfilteredbooks(filterbooks);
  }
  
  return(
    <>
    <Header/>
    <Outlet/>
    <div className='search'>
    <h2>search Books</h2>
      <div>
      <input type="text" className='search-input' onChange={(e) => setsearchtext(e.target.value)}/>
      <button onClick={handlesearch}>search</button>
      </div>
    </div>
    <Booklist booksData={filteredbooks} />
    </>
  )
}

export default App
