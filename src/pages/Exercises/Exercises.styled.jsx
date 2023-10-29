import styled from "styled-components";
import { ContainerStyled } from "../../Styled/ContainerStyled";
import background_img_desktop_x2 from '../../img/background/main_bg_desktop_x2.jpg';
import background_img_desktop from '../../img/background/main_bg_desktop.jpg';


export const ContainerExercisesPage = styled.div`
    ${ContainerStyled}
    overflow: hidden;
    padding-top: 101px;
    padding-bottom: 80px;
    position: relative;
    
    
`

export const BoxTitlePage = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
gap: 20px;
margin-bottom: 40px;
/* margin-top: 40px; */
@media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 64px;
    margin-top: 72px;
}

`


export const PictureBck = styled.picture`
    display: none;
    
    @media screen and (min-width: 1440px) {
        display: block;
        position: absolute;

        top: 185px;
        left: 963px;
        z-index: -1;
        background: linear-gradient(79.56deg, #040404 -2.45%, rgba(4, 4, 4, 0) 68.17%);

    }
`



export const BgkPhoto = styled.div`
    display: none;
    
    @media screen and (min-width: 1440px) {
        display: block;
        position: absolute;
        top: 185px;
        left: 963px;
        width: 487px;
        height: 920px;
        z-index: -1;
        background: linear-gradient(80deg,#040404 -2.45%,rgba(4, 4, 4, 0) 68.17%),url(${background_img_desktop});
        background-repeat: no-repeat;
        background-size: 670px;
        @media screen and (min-device-pixel-ratio: 2),
        screen and (min-resolution: 192dpi),
        screen and (min-resolution: 2dppx) {    
            background: linear-gradient(80deg,#040404 -2.45%,rgba(4, 4, 4, 0) 68.17%),url(${background_img_desktop_x2});
            background-repeat: no-repeat;
            background-size: contain;
    }
}
`