export const HEADER_TITLE = "Owners and Books";
export const BOOKS_MALE_TITLE = "Books with Male Owners";
export const BOOKS_FEMALE_TITLE = "Books with Female Owners";
export const HANDCOVER_BOOKS_MALE_TITLE = "Hardcover Books with Male Owners";
export const HANDCOVER_BOOKS_FEMALE_TITLE = "Hardcover Books with Female Owners";
export const HARDCOVER_ONLY_TEXT = "Hardcover Only";
export const GET_BOOKS_TEXT = "Get Books";
export const UNABLE_TO_FETCH_DATA = "Could not fetch the data.";
export const NO_BOOKS_DISPLAY = "No books available.";
export const PAGE_NOT_FOUND_TEXT = "Page not found";

export const API_URL_BOOKS = "http://localhost:3001";

// enums
export enum Gender{
    Male = "Male",
    Female = "Female"
}

export enum BookTypes{
    Hardcover = "Hardcover",
    Paperback = "Paperback",
    Ebook = "Ebook"
}