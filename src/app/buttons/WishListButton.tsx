"use client"
import { BookContext } from "@/context/BookContext";
import { useContext } from "react";
import Book from "../types/books";
import { toast } from "react-toastify";

interface IWishlistProps {
    book: Book
}

const WishListButton = ({ book }: IWishlistProps) => {
    const bookContext = useContext(BookContext)
    if (!bookContext) {
        return null
    }
    const { wishlist, setWishlist } = bookContext

    const handleWishlist = (book: Book) => {
        const newWish = {
            ...book, selectedFor: "WishList"
        }
        setWishlist((prev) => [...prev, newWish])
        toast.success("Added to wishlist")
    }
    const isAlreadyAdded = wishlist.some((b) => b.bookId === book.bookId)
    return (
        <button onClick={() => handleWishlist(book)} disabled={isAlreadyAdded} className="px-6 py-2 rounded-md disabled:bg-slate-700 disabled:cursor-not-allowed! disabled:text-white transition-all bg-white text-slate-600">
            {
                isAlreadyAdded ? "Already in Wishlist" : "Wishlist"
            }
        </button>
    );
};

export default WishListButton;