"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function setSelectedNavElement(href: string) {
  const pathName = usePathname();

  return href === pathName ? "nav__btn-selected" : "";
}

function Navbar() {
  return (
    <>
      <header className="container header mb-5">
        <nav className="nav">
          <Link href="/" className={`nav__btn ${setSelectedNavElement("/")}`}>
            Home
          </Link>
          <Link
            href="/shop"
            className={`nav__btn ${setSelectedNavElement("/shop")}`}
          >
            Shop
          </Link>
          <Link
            href="/contact"
            className={`nav__btn ${setSelectedNavElement("/contact")}`}
          >
            Contact
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
