import React from "react";
import "../css/Home.css";
import { Button, Divider, Link, Stack, Typography } from "@mui/material";
import BooksCollection from "../components/BooksCollection";
import {
  BOOKS_FEMALE_TITLE,
  API_URL_BOOKS,
  BOOKS_MALE_TITLE,
  GET_BOOKS_TEXT,
  Gender,
  HANDCOVER_BOOKS_FEMALE_TITLE,
  HANDCOVER_BOOKS_MALE_TITLE,
  HARDCOVER_ONLY_TEXT,
} from "../utils/constants";
import useFetch from "../hooks/useFetch";
import BooksService from "../services/BookService";

function Home() {
  const [femaleBooks, setFemaleBooks] = React.useState<IBook[]>([]);
  const [maleBooks, setMaleBooks] = React.useState<IBook[]>([]);
  const [isHardcoverOnly, setHandcoverOnly] = React.useState(false);
  const [isGetBooksFocused, setGetBooksFocused] = React.useState(false);
  const [isHandcoverFocused, setHandcoverFocused] = React.useState(false);

  const getBooksButtonRef = React.useRef(document.createElement("div"));
  const handcoverOnlyLinknRef = React.useRef(document.createElement("div"));

  // const { retData, isPending, error } = useFetch(`${API_URL_BOOKS}/books`);

  const handleGetBooks = async () => {
    setHandcoverOnly(false);
    setFemaleBooks(await BooksService.get(Gender.Female, false));
    setMaleBooks(await BooksService.get(Gender.Male, false));
  };

  const handleHandcoverOnly = async () => {
    setHandcoverOnly(true);
    setFemaleBooks(await BooksService.get(Gender.Female, true));
    setMaleBooks(await BooksService.get(Gender.Male, true));
  };

  // accessiblity - keyboard functions
  const handleGetBooksBtnBlur = () => {
    setGetBooksFocused(false);
  };
  const handleGetBooksBtnFocus = () => {
    setGetBooksFocused(true);
  };
  const handleHandcoverBlur = () => {
    setHandcoverFocused(false);
  };
  const handlehandcoverFocus = () => {
    setGetBooksFocused(true);
  };
  const handleGetBooksKeyDown = (e: any) => {
    if (e.key === "Enter" || e.key === "") {
      e.preventDefault();
      getBooksButtonRef.current.click();
    }
  };
  const handleHandcoverOnlyKeyDown = (e: any) => {
    if (e.key === "Enter" || e.key === "") {
      e.preventDefault();
      handcoverOnlyLinknRef.current.click();
    }
  };

  return (
    <div className="main-container">
      <div className="books-container">
        <div className="book-collection">
          <BooksCollection title={ isHardcoverOnly ? HANDCOVER_BOOKS_MALE_TITLE : BOOKS_MALE_TITLE} books={maleBooks} data-testid="test-booksCollection"></BooksCollection>
        </div>
        <div className="space-between" />
        <div className="book-collection">
          <BooksCollection title={ isHardcoverOnly ? HANDCOVER_BOOKS_FEMALE_TITLE : BOOKS_FEMALE_TITLE } books={femaleBooks}></BooksCollection>
        </div>
      </div>
      <br />
      <Divider />
      <br />
      <Stack spacing={{ xs: 1, sm: 2 }} direction={"row"} useFlexGap flexWrap="wrap" alignItems={"center"} justifyContent={"right"}>
        <Link href="#" onClick={handleHandcoverOnly} data-testid="test-getHandcoverOnly" onFocus={handlehandcoverFocus} onBlur={handleHandcoverBlur} tabIndex={isGetBooksFocused ? 1 : 0} onKeyDown={handleHandcoverOnlyKeyDown}>
          <Typography variant="subtitle2" ref={handcoverOnlyLinknRef}>{HARDCOVER_ONLY_TEXT}</Typography>
        </Link>
        <Button variant="contained" data-testid="test-getBooks" onClick={handleGetBooks} onFocus={handleGetBooksBtnFocus} onBlur={handleGetBooksBtnBlur} tabIndex={isHandcoverFocused ? 1 : 0} onKeyDown={handleGetBooksKeyDown}>
          <Typography variant="subtitle2" ref={getBooksButtonRef}>{GET_BOOKS_TEXT}</Typography>
        </Button>
      </Stack>
    </div>
  );
}

export default Home;
