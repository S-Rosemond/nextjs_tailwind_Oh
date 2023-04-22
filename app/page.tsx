import { Inter } from "next/font/google";
import ImageCard from "./components/ImageCard";

const inter = Inter({ subsets: ["latin"] });

const image = [
  "/taylor-smith-Nike-unsplash.jpg",
  "/ervan-new-balance-unsplash.jpg",
  "/rachael-converse-unsplash.jpg",
  "/mayur-reebok-unsplash.jpg",
  "/the-puma-unsplash.jpg",
  "/tom-fila-unsplash.jpg",
];

export default function Home() {
  return (
    <>
      <main className="container">
        <h1 className="text-4xl text-center font-semibold px-5 mb-10">
          <span className="text-center w-full">Kyx</span> <br />
          Any brand and style shipped globally.
        </h1>
      </main>
      <section className="grid md:grid-cols-2 gap-5">
        <ImageCard image={image[0]} brand="none" />
        <ImageCard image={image[1]} brand="none" />
        <ImageCard image={image[2]} brand="none" />
        <ImageCard image={image[3]} brand="none" />
        <ImageCard image={image[4]} brand="none" />
        <ImageCard image={image[5]} brand="none" />
      </section>
    </>
  );
}
