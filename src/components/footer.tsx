import { Link } from "react-router-dom";
import InstagramIcon from "./icons/instagram";
import LinkedinIcon from "./icons/linkedin";

function Footer() {

  return (
    <footer className="mb-16 mt-8 bg-black text-white lg:pl-32 lg:pr-32 p-4">
      <div className="flex w-full items-center justify-between">
        <div className="mr-4 flex items-center">
            <Link to="/" className="text-2xl text-white font-extrabold tracking-tight menlo transition-colors">
              nameblank
            </Link>
          </div>
          <div className="mx-4 my-4 h-0.5 w-full bg-white"></div>
        <div className="flex items-center justify-center">
          <Link to="https://instagram.com/nameblankfillhere" target="_blank" rel="noopener noreferrer">
            <InstagramIcon className="ml-4 mr-4 h-6 w-6 text-gray-400 hover:text-white" />
          </Link>
          <Link to="https://www.linkedin.com/in/ezekielfeinglass" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon className="mb-1 ml-4 mr-4 h-6 w-6 text-gray-400 hover:text-white" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
