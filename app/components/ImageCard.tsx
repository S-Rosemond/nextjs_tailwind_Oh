type ImageCard = {
  image: string;
  brand: string;
  altText?: string;
};

function ImageCard({ image, brand, altText = "" }: ImageCard) {
  return (
    <div className="aspect-h-2 aspect-w-1 rounded-lg container bg-black">
      <img
        src={image}
        alt={altText}
        className="object-cover object-center rounded-lg aspect-[1/2] hover:blur-sm"
      />
    </div>
  );
}

export default ImageCard;
