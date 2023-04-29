import ImageCard from "./components/ImageCard";

export default async function Home() {
  const mapImageCard = async () => {
    const imageArray = [
      {
        image: require(`../public/taylor-smith-Nike-unsplash.jpg`),
        brand: "Nike",
        idName: "Nike_label",
        altText: "A Pair of red white and black Nike shoes",
      },
      {
        image: require(`../public/ervan-new-balance-unsplash.jpg`),
        brand: "New Balance",
        idName: "NB_label",
        altText: "A pair of Grey white dark grey accented New Balance Sneakers",
      },
      {
        image: require(`../public/rachael-converse-unsplash.jpg`),
        brand: "Converse",
        idName: "Converse_label",
        altText: "Classic black and white Converse sneakers",
      },
      {
        image: require(`../public/mayur-reebok-unsplash.jpg`),
        brand: "Reebok",
        idName: "Reebok_label",
        altText: "Black Reebok sneaker overlaid with white stripes",
      },
      {
        image: require(`../public/the-puma-unsplash.jpg`),
        brand: "Puma",
        idName: "Puma_label",
        altText: "Classic white Puma with black label on the side",
      },
      {
        image: require(`../public/tom-fila-unsplash.jpg`),
        brand: "Fila",
        idName: "Fila_label",
        altText: "Classic white Fila sneakers",
      },
    ];

    return imageArray.map(async (el) => {
      /**
       require can wrap around imagePath of obj[] like above
       alternative solutions below
       const image = require(`../public${el.image}`);
       image={image} or third solution at youtube link
       https://www.youtube.com/watch?v=pfHjxyeCHRs&t=5269s */

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
