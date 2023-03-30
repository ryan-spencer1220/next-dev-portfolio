"use client";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function Navbar() {
  const currentPath = usePathname();

  return (
    <nav>
      <ul className="flex flex-row text-2xl justify-between content-center">
        <Link href="/">
          <li>RYAN SPENCER</li>
        </Link>
        <div className="flex flex-row justify-evenl content-center">
          <Link href="/about">
            <li className="px-6">About</li>
          </Link>
          <Link href="/projects">
            <li className="px-6">Projects</li>
          </Link>
          {currentPath === "/" && (
            <>
              <Link href="/blog">
                <li className="px-6">Blog</li>
              </Link>
              <RoughNotation type="box" show={true} color="black">
                <Link href="/contact">
                  <li className="px-6">Contact</li>
                </Link>
              </RoughNotation>
            </>
          )}
          {currentPath !== "/" && (
            <div className="grid grid-cols-2 content-center">
              <li className="px-6">
                <Link href="https://github.com/ryan-spencer1220">
                  <FaGithub />
                </Link>
              </li>
              <li className="px-6">
                <Link href="https://www.linkedin.com/in/ryan-spencer-pdx/">
                  <FaLinkedin />
                </Link>
              </li>
            </div>
          )}
        </div>
      </ul>
    </nav>
  );
}
