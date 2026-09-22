import Image from "next/image";
import Link from "next/link";
import BannerImg from "@/assets/hero_img.jpg"

const Banner = () => {
    return (
        <section className="container mx-auto">
            <div>
                <div className="flex flex-col space-y-3">
                    <h2>Books to freshen up <br /> your bookshelf</h2>
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