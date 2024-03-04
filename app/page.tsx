import GameSlider from "@/app/components/slider";
import ApplePre from "@/app/components/applepreview";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export default function Home() {
    return (
        <main>
            <Navbar />
            <GameSlider />
            <ApplePre />
            <Footer />
        </main>
    );
}