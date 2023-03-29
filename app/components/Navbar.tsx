import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex flex-row text-3xl justify-between">
        <li>Ryan Spencer</li>
        <div className="flex flex-row">
          <li>About</li>
          <li>Blog</li>
          <li>
            <FaGithub />
          </li>
          <li>
            <FaLinkedin />
          </li>
        </div>
      </ul>
    </nav>
  );
}
