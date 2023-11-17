import BooksCollection from "../components/BooksCollection";
import { BOOKS_MALE_TITLE } from "../utils/constants";
import { render, screen, waitFor } from '@testing-library/react';

const dummyBooks: IBook[] = [
    {
        name: "Hamlet",
        type: "handcover"
    },
    {
        name: "React: The Ultimate Guide",
        type: "handcover"
    }
]
  
  it('renders books', async () => {
    render(<BooksCollection title={BOOKS_MALE_TITLE} books={dummyBooks} />);
    const books = await waitFor(() => screen.findAllByTestId("test-bookname"));
    expect(books).toHaveLength(2);
  });

  it('renders no books available', async () => {
    render(<BooksCollection title={BOOKS_MALE_TITLE} books={[]} />);
    const books = await waitFor(() => screen.findAllByTestId("test-noBooks"));
    expect(books).toHaveLength(1);
  });