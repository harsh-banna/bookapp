import { useParams } from "react-router-dom";
import { Books } from "../utils/mockdata";
import { useDispatch } from "react-redux";
import { addItem,removeItem } from "../utils/cartSlice";

function BookDetails(){

    const params = useParams();

    const dispatch = useDispatch();  

    function handleAddBook(item) {
        dispatch(addItem(item))
    }
    function handleremoveitem(){
        dispatch(removeItem());
    }


    const book = Books.filter((book) => book.id == params.id);

    return(
        <>
        <h1>{`Book Details for book with id ${params.id}`}</h1>
        <br />
        {book.map((book) => {
            return(
                <>
                <h2>{book.title}</h2>
                <h3>{book.description}</h3>
                <img src={book.coverimage} alt="" />
                <h3>{book.price}</h3>
                <button onClick={() => handleAddBook(book)} >add to cart</button> 
                <button onClick={handleremoveitem}>remove item</button>
                </>
            )
        })}
        </>
    )


   
}

export default BookDetails;