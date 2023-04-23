import Image from "next/image";
import { ImArrowUpRight2 } from "react-icons/im";

type Props = {
  image: string;
  brand: string;
  altText?: string;
};

function ImageCard({ image, brand, altText = "" }: Props) {
  return (
    <div className="first-mask aspect-h-2 aspect-w-1">
      <div className="second-mask" />
      <button className="btn-up-right">
        <ImArrowUpRight2 />
      </button>
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
