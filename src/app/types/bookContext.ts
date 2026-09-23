import { Dispatch, SetStateAction } from "react";
import Book from "./books";

export interface IBookContext {
    readBooks: Book[],
    setReadBooks: Dispatch<SetStateAction<Book[]>>,
    wishlist: Book[],
    setWishlist: Dispatch<SetStateAction<Book[]>>
}