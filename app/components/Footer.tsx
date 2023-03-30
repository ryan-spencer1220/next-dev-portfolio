"use client";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Navbar() {
  return (
    <footer>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <p className="text-slate-600">
        Built with TypeScript, Tailwind, & Next.js
      </p>
    </footer>
  );
}
