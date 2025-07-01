import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../admin/api";
import SectionTitle from "../SectionTitle/SectionTitle";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState({ id: 0, product: "all" });
  const navigate = useNavigate();

  const productTitle = [
    { id: 0, title: "all", product: "all" },
    { id: 1, title: "newest", product: "newest" },
    { id: 2, title: "trending", product: "trending" },
    { id: 3, title: "best seller", product: "best_seller" },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await API.get("/products");
        setProducts(res.data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };
    fetchProducts();
  }, []);

  const productFilter =
    active.product === "all"
      ? products
      : products.filter((p) => p.productType === active.product);

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center">
        <SectionTitle title="our product" textAlign="center" mb="mb-5" />

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-11">
          {productTitle.map((title, indx) => (
            <button
              key={title.id}
              onClick={() => setActive({ id: title.id, product: title.product })}
              className={`text-sm sm:text-base font-black uppercase font-inter cursor-pointer transition-colors ${
                active.id === indx ? "text-[#272343]" : "text-[#9a9caa]"
              }`}
            >
              {title.title}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {productFilter.map((product, index) => (
          <div key={index} className="p-4 bg-white shadow-sm rounded-xl">
            <div className="feature_image mb-4 relative">
              <img
                className="w-full h-[260px] sm:h-[280px] md:h-[300px] object-cover rounded-lg"
                src={`http://localhost:8000${product.image}`}
                alt={product.productName}
              />
              {product.category && (
                <div className="absolute top-4 left-4 bg-[#007580] text-white px-2 py-1 rounded-lg text-xs">
                  {product.category}
                </div>
              )}
            </div>

            <div className="feature_content">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm sm:text-base text-[#007580] capitalize font-inter font-medium">
                  {product.productName}
                </h4>
                <span
                  className="bg-[#007580] h-[40px] w-[100px] rounded-lg flex items-center justify-center cursor-pointer"
                  onClick={() => navigate(`/product/productDetail/${product._id}`)}
                >
                  Order Now
                </span>
              </div>
              <p className="text-base sm:text-lg text-[#272343] font-semibold font-inter">
                ₹{product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
