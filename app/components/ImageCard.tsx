import Image from "next/image";
import Link from "next/link";
import { ImArrowUpRight2 } from "react-icons/im";

type Props = {
  image: string;
  brand: string;
  altText?: string;
  idName: string;
};

// relative w-full h-full
//image: fill

function ImageCard({ image, brand, idName, altText = "" }: Props) {
  const url = process.env.NEXT_PUBLIC_URL + brand;
  return (
    <Link href={url} className="first-mask aspect-h-2 aspect-w-1">
      <div className="second-mask" />
      <article className="image-label">{brand}</article>
      <div className="btn-up-right">
        <ImArrowUpRight2 />
      </div>
      <Image
        src={image}
        alt={altText}
        height="427"
        width="640"
        className="image-card"
      />
    </Link>
  );
}

export default ImageCard;
