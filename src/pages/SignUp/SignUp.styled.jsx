import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import background_img_mob_x2 from '../../img/background/main_bg_mob_x2.jpg';
import background_img_mob from '../../img/background/main_bg_mob.jpg';
import { SharedContainerStyle } from '../../sharedStyles/sharedStyles';

export const Container = styled.div(`
${SharedContainerStyle}
padding-top:90px;
 @media screen and (max-width: 767px){
    background-image: linear-gradient(
        rgba(4, 4, 4, 1),
        rgba(4, 4, 4, 0)
      ),
      url(${background_img_mob});
      width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-position: left 57px top 204px;
    background-size: 100% 100%;
  };
  @media screen and (max-width: 767px) and (min-device-pixel-ratio: 2),
    screen and (max-width: 767px) and (min-resolution: 192dpi),
    screen and (max-width: 767px) and (min-resolution: 2dppx) {
    background-image: linear-gradient(
        rgba(4, 4, 4, 1),
        rgba(4, 4, 4, 0)
      ),
      url(${background_img_mob_x2})
  }`);

export const Title = styled.h1`
  font-size: 24px;
  line-height: 1.17;
`;


export const Text = styled.p`
font-size: 14px;
line-height: 1.29;
  color: rgba(239, 237, 232, 0.3);
  padding-top: 14px;
  `;


export const TextContainer = styled.div`
  display:flex;
  font-size: 12px;
  line-height: 1.5;
  padding-top: 12px;
`;

export const TextB = styled.p`
  color: rgba(239, 237, 232, 0.3);

`;


export const StyledLink = styled(Link)`
    margin-left:4px;
    color: #efede8;
`;

export const VideoTutorialContainer = styled.div`
padding:14px 18px;
`

export const VideoTutorialTextA = styled.p`
`

export const VideoTutorialTextB = styled.p``;