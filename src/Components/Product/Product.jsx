import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { ShoppingCart } from "lucide-react";

const Product = () => {

    const [active, setActive] = useState({
        id: 0,
        product: 'all'
    });

    const productTitle = [
        {
            id: 0,
            title: "all",
            product: 'all'
        },
        {
            id: 1,
            title: "newest",
            product: 'newest'
        },
        {
            id: 2,
            title: "trending",
            product: 'trending'
        },
        {
            id: 3,
            title: "best seller",
            product: 'best_seller'
        },
    ];

    const products = [
        {
            title: 'library stool',
            status: 'Chair',
            image: '/src/assets/chair/chair1.png',
            product: 'newest',
        },
        {
            title: 'library stool Chair',
            status: 'Table',
            image: '/src/assets/table/terrazzo/terrazzo_table1.png',
            product: 'newest',
        },
        {
            title: 'library stool',
            status: 'Booth',
            image: '/src/assets/Booths/booth1.png',
            product: 'newest',
        },
        {
            title: 'library stool Chair',
            status: 'Sofa',
            image: '/src/assets/sofa/sofa1.png',
            product: 'newest',
        },

        {
            title: 'library stool Chair',
            status: 'Chair',
            image: '/src/assets/chair/chair2.png',
            product: 'trending',
        },
        {
            title: 'library stool',
            status: 'Booth',
            image: '/src/assets/Booths/booth2.png',
            product: 'trending',
        },
        {
            title: 'library stool Chair',
            status: 'Table',
            image: '/src/assets/table/terrazzo/terrazzo_table2.png',
            product: 'trending',
        },
        {
            title: 'library stool Chair',
            status: 'Sofa',
            image: '/src/assets/sofa/sofa2.png',
            product: 'trending',
        },
        {
            title: 'library stool',
            status: 'Sofa',
            image: '/src/assets/sofa/sofa3.png',
            currentPrice: '$200',
            product: 'best_seller',
        },
        {
            title: 'library stool Chair',
            status: 'Booth',
            image: '/src/assets/Booths/booth3.png',
            product: 'best_seller',
        },
        {
            title: 'library stool Chair',
            status: 'Table',
            image: '/src/assets/table/terrazzo/terrazzo_table3.png',
            product: 'best_seller',
        },
        {
            title: 'library stool Chair',
            status: 'Chair',
            image: '/src/assets/chair/chair3.png',
            product: 'best_seller',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            image: '/src/assets/products/product_6.png',
            product: 'featured',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            image: '/src/assets/products/product_7.png',
            product: 'featured',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            image: '/src/assets/products/product_8.png',
            product: 'featured',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            image: '/src/assets/products/product_1.png',
            product: 'featured',
        },
        {
            title: 'library stool Chair',
            status: 'Chair',
             image: '/src/assets/chair/chair2.png',
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Booth',
            image: '/src/assets/Booths/booth2.png',
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Stool',
            image: '/src/assets/Barstool/stool2.png',
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Sofa',
            image: '/src/assets/sofa/sofa2.png',
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Sofa',
             image: '/src/assets/sofa/sofa3.png',
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Table',
            image: '/src/assets/table/terrazzo/terrazzo_table3.png',
            product: 'all',
          },
          {
            title: 'library stool Chair',
            status: 'Booth',
            image: '/src/assets/Booths/booth3.png',
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Chair',
            image: '/src/assets/chair/chair3.png',
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Chair',
            image: '/src/assets/chair/chair1.png',
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Booth',
            image: '/src/assets/Booths/booth1.png',
            product: 'all',
          },
          {
            title: 'library stool Chair',
            status: 'Table',
            image: '/src/assets/table/terrazzo/terrazzo_table1.png',
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Sofa',
            image: '/src/assets/sofa/sofa1.png',
            product: 'all',
        },
    ];


    const productFilter = products.filter(product => product.product === active?.product);

    return (
       <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
  {/* Title & Filter Buttons */}
  <div className="flex flex-col items-center justify-center">
    <SectionTitle title="our product" textAlign="center" mb="mb-5" />

    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-11">
      {productTitle?.map((title, indx) => (
        <button
          key={title?.id}
          onClick={() =>
            setActive({
              id: title?.id,
              product: title?.product,
            })
          }
          className={`text-sm sm:text-base font-black uppercase font-inter cursor-pointer transition-colors ${
            active?.id === indx ? 'text-[#272343]' : 'text-[#9a9caa]'
          }`}
        >
          {title?.title}
        </button>
      ))}
    </div>
  </div>

  {/* Product Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
    {productFilter?.map((product, index) => (
      <div key={index} className="p-4 bg-white shadow-sm rounded-xl">
        <div className="feature_image mb-4 relative">
          <img
            className="w-full h-[260px] sm:h-[280px] md:h-[300px] object-cover rounded-lg"
            src={product?.image}
            alt={product?.title}
          />
          {product?.status && (
            <div className="absolute top-4 left-4 bg-[#007580] text-white px-2 py-1 rounded-lg text-xs">
              {product?.status}
            </div>
          )}
        </div>

        <div className="feature_content">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm sm:text-base text-[#007580] capitalize font-inter font-medium">
              {product?.title}
            </h4>
            <span className="bg-[#007580] h-[40px] w-[100px] rounded-lg flex items-center justify-center">
              Book Now
            </span>
          </div>
          <p className="text-base sm:text-lg flex items-center gap-2 text-[#272343] font-semibold font-inter">
            {product?.price}
            {product?.currentPrice && (
              <span className="text-xs sm:text-sm text-[#9a9caa] font-normal line-through">
                {product?.currentPrice}
              </span>
            )}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

    );
};

export default Product;