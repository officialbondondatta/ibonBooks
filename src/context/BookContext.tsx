"use client"
import { createContext, ReactNode, useState } from "react";
import { IBookContext } from "../app/types/bookContext"
import type Book from "../app/types/books";

export const BookContext = createContext<IBookContext | null>(null)

const BookProvider = ({ children }: { children: ReactNode }) => {
    const [readBooks, setReadBooks] = useState<Book[]>([])
    const [wishlist, setWishlist] = useState<Book[]>([])

    const bookContextData = {
        readBooks,
        setReadBooks,
        wishlist,
        setWishlist
    }
    return (
        <BookContext.Provider value={bookContextData}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;