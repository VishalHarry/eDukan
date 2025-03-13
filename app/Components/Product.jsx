"use client";
import Link from "next/link";

import { useState, useEffect } from "react";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const [menResponse, womenResponse] = await Promise.all([
                    fetch("https://fakestoreapi.com/products/category/men's clothing"),
                    fetch("https://fakestoreapi.com/products/category/women's clothing"),
                ]);

                const menClothing = await menResponse.json();
                const womenClothing = await womenResponse.json();

                const clothingProducts = [...menClothing, ...womenClothing];

                console.log("Here are the clothing products:", clothingProducts);
                setProducts(clothingProducts);
            } catch (error) {
                console.error("Error fetching clothing products:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    return (
        <div className="min-h-screen bg-[#1b4176] text-[#E6F1FF] py-10">
            <div className="max-w-6xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-center text-[#64FFDA] mb-8 mt-9">
                    Our Clothing Collection
                </h1>

                {loading ? (
                    <p className="text-center text-lg">Loading products...</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="bg-[#0A192F] p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105 flex flex-col justify-between h-[350px]"
                            >
                                <div className="flex justify-center items-center h-48">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="max-h-44 object-contain"
                                    />
                                </div>
                                <h2 className="text-lg font-semibold mt-2 line-clamp-2">
                                    {product.title}
                                </h2>
                                <p className="text-[#64FFDA] font-bold">${product.price}</p>

                                <Link href={`/product/${product.id}`}>
                                    <button className="mt-3 px-4 py-2 bg-[#64FFDA] text-[#0A192F] rounded-md hover:bg-[#4ECCA3] transition">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
