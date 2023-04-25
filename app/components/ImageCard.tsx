import Image from "next/image";
import { ImArrowUpRight2 } from "react-icons/im";

type Props = {
  image: string;
  brand: string;
  altText?: string;
  idName: string;
};

function ImageCard({ image, brand, idName, altText = "" }: Props) {
  return (
    <div className="first-mask aspect-h-2 aspect-w-1">
      <div className="second-mask" />
      <label className="image-label" htmlFor={idName}>
        {brand}
      </label>
      <button id={idName} className="btn-up-right">
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
