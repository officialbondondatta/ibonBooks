"use client"
import { BookContext } from "@/context/BookContext";
import { useContext } from "react";
import ListedBookShowcase from "../components/ListedBookShowcase";

const ListedBooksPage = () => {
    const BookContextValue = useContext(BookContext)

    if (!BookContextValue) {
        return null
    }

    const { readBooks, wishlist } = BookContextValue
    return (
        <section className="p-5 lg:p-0 mt-5">
            <div className="container mx-auto space-y-4 p-5">
                <h1 className="text-center my-5 text-4xl font-bold bg-slate-100 py-8 rounded-xl text-slate-600">Listed Books</h1>
                <div>
                    <div className="tabs tabs-lift">
                        <input type="radio" name="my_tabs_1" className="tab" aria-label="Read Books" defaultChecked />
                        <div className="tab-content  bg-base-100 border-base-300 p-6 ">
                            <div className="grid grid-cols-1 gap-5">
                                {
                                    readBooks.length === 0 ? "No Books added yet" :
                                        readBooks.map(book => (
                                            <ListedBookShowcase book={book} key={book.bookId}>

                                            </ListedBookShowcase>
                                        ))
                                }
                            </div>
                        </div>

                        <input type="radio" name="my_tabs_1" className="tab" aria-label="Wishlist Books" />
                        <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ListedBooksPage;