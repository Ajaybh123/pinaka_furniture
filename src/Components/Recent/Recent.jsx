import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import './recent.css'; 

const Card = ({ image, title, status }) => (
  <div className="card-container-recent">
    {status && <span className="card-category-recent">{status}</span>}
    <img src={image} alt={title} className="card-image-recent rounded-xl" />
    <div className="card-content-recent">
      <h3 className="card-title-recent">{title}</h3>
      <button className="book-now-button-recent">Book Now</button>
    </div>
  </div>
);

const Features = () => {
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
            image: '/src/assets/Barstool/stool5.png',
        },
        {
            title: 'library stool Chair',
            status: 'Booth',
            image: '/src/assets/Booths/booth5.png',
        },
        {
            title: 'library stool Chair',
            status: 'Chair',
            image: '/src/assets/chair/chair5.png',
        },
        {
            title: 'library stool Chair',
            status: 'Sofa',
            image: '/src/assets/sofa/sofa5.png',
        },
        {
            title: 'library stool',
            status: 'Table',
            image: '/src/assets/table/wooden/wooden_table5.png',
        },
        {
            title: 'library stool Chair',
            status: 'Table',
            image: '/src/assets/table/stone/stone_table3.png',
        },
        {
            title: 'library stool Chair',
            status: 'Table',
            image: '/src/assets/table/mosaic/mosaic_table5.png',
        },
        {
            title: 'library stool Chair',
            status: 'Booth',
            image: '/src/assets/Booths/booth4.png',
        },
  ];

  return (
    <div className="app-container-recent">
      <SectionTitle title="Recent Products" mb="mb-11" />
      <Slider {...settings}>
        {cardsData.map(card => (
          <Card key={card.id} {...card} />
        ))}
      </Slider>
    </div>
  );
};

export default Features;
