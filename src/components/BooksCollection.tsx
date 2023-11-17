import { Typography } from "@mui/material";
import { NO_BOOKS_DISPLAY } from "../utils/constants";
import "../css/BooksCollection.css";

interface BooksProps {
  title: string;
  books: IBook[];
}

function BooksCollection(props: BooksProps) {
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
                  <Typography variant="subtitle2" key={index} data-testid="test-bookname">{book?.name}</Typography>
                ) : null;
              })
            :  <Typography variant="subtitle2" data-testid="test-noBooks">{NO_BOOKS_DISPLAY}</Typography>
            }
        </ul>
      </div>
    </div>
  );
}

export default BooksCollection;
