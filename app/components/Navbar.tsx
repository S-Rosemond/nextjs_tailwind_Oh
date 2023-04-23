"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function useSelectedNavElement(href: string) {
  const pathName = usePathname();

  return href === pathName ? "nav__btn-selected" : "";
}

function Navbar() {
  return (
    <>
      <header className="custom-container header mb-5">
        <nav className="nav">
          <Link href="/" className={`nav__btn ${useSelectedNavElement("/")}`}>
            Home
          </Link>
          <Link
            href="/shop"
            className={`nav__btn ${useSelectedNavElement("/shop")}`}
          >
            Shop
          </Link>
          <Link
            href="/contact"
            className={`nav__btn ${useSelectedNavElement("/contact")}`}
          >
            Contact
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
