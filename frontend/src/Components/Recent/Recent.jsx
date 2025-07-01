import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import API from '../../admin/api'; // update path if needed
import './recent.css';

const Card = ({ image, title, status, id }) => {
  const navigate = useNavigate();

  return (
    <div className="card-container-recent">
      {status && <span className="card-category-recent">{status}</span>}
      <img src={`http://localhost:8000${image}`} alt={title} className="card-image-recent rounded-xl" />
      <div className="card-content-recent">
        <h3 className="card-title-recent">{title}</h3>
        <button
          onClick={() => navigate(`/product/productDetail/${id}`)}
          className="book-now-button-recent"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

const Features = () => {
  const [products, setProducts] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await API.get('/products');
        setProducts(res.data.slice(0, 10)); // recent 10 products
      } catch (error) {
        console.error('Failed to fetch recent products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="app-container-recent">
      <SectionTitle title="Recent Products" mb="mb-11" />
      <Slider {...settings}>
        {products.map((product) => (
          <Card
            key={product._id}
            id={product._id}
            image={product.image}
            title={product.productName}
            status={product.categoryName || product.materialType}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Features;
