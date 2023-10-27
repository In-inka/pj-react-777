import styled from "styled-components";
import { glodalColor } from "../../../Styled/GlobalColor";

// export const BoxSwiper = styled.Swiper`
// /* display: flex; */
//   width: 100%;
//   height: 100%;
//   margin-left: auto;
//   margin-right: auto;
    
// `
// export const ItemSwiperSlide = styled.SwiperSlide`
//   text-align: center;
//   font-size: 18px;
//   background: #fff;
//   height: calc((100% - 30px) / 2) !important;

//   /* Center slide text vertically */
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `

export const ListExercises = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 80px;
    @media screen and (min-width: 768px){
    flex-direction: row;
    flex-wrap: wrap;
        
    /* justify-content: center; */
    align-items: center;
    row-gap: 32px;
    column-gap: 16px;
}

`

export const ItemExercises = styled.div`
    background-image: linear-gradient(0deg, rgba(4, 4, 4, 0.5), rgba(4, 4, 4, 0.5)),
    linear-gradient(0deg, rgba(239, 237, 232, 0.2), rgba(239, 237, 232, 0.2));
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
@media screen and (min-width: 768px){
    width: 224px;
    height: 206px;
}
@media screen and (min-width: 1140px){
    width: 236px;
}
`

export const Img = styled.img`
    position: absolute;
    z-index: -1;
    /* width: 100%;
    height: 100%; */

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
