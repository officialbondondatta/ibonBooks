import Book from "@/app/types/books";
import BookCard from "../components/Books/BookCard";

const bookData = async () => {
    const res = await fetch('http://localhost:3000/booksData.json')
    const books = await res.json()
    return books
}
const BooksPage = async () => {
    const books = await bookData()
    return (
        <section className="container mx-auto mt-10 mb-5 p-5 lg:p-0">
            <h2 className="text-4xl font-bold text-center my-10">Explore All Listed Books</h2>
            <div className="grid lg:grid-cols-3 max-w-300 mx-auto md:grid-cols-2 grid-cols-1 gap-5">
                {
                    books.map((book: Book, index: number) => (
                        <BookCard key={index} book={book}></BookCard>
                    ))
                }
            </div>
        </section>
    );
};

export default BooksPage;