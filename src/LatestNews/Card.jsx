import './News.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { EffectCube, Pagination } from 'swiper/modules';

const Card = ({ newses }) => {
  return (
    <div>
      <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        {newses.map((news, index) => (
          <SwiperSlide key={index}>
            <div className="news-card">
              <img src={news.imageUrl} alt={news.title} />
              <div className="news-content">
                <h2>{news.title}</h2>
                <p>{news.description}</p>
                <span>Source: {news.source}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Card;
