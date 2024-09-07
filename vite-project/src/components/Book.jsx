import "./style.css"
function Book(props){

    return(
        <>
        <div className="book-card">
          <img src={props.bookDetails.cover_image} className="book-cover" alt="" />
          <div>
            <h2  className="book-title">{props.bookDetails.title}</h2>
            <p className="book-author">{props.bookDetails.author}</p>
            <p className="book-des">{props.bookDetails.description}</p>
          </div>
        </div>  
        </>
    )
}

export default Book;