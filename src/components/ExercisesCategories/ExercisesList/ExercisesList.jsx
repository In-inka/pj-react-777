import { useLocation, useNavigate} from 'react-router-dom';

import { Pagination, Grid } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './swiper.css';

const ExercisesList = ({ exercises }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dataBase = exercises;

  const onHandleNavigate = async (el) => {
    const idElement = el.currentTarget;
    if (idElement) {
      const idExercises = idElement.id;

      const element = await dataBase
        .filter((el) => {
          return el._id === idExercises;
        })
        .map((el) => {
          return el.name;
        })
        .join();
      navigate(`${location.pathname}/${element}`);
    }
  };


  return (
    <div className="container-exercises">
      {dataBase && (
        <Swiper
          slidesPerView={1}
          slidesPerGroup={1}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          grid={{
            fill: 'row',
            rows: 10,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              slidesPerColumn: 3,
              grid: {
                fill: 'column',
                rows: 3,
              },
            },
            1440: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              grid: {
                fill: 'row',
                rows: 2,
              },
            },
          }}
          className="swiper-my"
          modules={[Grid, Pagination]}
        >
          <ul className="swiper-wrapper swiper-container ">
            {dataBase.map((item) => (
              <SwiperSlide className="swiper-slide" key={item._id}>
                <div className="item-exercises" id={item._id}
                >
                    <li
                      className="styled-list styled-list-item"
                      id={item._id}
                      onClick={onHandleNavigate}
                    >
                      <img
                        className="cards"
                        src={item.imgURL}
                        alt={item.name}
                      />
                      <div className="box">
                        <h3 className="title">{item.name}</h3>
                        <p className="category">{item.filter}</p>
                      </div>
                    </li>
                </div>
              </SwiperSlide>
            ))}
          </ul>
        </Swiper>
      )}
      <span className="swiper-pagination pagination"></span>
    </div>
  );
};

export default ExercisesList;
