"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [price, setPrice] = useState(0);

  const colors = [
    { name: "Red", code: "#FF0000" },
    { name: "Blue", code: "#0000FF" },
    { name: "Black", code: "#000000" },
    { name: "Green", code: "#008000" },
  ];

  const sizes = ["S", "M", "L"];
  const materials = ["Cotton", "Leather", "Synthetic"];

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) throw new Error("Product not found");

        const data = await response.json();
        setProduct(data);
        setPrice(data.price);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  const handleSelection = (type, value) => {
    let basePrice = product?.price || 0;
    let extraPrice = 0;

    if (type === "color") setSelectedColor(value);
    if (type === "size") setSelectedSize(value);
    if (type === "material") setSelectedMaterial(value);

    if (selectedColor || type === "color") extraPrice += 5;
    if (selectedSize || type === "size") extraPrice += 3;
    if (selectedMaterial || type === "material") extraPrice += 7;

    setPrice(basePrice + extraPrice);
  };

  if (loading) return <p className="text-center text-lg">Loading product...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-[#1B314F] text-[#E6F1FF] py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row bg-[#0A192F] p-6 rounded-lg shadow-lg mt-20">
         
          <div className="flex justify-center items-center w-full md:w-1/2 p-4">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-80 object-contain"
            />
          </div>

        
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <h1 className="text-3xl font-bold text-[#64FFDA]">{product.title}</h1>
            <p className="text-lg text-gray-300 mt-3">{product.description}</p>
            <p className="text-2xl font-bold text-[#64FFDA] mt-3">${price.toFixed(2)}</p>
            <p className="text-md text-gray-400 mt-2">Category: {product.category}</p>

           
            <div className="mt-4">
              <p className="block text-sm font-semibold">Select Color:</p>
              <div className="flex space-x-3 mt-2">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    className={`w-10 h-10 rounded-full border-2 transition ${
                      selectedColor === color.name ? "border-[#64FFDA] scale-110" : "border-transparent"
                    }`}
                    style={{ backgroundColor: color.code }}
                    onClick={() => handleSelection("color", color.name)}
                  ></button>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <p className="block text-sm font-semibold">Select Size:</p>
              <div className="flex space-x-3 mt-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 rounded-md border-2 transition ${
                      selectedSize === size ? "border-[#64FFDA] bg-[#64FFDA] text-[#0A192F]" : "border-gray-500"
                    }`}
                    onClick={() => handleSelection("size", size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <p className="block text-sm font-semibold">Select Material:</p>
              <div className="flex space-x-3 mt-2">
                {materials.map((material) => (
                  <button
                    key={material}
                    className={`px-4 py-2 rounded-md border-2 transition ${
                      selectedMaterial === material ? "border-[#64FFDA] bg-[#64FFDA] text-[#0A192F]" : "border-gray-500"
                    }`}
                    onClick={() => handleSelection("material", material)}
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex space-x-4">
              <button className="px-6 py-2 bg-[#64FFDA] text-[#0A192F] rounded-md hover:bg-[#4ECCA3] transition">
                Add to Cart
              </button>
              <Link href="/products">
                <button className="px-6 py-2 border border-[#64FFDA] text-[#64FFDA] rounded-md hover:bg-[#4ECCA3] hover:text-[#0A192F] transition">
                  Back to Products
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
