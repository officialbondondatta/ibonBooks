"use client"
import { BookContext } from "@/context/BookContext";
import { useContext } from "react";

const ListedBooksPage = () => {
    const BookContextValue = useContext(BookContext)

    if (!BookContextValue) {
        return null
    }

    const { readBooks, wishlist } = BookContextValue
    return (
        <section className="p-5 lg:p-0 mt-5">
            <div className="container mx-auto bg-slate-100 space-y-4 p-5">
                <h1 className="text-center my-5 text-4xl font-bold text-slate-600">Listed Books</h1>
                <h1>readBooks: {readBooks.length}</h1>
                <h1>wishList: {wishlist.length}</h1>
            </div>
        </section>
    );
};

export default ListedBooksPage;