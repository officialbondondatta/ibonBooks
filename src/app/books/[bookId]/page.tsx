import ReadButton from "@/app/buttons/ReadButton";
import WishListButton from "@/app/buttons/WishListButton";
import Book from "@/app/types/books";
import Image from "next/image";
import Link from "next/link";

interface IBookSingleProps {
    params: Promise<
        {
            bookId: string
        }
    >
}

const page = async ({ params }: IBookSingleProps) => {
    const { bookId } = await params

    const getBooks = await fetch('http://localhost:3000/booksData.json')
        .then(res => res.json())

    const book: Book = getBooks.find((book: Book) => { return String(book.bookId) === String(bookId) })

    return (
        <section className="p-5 lg:p-0">
            <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1 bg-slate-200 max-w-300 p-5 rounded-xl mt-10 items-center justify-center">
                <div className="w-full max-w-115 mx-auto flex items-center justify-center mb-5 lg:mb-0">
                    <Image src={book.image} alt={book.bookName} width={200} height={200} className="w-full h-auto"></Image>
                </div>
                <div>
                    <h1 className="text-xl font-semibold my-2">{book.bookName}</h1>
                    <span>By:
                        <span className="font-semibold ml-2">
                            {book.author}
                        </span>
                    </span>
                    <hr className="w-full mt-2" />
                    <h2 className="my-2 font-semibold">{book.category}</h2>
                    <hr className="w-full" />
                    <p className="my-5"><span className="font-semibold text-xl">Review: </span>{book.review}</p>
                    <h2 className="flex gap-5 items-center">
                        <span className="font-semibold">Tag:</span>
                        {book.tags.map((tag, index) => (
                            <div className="bg-slate-300 px-3 rounded-xl py-1" key={index}>
                                <span className="text-green-600 font-semibold">
                                    #{tag}
                                </span>
                            </div>
                        ))}
                    </h2>
                    <hr className="w-full my-5" />
                    <div className="mb-5 flex flex-col gap-5">
                        <p>Number of Pages:
                            <span className="text-xl font-semibold ml-2">
                                {book.totalPages}
                            </span>
                        </p>
                        <p>Publisher:
                            <span className="text-xl font-semibold ml-2">
                                {book.publisher}
                            </span>
                        </p>
                        <p>Year of Publishing:
                            <span className="text-xl font-semibold ml-2">
                                {book.yearOfPublishing}
                            </span>
                        </p>
                        <p>Rating:
                            <span className="text-xl font-semibold ml-2">
                                {book.rating}
                            </span>
                        </p>
                    </div>
                    <div className="flex gap-5">

                        <ReadButton book={book}></ReadButton>
                        <WishListButton book={book}></WishListButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default page;