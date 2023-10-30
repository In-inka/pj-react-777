import styled from "styled-components";
import { glodalColor } from "../../../Styled/GlobalColor";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import sprite from '../../../sprite/sprite.svg';


export const  ContainerExercises = styled.div`
    /* display: flex; */
    /* flex-direction: column; */
    position: relative;
    gap: 20px;
    padding-bottom: 80px;
    width: 100%;
    /* height: 444px; */
    @media screen and (min-width: 768px){
    /* flex-direction: row; */
    /* flex-wrap: wrap; */
    /* align-items: center; */
    row-gap: 32px;
    column-gap: 16px;
}
`

export const ItemExercises = styled.div`

    background-color: rgb(4, 4, 4,0.30);


    position: relative;
    display: block;
    width: 100%;
    height: 206px;
    border-radius: 12px;
    border: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
@media screen and (min-width: 375px){
    width: 335px;
}
@media screen and (min-width: 768px){
    width: 224px;
    height: 206px;
}
@media screen and (min-width: 1440px){
    width: 236px;
}
`

export const LinkItem = styled(Link)`
    width: 100%;
`


export const Img = styled.img`
    position: absolute;
    z-index:-1;
`


export const BoxContentExercises = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2px;
`

export const TitleExercises = styled.h3`
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: 0px;
    text-align: center;
    font-weight: 400;
    text-transform: capitalize;
    color: ${glodalColor.withe};
    `

export const CategoryExercises = styled.p`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    color: rgba(239, 237, 232, 0.4);
`


// ===============SWIPER===============

export const StyleSwiper = styled(Swiper)`
@media screen and (min-width: 1440px){
    position: relative;
        height: 500px;
    .swiper-wrapper{
            align-items: center;
            column-gap: 16px;
            row-gap: 32px;
        }
    
}
`


export const StyledList = styled.ul`

    /* Стилі за замовчуванням для більших екранів */
.swiper-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* За замовчуванням, 2 стовпці на рядку */
  gap: 10px;
}

/* Стилі для вузького екрана (наприклад, менше 768px) */
@media (max-width: 768px) {
  .swiper-container {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); /* 1 стовпець на рядок */
  }
}



`

export const StyledListItem = styled(SwiperSlide)`


  .swiper-container {
    flex-direction: row; /* Ваші стилі для контейнера Swiper Grid на мобільних пристроях */
  }

  .swiper-slide {
    /* Ваші стилі для слайдів Swiper Grid на мобільних пристроях */
  }


@media screen and (min-width: 1440px){
    &.swiper-slide{
        width: 237px !important;
        height: 206px !important; 
        background-color: rgba(0,0,0,0);
        color: white;
    }
}

`

export const StyledPagination = styled.span`
    width: 100%;
    display: flex;
    justify-content: center;
    .swiper-pagination-bullet{
    width: 14px;
    height: 14px;
    background-color: gray;
    }
    .swiper-pagination-bullet-active {
    width: 14px;
    height: 14px;
        background-color: ${glodalColor.acceptColor};
        
    }
`



// ===============/SWIPER===============