import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Booklist from './components/Booklist'
import { Books } from './utils/mockdata'
import "./components/style.css"
/**
 * 
 *111 booklist component
 * book compent
 */

function App() {
  
  const [searchtext,setsearchtext]=useState("");
  const [filteredbooks, setfilteredbooks]=useState(Books);

  function handlesearch(){
     console.log(searchtext);
     const filterbooks = Books.filter((book) => 
    book.title.toLowerCase().includes(searchtext.toLowerCase()));
     console.log(filteredbooks,"ye");
     setfilteredbooks(filterbooks);
  }
  
  return(
    <>
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
