import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex flex-row text-3xl justify-between">
        <li>RYAN SPENCER</li>
        <div className="flex flex-row justify-evenly">
          <li className="px-8">About</li>
          <li className="px-8">Blog</li>
          <li className="px-8">
            <FaGithub />
          </li>
          <li className="px-8">
            <FaLinkedin />
          </li>
        </div>
      </ul>
    </nav>
  );
}
