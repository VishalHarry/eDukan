import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#0A192F] text-[#E6F1FF]  w-full">
      <section className="flex flex-col items-center text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#64FFDA]">
          Your Ultimate Shopping Destination
        </h1>
        <p className="text-lg md:text-xl mt-4 max-w-2xl">
          Shop top-quality products with fast delivery and unbeatable prices.
        </p>
        <a
          href="/products"
          className="mt-6 px-6 py-3 bg-[#64FFDA] text-[#0A192F] rounded-md text-lg font-semibold hover:bg-[#4ECCA3] transition"
        >
          Start Shopping
        </a>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-[#64FFDA] mb-8 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-[#112240] p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
            <Image
              src=""
              alt="Wireless Headphones"
              width={300}
              height={200}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">Wireless Headphones</h3>
            <p className="text-sm mt-2">High-quality sound with noise cancellation.</p>
            <p className="mt-2 font-semibold text-[#64FFDA]">$99</p>
            <a href="/product/1" className="mt-4 block text-sm text-[#64FFDA] hover:text-[#4ECCA3]">
              View Details →
            </a>
          </div>
          <div className="bg-[#112240] p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
            <Image
              src=""
              alt="Smart Fitness Band"
              width={300}
              height={200}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">Smart Fitness Band</h3>
            <p className="text-sm mt-2">Track your fitness with real-time monitoring.</p>
            <p className="mt-2 font-semibold text-[#64FFDA]">$19</p>
            <a href="/product/2" className="mt-4 block text-sm text-[#64FFDA] hover:text-[#4ECCA3]">
              View Details →
            </a>
          </div>
          <div className="bg-[#112240] p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
            <Image
              src=""
              alt="Portable Bluetooth Speaker"
              width={300}
              height={200}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">Bluetooth Speaker</h3>
            <p className="text-sm mt-2">Powerful bass with crystal-clear sound.</p>
            <p className="mt-2 font-semibold text-[#64FFDA]">$999</p>
            <a href="/product/3" className="mt-4 block text-sm text-[#64FFDA] hover:text-[#4ECCA3]">
              View Details →
            </a>
          </div>
        </div>
      </section>
      <section className="bg-[#112240] py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold text-[#64FFDA]">Why Shop with Us?</h2>
        <p className="max-w-3xl mx-auto mt-4 text-lg">
          We bring you high-quality, hand-picked products at unbeatable prices.
          Fast delivery, secure payments, and top-notch customer support make eDukan your best shopping choice.
        </p>
      </section>

      
     
    </main>
  );
}
