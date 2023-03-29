"use client";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const currentPath = usePathname();

  return (
    <nav>
      <ul className="flex flex-row text-2xl justify-between">
        <li>RYAN SPENCER</li>
        <div className="flex flex-row justify-evenly">
          <li className="px-6">About</li>
          <li className="px-6">Projects</li>
          {currentPath === "/" && (
            <>
              <li className="px-6">Blog</li>
              <li className="px-6">Contact</li>
            </>
          )}
          {currentPath !== "/" && (
            <>
              <li className="px-6">
                <FaGithub />
              </li>
              <li className="px-6">
                <FaLinkedin />
              </li>
            </>
          )}
        </div>
      </ul>
    </nav>
  );
}
