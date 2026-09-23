"use client"
import { useContext } from "react";
import Book from "../types/books";
import { BookContext } from "@/context/BookContext";
import { toast } from "react-toastify";

interface IRemoveButtonProps {
    book: Book,
}
const RemoveButton = ({ book }: IRemoveButtonProps) => {
    const bookContext = useContext(BookContext)
    if (!bookContext) {
        return null
    }
    const { readBooks, setReadBooks, wishlist, setWishlist } = bookContext
    const handleRemove = (book: Book) => {
        const isRead = book.selectedFor === "ReadBooks"
        if (isRead) {
            const newReads = readBooks.filter((r) => r.bookId !== book.bookId)
            setReadBooks(newReads)
            toast.warning("Removed From Read Books")
        }

        const isWishlist = book.selectedFor === "WishList"
        if (isWishlist) {
            const newWishlist = wishlist.filter((r) => r.bookId !== book.bookId)
            setWishlist(newWishlist)
            toast.warning("Removed From Wishlist")
        }
    }
    return (
        <button onClick={() => handleRemove(book)} className="bg-red-400 px-4 py-1 text-white rounded-full font-semibold">Remove</button>
    );
};

export default RemoveButton;