import Image from "next/image";

type ImageCard = {
  image: string;
  brand: string;
  altText?: string;
};

function ImageCard({ image, brand, altText = "" }: ImageCard) {
  return (
    <div className="aspect-h-2 aspect-w-1 rounded-lg transition-all container relative">
      <div className="masking"></div>
      <Image
        src={image}
        alt={altText}
        height="427"
        width="640"
        className="image-card"
      />
    </div>
  );
}

export default ImageCard;
