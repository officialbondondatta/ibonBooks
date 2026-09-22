import Book from "@/app/types/books";
import BookCard from "./BookCard";

const bookData = async () => {
    const res = await fetch('http://localhost:3000/booksData.json')
    const books = await res.json()
    return books
}
const Books = async () => {
    const books = await bookData()
    return (
        <section className="container mx-auto mt-10 mb-5">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    books.map((book: Book, index: number) => (
                        <BookCard key={index} book={book}></BookCard>
                    ))
                }
            </div>
        </section>
    );
};

export default Books;