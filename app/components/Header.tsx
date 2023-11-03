"use client";

import Image from "next/image";
import { Moon, Sun, Languages } from "lucide-react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <>
      <header className="bg-cream sticky top-8 w-full shadow-md rounded-custom z-50">
        <nav className="container mx-auto px-12 py-4">
          <div className="flex justify-between items-center">
            <Image
              src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/sembresjero-me-logo-black.svg"
              alt="Jérôme Sembres Portfolio - Black Logo"
              width={36}
              height={54}
            />
            <div className="flex space-x-4">
              <a href="#" className="text-gray-800">
                Projects
              </a>
              <a href="#" className="text-gray-800">
                About 3
              </a>
              <a href="#" className="text-gray-800">
                Contact
              </a>
            </div>
            <div className="flex space-x-4">
              <Sun />
              <Languages />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
