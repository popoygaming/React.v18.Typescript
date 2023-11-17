import Home from "../pages/Home";
import { BOOKS_FEMALE_TITLE, BOOKS_MALE_TITLE, HANDCOVER_BOOKS_MALE_TITLE } from "../utils/constants";
import { render, screen, fireEvent } from '@testing-library/react';

it('shows handcover books with male owners', async () => {
    render(<Home />);

    expect(screen.queryByText(HANDCOVER_BOOKS_MALE_TITLE)).toBeNull();
    const link = screen.getByTestId('test-getHandcoverOnly');

    fireEvent.click(link);
    expect(screen.getByText(HANDCOVER_BOOKS_MALE_TITLE)).toBeInTheDocument();
});

it('shows all books', async () => {
    render(<Home />);
    const button = screen.getByTestId('test-getBooks');
    fireEvent.click(button);
    expect(screen.getByText(BOOKS_MALE_TITLE)).toBeInTheDocument();
    expect(screen.getByText(BOOKS_FEMALE_TITLE)).toBeInTheDocument();
});