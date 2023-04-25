import ImageCard from "./components/ImageCard";

const image = [
  {
    image: "/taylor-smith-Nike-unsplash.jpg",
    brand: "Nike",
    idName: "Nike_label",
    altText: "A Pair of red white and black Nike shoes",
  },
  {
    image: "/ervan-new-balance-unsplash.jpg",
    brand: "New Balance",
    idName: "NB_label",
    altText: "A pair of Grey white dark grey accented New Balance Sneakers",
  },
  {
    image: "/rachael-converse-unsplash.jpg",
    brand: "Converse",
    idName: "Converse_label",
    altText: "Classic black and white Converse sneakers",
  },
  {
    image: "/mayur-reebok-unsplash.jpg",
    brand: "Reebok",
    idName: "Reebok_label",
    altText: "Black Reebok sneaker overlaid with white stripes",
  },
  {
    image: "/the-puma-unsplash.jpg",
    brand: "Puma",
    idName: "Puma_label",
    altText: "Classic white Puma with black label on the side",
  },
  {
    image: "/tom-fila-unsplash.jpg",
    brand: "Fila",
    idName: "Fila_label",
    altText: "Classic white Fila sneakers",
  },
];

export default function Home() {
  return (
    <>
      <main className="custom-container">
        <h1 className="text-4xl text-center font-semibold px-5 mb-10">
          <span className="text-center w-full">Kyx</span> <br />
          Any brand and style shipped globally.
        </h1>
      </main>
      <section className="grid lg:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-8 xl:gap-y-10 items-center justify-items-center">
        <ImageCard
          image={image[0].image}
          brand={image[0].brand}
          idName={image[0].idName}
        />
        <ImageCard
          image={image[1].image}
          brand={image[1].brand}
          idName={image[1].idName}
        />
        <ImageCard
          image={image[2].image}
          brand={image[2].brand}
          idName={image[2].idName}
        />
        <ImageCard
          image={image[3].image}
          brand={image[3].brand}
          idName={image[3].idName}
        />
        <ImageCard
          image={image[4].image}
          brand={image[4].brand}
          idName={image[4].idName}
        />
        <ImageCard
          image={image[5].image}
          brand={image[5].brand}
          idName={image[5].idName}
        />
      </section>
    </>
  );
}
