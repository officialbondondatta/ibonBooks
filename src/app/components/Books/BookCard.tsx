import Image from "next/image";
import Book from "@/app/types/books";

interface IBooks {
    book: Book;
}

const BookCard = ({ book }: IBooks) => {
    return (
        <div className="group flex h-full max-w-100 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900">
            {/* Book Cover */}
            <div className="relative h-72 w-full overflow-hidden bg-gray-100">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Category */}
                <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-800 shadow backdrop-blur-sm">
                        {book.category}
                    </span>
                </div>

                {/* Rating */}
                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
                    <span className="text-yellow-400">★</span>
                    {book.rating}
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5">
                {/* Title & Author */}
                <div>
                    <h2 className="line-clamp-1 text-xl font-bold text-gray-900 dark:text-white">
                        {book.bookName}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        by <span className="font-medium">{book.author}</span>
                    </p>
                </div>

                {/* Review */}
                <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                    {book.review}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-md bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Bottom Info */}
                <div className="mt-auto border-t border-gray-100 pt-4 dark:border-gray-800">
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                        <span>{book.totalPages} pages</span>
                        <span>{book.yearOfPublishing}</span>
                    </div>

                    <button className="mt-4 w-full rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 active:scale-[0.98]">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
