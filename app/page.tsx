import ImageCard, { ImageCardProp } from "./components/ImageCard";

const getStaticImage = async () => {
  /**
   * solution below
   * https://www.youtube.com/watch?v=pfHjxyeCHRs&t=5269s
   */
  const imageArray: ImageCardProp[] = [
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

  const formattedImageArray = await Promise.all(
    imageArray.map((el) => {
      const formattedImage = require(`../public${el.image}`);
      el = { ...el, image: formattedImage.default };

      return el;
    })
  );
  return formattedImageArray;
};

export default async function Home() {
  const imageCards = await getStaticImage();

  const mapImageCard = (): any | Promise<JSX.Element>[] => {
    return imageCards.map(async (el) => {
      return (
        <ImageCard
          key={el.brand}
          image={el.image}
          brand={el.brand}
          idName={el.idName}
          altText={el.altText}
        />
      );
    });
  };

  return (
    <>
      <main className="custom-container">
        <h1 className="text-4xl text-center font-semibold px-5 mb-10">
          <span className="text-center w-full">Kyx</span> <br />
          Any brand and style shipped globally.
        </h1>
      </main>
      <section className="grid lg:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-8 xl:gap-y-10 items-center justify-items-center">
        {mapImageCard()}
      </section>
    </>
  );
}
