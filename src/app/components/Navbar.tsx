import Link from "next/link";
const Navbar = () => {
    const navLinks = <>
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/"}>Listed Books</Link></li>
        <li><Link href={"/"}>Pages to Read</Link></li>
    </>
    return (
        <nav className="bg-slate-200">
            <div className="container mx-auto navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">iBonBooks</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end flex gap-2">
                    <Link href={"/"}>
                        <button className="btn bg-green-500 hover:bg-green-700 text-white">Sign In</button>
                    </Link>
                    <Link href={"/"}>
                        <button className="btn bg-sky-400 text-white hover:bg-sky-500">Sign Up</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;