import { Inter } from "next/font/google";
import ImageCard from "./components/ImageCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="container">
        <h1 className="text-4xl text-center font-semibold px-5 mb-10">
          <span className="text-center w-full">Kyx</span> <br />
          Any brand and style shipped globally.
        </h1>
      </main>
      <section>
        <ImageCard image="/taylor-smith-Nike-unsplash.jpg" brand="none" />
      </section>
    </>
  );
}
