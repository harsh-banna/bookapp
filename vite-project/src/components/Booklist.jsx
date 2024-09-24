import Book from "./Book";
import "./style.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';
import useFetch from "../utils/useFetch";
import { useContext } from "react";
import userContext from "../utils/userContext";


function Booklist(){
    const {setUserName} = useContext(userContext);
    
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
            <input type="text" onChange={(e)=> setUserName(e.target.value)} />
        <h2>search Books</h2>
        <div>
        <input type="text" className='search-input' onChange={(e) => setsearchtext(e.target.value)}/>
        <button onClick={handlesearch}>search</button>
        </div>
        </div>
        <div className="booklist">{filteredbooks.map( (data) => (<Link key={data.id} to={`/book/${data.id}`} ><Book key={data.id}  bookDetails={data}/></Link>))
        }
        </div>
        </>
    )
}

export default Booklist;