import styled from "styled-components";
import { glodalColor } from "../../../Styled/GlobalColor";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";


export const  ContainerExercises = styled.div`
    position: relative;
    gap: 20px;
    padding-bottom: 80px;
    width: 100%;
    @media screen and (min-width: 768px){
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
        height: 444px;
        
    }
.swiper-wrapper{


    row-gap: 20px;
    
@media screen and (min-width: 768px){
    column-gap: 13px;
    row-gap: 32px;
    align-items: center;
}

     
    
}
`


export const StyledList = styled.div`

`
        
export const StyledListItem = styled(SwiperSlide)`
        @media screen and (min-width: 375px){
            width: 335px ;
            height: 206px ;
        
        }
        @media screen and (min-width: 768px){
            width: 223px !important;
            height: 206px !important;
           
        }
        @media screen and (min-width: 1440px){
            width: 237px !important;
            height: 206px !important;
           
        }

`

export const StyledPagination = styled.span`
   .swiper-pagination-bullet{
       position: relative;
       bottom: 10px;
       width: 14px;
       height: 14px;
       background-color: gray;
    }
    .swiper-pagination-bullet-active {
        position: relative;
        width: 14px;
        height: 14px;
        background-color: ${glodalColor.acceptColor};
        
    }
`