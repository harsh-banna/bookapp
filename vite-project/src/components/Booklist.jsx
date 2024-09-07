import Book from "./Book";
import "./style.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function Booklist(props){
    // called after component render
    // useEffect(()=>{
    //     console.log("useeffect hai");
    //     fetchdata();
    // },[]);

    // async function fetchdata() {
    //     const response = await fetch("https://freetestapi.com/api/v1/books");
    //     const result = await response.json();

    //     console.log("result",result);
    // }
    console.log("componenet remnder")

    return(
        <>
        <div className="booklist">{props.booksData.map( (data) => (<Link key={data.id} to={`/book/${data.id}`} ><Book key={data.id}  bookDetails={data}/></Link>))
        }
        </div>
        </>
    )
}

export default Booklist;