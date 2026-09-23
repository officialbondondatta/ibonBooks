import Image from "next/image";
import Book from "../types/books";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";
import { BsPeopleFill } from "react-icons/bs";
import { GiNewspaper } from "react-icons/gi";
import RemoveButton from "../buttons/RemoveButton";

interface IListedBooksShowcaseProps {
    book: Book
}
const ListedBookShowcase = ({ book }: IListedBooksShowcaseProps) => {
    return (
        <div className="flex lg:grid lg:grid-cols-12 flex-col items-center justify-center gap-5 border py-5 px-3 rounded-xl border-slate-200">
            <div className="max-w-100 lg:col-span-2 bg-slate-300 ">
                <Image src={book.image} alt={book.bookName} width={300} height={200} className="w-[80%] py-5 mx-auto h-auto"></Image>
            </div>
            <div className="lg:col-span-10 space-y-3 flex flex-col">
                <h2 className="lg:text-2xl text-xl font-semibold">{book.bookName}</h2>
                <span>By: {book.author}</span>
                <div className="flex lg:flex-row flex-col items-center gap-5 mb-5">
                    <h2 className="flex items-center gap-2 mt-2">
                        <span className="font-semibold">Tag </span>
                        {book.tags.map((tag, index) => (
                            <div key={index} className="text-green-500 bg-green-100 py-1 px-3 rounded-xl">
                                <span>#{tag}</span>
                            </div>))}
                    </h2>
                    <h2 className="flex items-center gap-2">
                        <CiLocationOn className="text-2xl" /> Year of Publishing: <span className="ml-2">{book.yearOfPublishing}</span>
                    </h2>
                </div>
                <div className="flex gap-5">
                    <h2 className="flex items-center gap-2">
                        <BsPeopleFill />
                        Publisher: {book.publisher}
                    </h2>
                    <h2 className="flex items-center gap-2">
                        <GiNewspaper className="text-xl" />
                        Page {book.totalPages}
                    </h2>
                </div>
                <hr className="w-full text-slate-300" />
                <div className="flex flex-col lg:flex-row items-center gap-5">
                    <h2 className="bg-blue-200 text-blue-500 px-3 py-1 rounded-full">Category: {book.category}</h2>
                    <h2 className="bg-orange-100 text-orange-500 px-3 py-1 rounded-full">Rating: {book.rating}</h2>
                    <div className="flex gap-5">
                        <Link href={`books/${book.bookId}`}>
                            <button className="bg-green-500 px-4 py-1 text-white rounded-full font-semibold">View Details</button>
                        </Link>

                        <RemoveButton book={book}></RemoveButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedBookShowcase;