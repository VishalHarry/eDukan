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
  const [price, setPrice] = useState(0);

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

  const updatePrice = (color, size) => {
    let newPrice = product?.price || 0;
    if (color) newPrice += 5;
    if (size) newPrice += 3;
    return newPrice;
  };

  const handleOptionChange = (optionType, value) => {
    if (optionType === "color") setSelectedColor(value);
    if (optionType === "size") setSelectedSize(value);
    setPrice(updatePrice(selectedColor, selectedSize));
  };

  if (loading) return <p className="text-center text-lg">Loading product...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-[#1B314F] text-[#E6F1FF] py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row bg-[#0A192F] p-6 rounded-lg shadow-lg mt-20">
          {/* Image Section */}
          <div className="flex justify-center items-center w-full md:w-1/2 p-4">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-80 object-contain"
            />
          </div>

          {/* Product Details Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <h1 className="text-3xl font-bold text-[#64FFDA]">{product.title}</h1>
            <p className="text-lg text-gray-300 mt-3">{product.description}</p>
            <p className="text-2xl font-bold text-[#64FFDA] mt-3">${price.toFixed(2)}</p>
            <p className="text-md text-gray-400 mt-2">Category: {product.category}</p>

            {/* Product Customization Options */}
            <div className="mt-4">
              <label className="block text-sm font-semibold">Select Color:</label>
              <select 
                className="mt-1 p-2 bg-[#0A192F] border border-[#64FFDA] rounded-md" 
                value={selectedColor} 
                onChange={(e) => handleOptionChange("color", e.target.value)}
              >
                <option value="">Choose Color</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Black">Black</option>
              </select>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-semibold">Select Size:</label>
              <select 
                className="mt-1 p-2 bg-[#0A192F] border border-[#64FFDA] rounded-md" 
                value={selectedSize} 
                onChange={(e) => handleOptionChange("size", e.target.value)}
              >
                <option value="">Choose Size</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
              </select>
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
