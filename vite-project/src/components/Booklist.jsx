import Book from "./Book";
import "./style.css";
import { Link } from "react-router-dom";
function Booklist(props){
    return(
        <>
        <div className="booklist">{props.booksData.map( (data) => (<Link to={`/book/${data.id}`} ><Book bookDetails={data}/></Link>))
        }
        </div>
        </>
    )
}

export default Booklist;