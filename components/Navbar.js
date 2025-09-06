"use client"
import React, { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="flex justify-between items-center px-6 py-3">
        <div className="text-2xl font-extrabold text-green-600">
          BITLINKS
        </div>

        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/generate">Shorten</Link></li>
        </ul>

        <div className="hidden md:flex gap-4">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition">
            Try Now
          </button>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition"
          >
            GitHub
          </a>
        </div>

        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/shorten">Shorten</Link></li>
            <li><Link href="/generate">Generate</Link></li>
          </ul>
          <div className="flex flex-col gap-3 pt-4">
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition">
              Try Now
            </button>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition"
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
