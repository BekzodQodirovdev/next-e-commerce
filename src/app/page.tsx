import { Advertising } from "./_components/Advertising";
import { Blog } from "./_components/Blog";
import { Hero } from "./_components/Hero";
import { Product } from "./_components/Product";

export default function Home() {
    return (
        <>
            <Hero />
            <Product />
            <Advertising />
            <Blog />
        </>
    );
}
