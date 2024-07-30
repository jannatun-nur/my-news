import { useEffect, useState } from "react";
import video from "../../public/rest.gif";
import "./News.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper/modules";

const LatestNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("latest.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div>
      <div className="columns-1 md:flex md:justify-around lg:mt-24">
        <section className="w-1/2">
          <img className="lg:w-9/12 md:w-8/12 w-5/12" src={video} />
        </section>

        <section className="w-1/2">
          <p className="lg:mb-5 lg:text-4xl font-semibold">
            Today's latest news
          </p>

          <div>
            <Swiper
              effect={"cube"}
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
              {news.map((news, index) => (
                <SwiperSlide key={index}>
                  <div className="news-card bg-green-300 flex ">
                  <div>
                  <img src={news.imageUrl} alt={news.title} />
                  <span>Source: {news.source}</span>
                  <p>posted date :{news.post}</p>
                  </div>
                    
                    <div className="news-content">
                      <h2>{news.title}</h2>
                      <p>{news.button}</p>
                      
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LatestNews;
