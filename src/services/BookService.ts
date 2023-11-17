import axios from "axios";
import { API_URL_BOOKS, BookTypes, Gender } from "../utils/constants";

const http = axios.create({
    baseURL: API_URL_BOOKS,
    headers: {
      "Content-Type": "application/json",
    },
});

const get = async (genderFilter: Gender, hardcoverOnly: boolean) : Promise<IBook[]> => {
    let books: IBook[] = [];
    await http.get<Array<IBookAuthor>>("/books")
    .then((retData)=>{
        const booksCollection: IBookAuthor[] = retData?.data as IBookAuthor[];
        if (booksCollection) {
            // filter by author gender
            const filteredBooks = booksCollection.filter((author) => author.gender === genderFilter)
            .map((author) => { 
                // filter by type: hardcover
                return hardcoverOnly ? author.books?.filter((book) => book.type === BookTypes.Hardcover) : author.books;
            })
            .flat()
            .slice()
            // sort book name in alphabetical order
            .sort((a, b) => a?.name?.localeCompare(b?.name))
            .flat();
    
            books = filteredBooks;
        }
    })
    .catch((err) => {
        console.error(`GetBooks: error encountered: ${err}`);
    });
    return books;
}

const BooksService = {
    get
};

export default BooksService;