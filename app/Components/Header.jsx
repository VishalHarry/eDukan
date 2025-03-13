"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" bg-[#172A45] text-[#E6F1FF] shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-[#64FFDA]">eDukan</h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-[#4ECCA3] transition">Home</Link>
          <Link href="/product" className="hover:text-[#4ECCA3] transition">Products</Link>
          <Link href="/about" className="hover:text-[#4ECCA3] transition">About</Link>
          <Link href="/contact" className="px-4 py-2 bg-[#64FFDA] text-[#0A192F] rounded-md hover:bg-[#4ECCA3] transition">
            Contact
          </Link>
        </nav>

       
        <button className="md:hidden text-[#E6F1FF]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
  
      {isOpen && (
        <div className="md:hidden bg-[#172A45] border-t border-[#64FFDA] py-4 px-6">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="hover:text-[#4ECCA3] transition" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/product" className="hover:text-[#4ECCA3] transition" onClick={() => setIsOpen(false)}>Products</Link>
           
            <Link href="/about" className="hover:text-[#4ECCA3] transition" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/contact" className="px-4 py-2 bg-[#64FFDA] text-[#0A192F] rounded-md hover:bg-[#4ECCA3] transition" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}