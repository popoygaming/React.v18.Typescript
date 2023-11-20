import { Typography } from "@mui/material";
import { NO_BOOKS_DISPLAY } from "../utils/constants";
import "../css/BooksCollection.css";
import { Link } from "react-router-dom";

interface BooksProps {
  title: string;
  books: IBook[];
}

function BooksCollection(props: BooksProps) : JSX.Element  {
  return (
    <div className="card">
      <div className="card-header">
        <Typography variant="subtitle1">{props.title}</Typography>
      </div>
      <div className="card-content">
        <ul className="book-list">
          {props.books?.length > 0
            ? props.books.map((book: IBook, index) => {
                return book?.name ? (
                  // <li key={index}><Link aria-label={book?.name} to={`/${book?.name}`}><Typography variant="subtitle2" key={index} data-testid="test-bookname">{book?.name}</Typography></Link></li>
                  <li key={index}><Typography variant="subtitle2" key={index} data-testid="test-bookname">{book?.name}</Typography></li>
                ) : null;
              })
            :  <li><Typography variant="subtitle2" data-testid="test-noBooks">{NO_BOOKS_DISPLAY}</Typography></li>
            }
        </ul>
      </div>
    </div>
  );
}

export default BooksCollection;
