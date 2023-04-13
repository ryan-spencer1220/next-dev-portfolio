"use client";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { RoughNotation } from "react-rough-notation";

export default function Navbar() {
  const currentPath = usePathname();

  return (
    <nav>
      <ul className="sm:flex md:hidden text-2xl text-center py-8 px-20">
        <RoughNotation type="box" show={true} color="black">
          <Link href="/">
            <li>RYAN SPENCER</li>
          </Link>
        </RoughNotation>
      </ul>
      <ul className="md:flex hidden flex-row text-2xl justify-between content-center bg-white py-8 w-full">
        {currentPath === "/" && (
          <Link href="/">
            <li>RYAN SPENCER</li>
          </Link>
        )}
        {currentPath !== "/" && (
          <RoughNotation type="box" show={true} color="black">
            <Link href="/">
              <li>RYAN SPENCER</li>
            </Link>
          </RoughNotation>
        )}
        <div className="flex flex-row justify-evenl content-center">
          <Link href="/about">
            <li className="px-6">About</li>
          </Link>
          <Link href="/blog">
            <li className="px-10">Blog</li>
          </Link>
          {/* <Link href="/projects">
            <li className="px-6">Projects</li>
          </Link> */}
          {currentPath === "/" && (
            <>
              <RoughNotation type="box" show={true} color="black">
                <a href="mailto: ryan.spencer1220@gmail.com">
                  <li className="px-6">Contact</li>
                </a>
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
