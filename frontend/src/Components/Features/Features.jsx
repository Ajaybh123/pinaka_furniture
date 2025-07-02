import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../admin/api";
import SectionTitle from "../SectionTitle/SectionTitle";

const Features = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    try {
      const [catRes, prodRes] = await Promise.all([
        API.get("/categories"),
        API.get("/products?featured=true"),
      ]);
      setCategories(catRes.data || []);
      setFeaturedProducts(prodRes.data || []);
    } catch (err) {
      console.error("Error fetching data:", err.response?.data || err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full mx-auto px-4 lg:px-8 md:px-8 md:mx-12">
      <SectionTitle title="Featured product" textAlign="center" mb="mb-5" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Large Product */}
        {featuredProducts[0] && (
          <div className="md:col-span-6">
            <Link to={`/product/productDetail/${featuredProducts[0]._id}`}>
              <div className="relative rounded-xl overflow-hidden bg-slate-100 shadow hover:shadow-lg transition-shadow duration-300 h-[500px] flex items-center justify-center">
                <img
                  src={`https://pinaka-furnitureadmin.onrender.com${featuredProducts[0].image}`}
                  alt={featuredProducts[0].productName}
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent text-white p-4">
                  <div className="text-lg font-semibold">{featuredProducts[0].productName}</div>
                  <div className="text-sm">{featuredProducts[0].description}</div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Right Small Products */}
        <div className="md:col-span-6 grid md:grid-rows-2 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProducts.slice(1, 3).map((item, idx) => (
              <Link key={item._id} to={`/product/productDetail/${item._id}`}>
                <div className="relative rounded-xl overflow-hidden bg-slate-100 shadow hover:shadow-lg transition-shadow duration-300 h-[240px] flex items-center justify-center">
                  <img
                    src={`https://pinaka-furnitureadmin.onrender.com${item.image}`}
                    alt={item.productName}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent text-white p-3">
                    <div className="text-lg font-semibold">{item.productName}</div>
                    <div className="text-sm">{item.description}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Product */}
          {featuredProducts[3] && (
            <Link to={`/product/productDetail/${featuredProducts[3]._id}`}>
              <div className="relative rounded-xl overflow-hidden bg-slate-100 shadow hover:shadow-lg transition-shadow duration-300 h-[240px] flex items-center justify-center">
                <img
                  src={`https://pinaka-furnitureadmin.onrender.com${featuredProducts[3].image}`}
                  alt={featuredProducts[3].productName}
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent text-white p-3">
                  <div className="text-lg font-semibold">{featuredProducts[3].productName}</div>
                  <div className="text-sm">{featuredProducts[3].description}</div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Features;
