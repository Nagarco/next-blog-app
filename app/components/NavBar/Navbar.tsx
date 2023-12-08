import Link from 'next/link'
import React from 'react'
import './NavBar.css'
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto-flex justify-between display: flex sm:flex-row mx-auto">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link
            href="/"
            className="text-white/90 no-underline hover:text-white"
          >
            Omar An-naggar
          </Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
          <Link
            className="text-white/90 hover:text-white"
            href="https://www.linkedin.com/in/omar-mahmoud-1996omar/"
          >
            <FaLinkedin />
          </Link>

          <Link
            className="text-white/90 hover:text-white"
            href="https://github.com/Nagarco"
          >
            <FaGithub />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="https://www.facebook.com/profile.php?id=100016658357585"
          >
            <FaFacebook />
          </Link>
        </div>
      </div>
    </nav>
  );
}
