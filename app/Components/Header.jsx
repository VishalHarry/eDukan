import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-[#172A45] text-[#E6F1FF] shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-[#64FFDA]">eDukan</h1>
        <nav className="flex items-center space-x-6">
          <Link href="/" className="hover:text-[#4ECCA3] transition">Home</Link>
          <Link href="/products" className="hover:text-[#4ECCA3] transition">Products</Link>
          <Link href="/products" className="hover:text-[#4ECCA3] transition">Product Details</Link>
          <Link href="/about" className="hover:text-[#4ECCA3] transition">About</Link>
          <Link href="/contact" className="px-4 py-2 bg-[#64FFDA] text-[#0A192F] rounded-md hover:bg-[#4ECCA3] transition">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
