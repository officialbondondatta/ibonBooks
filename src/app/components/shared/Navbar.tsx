import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
    const navLinks = <>
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/books"}>Books</Link></li>
        <li><Link href={"/listedbooks"}>Listed Books</Link></li>
        <li><Link href={"/"}>Pages to Read</Link></li>
    </>
    return (
        <nav className="bg-slate-200">
            <div className="container mx-auto navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <GiHamburgerMenu className="text-2xl text-sky-500"></GiHamburgerMenu>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu bg-sky-200 text-slate-700 font-bold underline line-clamp-2 dropdown-content fixed inset-x-0 top-16 z-1 w-screen max-w-none shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <Link href={"/"} className="btn btn-ghost text-xl">iBonBooks</Link>
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