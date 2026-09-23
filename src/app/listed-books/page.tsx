"use client"
import { BookContext } from "@/context/BookContext";
import { useContext, useState } from "react";
import ListedBookShowcase from "../components/ListedBookShowcase";
import Book from "../types/books";

const ListedBooksPage = () => {
    const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating")
    const BookContextValue = useContext(BookContext)
    if (!BookContextValue) {
        return null
    }
    const { readBooks, wishlist } = BookContextValue

    const sortBooks = (books: Book[]) => {
        const sortedBooks = [...books]
        if (sortBy === "rating") {
            sortedBooks.sort((a, b) => b.rating - a.rating)
        } else if (sortBy === "pages") {
            sortedBooks.sort((a, b) => a.totalPages - b.totalPages)
        } else if (sortBy === "year") {
            sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
        }
        return sortedBooks
    }
    const sortedReadBooks = sortBooks(readBooks)
    const sortedWishlist = sortBooks(wishlist)
    return (
        <section className="p-5 lg:p-0 mt-5">
            <div className="container mx-auto max-w-300 space-y-4 p-5">
                <h1 className="text-center my-5 text-4xl font-bold bg-slate-100 py-8 rounded-xl text-slate-600">Listed Books</h1>
                <div className="flex text-center items-center justify-center">
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as "rating" | "year" | "pages")}
                        className="select select-info">
                        <option disabled={true}>Sort By</option>
                        <option value={"rating"}>Rating</option>
                        <option value={"pages"}>Number of Pages</option>
                        <option value={"year"}>Published Year</option>
                    </select>
                </div>
                <div className="tabs tabs-lift">
                    <input type="radio" name="my_tabs_1" className="tab" aria-label="Read Books" defaultChecked />
                    <div className="tab-content  bg-base-100 border-base-300 p-6 ">
                        <div className="grid grid-cols-1 gap-5">
                            {
                                sortedReadBooks.length === 0 ? "No Books added yet" :
                                    sortedReadBooks.map(book => (
                                        <ListedBookShowcase book={book} key={book.bookId}>
                                        </ListedBookShowcase>
                                    ))
                            }
                        </div>
                    </div>

                    <input type="radio" name="my_tabs_1" className="tab" aria-label="Wishlist Books" />
                    <div className="tab-content  bg-base-100 border-base-300 p-6 ">
                        <div className="grid grid-cols-1 gap-5">
                            {
                                sortedWishlist.length === 0 ? "No Books added yet" :
                                    sortedWishlist.map(book => (
                                        <ListedBookShowcase book={book} key={book.bookId}>
                                        </ListedBookShowcase>
                                    ))
                            }
                        </div>
                    </div>


                </div>
            </div>

        </section>
    );
};

export default ListedBooksPage;