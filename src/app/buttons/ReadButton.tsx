"use client"
import { toast } from "react-toastify";
import Book from "../types/books";
import { useContext } from "react";
import { BookContext } from "@/context/BookContext";

interface IReadButtonProps {
    book: Book
}
const ReadButton = ({ book }: IReadButtonProps) => {
    const bookContext = useContext(BookContext)
    if (!bookContext) {
        return null
    }
    const { readBooks, setReadBooks } = bookContext
    const handleReadBook = (book: Book) => {
        const newBook = { ...book, selectedFor: "ReadBooks" }
        setReadBooks([...readBooks, newBook])
        toast.success("Book Listed as Read")
    }
    const isAlreadyAdded = readBooks.some((b) => b.bookId === book.bookId)
    return (
        <button onClick={() => handleReadBook(book)} disabled={isAlreadyAdded} className="px-6 py-2 rounded-md disabled:bg-slate-700 disabled:!cursor-not-allowed disabled:text-white transition-all  bg-white text-slate-600">
            {
                isAlreadyAdded ? "Listed as Read" : "Read"
            }
        </button>
    );
};

export default ReadButton;