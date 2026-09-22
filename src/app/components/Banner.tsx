import Image from "next/image";
import Link from "next/link";
import BannerImg from "@/assets/hero_img.jpg"

const Banner = () => {
    return (
        <section className="container mx-auto lg:mt-20 mt-5 p-10 lg:p-0">
            <div className="grid lg:grid-cols-2 grid-cols-1 mx-auto bg-slate-300 rounded-xl p-10 lg:p-20 items-center justify-center max-w-300 gap-5">
                <div className="flex flex-col text-center gap-5">
                    <h2 className="text-4xl font-semibold">Books to freshen up <br /> your bookshelf</h2>
                    <Link href={"/"}>
                        <button className="btn bg-green-500 hover:bg-green-700 text-white"> View The List</button>
                    </Link>
                </div>
                <div>
                    <Image src={BannerImg} alt="Banner Image"></Image>
                </div>
            </div>
        </section>
    );
};

export default Banner;