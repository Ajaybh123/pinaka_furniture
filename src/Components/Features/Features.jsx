import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import './feature.css'; 

import Feature1 from '/src/assets/Barstool/stool9.png';
import Feature2 from '/src/assets/Booths/booth4.png';
import Feature3 from '/src/assets/chair/chair4.png';
import Feature4 from '/src/assets/sofa/sofa4.png';
import Feature5 from '/src/assets/table/metal/metal_table1.png';
import Feature6 from '/src/assets/sofa/banner4.png';
import Feature7 from '/src/assets/Barstool/stool6.png';
import Feature8 from '/src/assets/table/terrazzo/terrazzo_table4.png';


const Card = ({ image, title, status }) => (
  <div className="card-container">
    {status && <span className="card-category">{status}</span>}
    <img src={image} alt={title} className="card-image" />
    <div className="card-content">
      <h3 className="card-title">{title}</h3>
      <button className="book-now-button">Book Now</button>
    </div>
  </div>
);

const Features = () => {
  const settings = {
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
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0 
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      }
    ]
  };

  const cardsData = [
    {
            title: 'library stool',
            status: 'Bar Stool',
            image: Feature1,
        },
        {
            title: 'library stool Chair',
            status: 'Booth',
            image: Feature2,
        },
        {
            title: 'library stool Chair',
            status: 'Chair',
            image: Feature3,
        },
        {
            title: 'library stool Chair',
            status: 'Sofa',
            image: Feature4,
        },
        {
            title: 'library stool',
            status: 'Table',
            image: Feature5,
        },
        {
            title: 'library stool Chair',
            status: 'Sofa',
            image: Feature6,
        },
        {
            title: 'library stool Chair',
            status: 'Bar Stool',
            image: Feature7,
        },
        {
            title: 'library stool Chair',
            status: 'Table',
            image: Feature8,
        },
  ];

  return (
    <div className="app-container">
      <SectionTitle title="Featured Products" mb="mb-11" />
      <Slider {...settings}>
        {cardsData.map(card => (
          <Card key={card.id} {...card} />
        ))}
      </Slider>
    </div>
  );
};

export default Features;