import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import background_img_mob_x2 from '../../img/background/main_bg_mob_x2.jpg';
import background_img_mob from '../../img/background/main_bg_mob.jpg';
import background_img_tab_x2 from '../../img/background/main_bg_tab_x2.jpg';
import background_img_tab from '../../img/background/main_bg_tab.jpg';
import background_img_desktop_x2 from '../../img/background/main_bg_desktop_x2.jpg';
import background_img_desktop from '../../img/background/main_bg_desktop.jpg';
import { SharedContainerStyle } from '../../sharedStyles/sharedStyles';

export const Container = styled.div`
  ${SharedContainerStyle}
  padding-top:90px;

  background-image: linear-gradient(rgba(4, 4, 4, 1), rgba(4, 4, 4, 0)),
    url(${background_img_mob});
  background-repeat: no-repeat;
  background-position: left 77px top 204px;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: linear-gradient(rgba(4, 4, 4, 1), rgba(4, 4, 4, 0)),
      url(${background_img_mob_x2});
  }

  //---- tab
  @media screen and (min-width: 768px) {
    padding-top: 140px;
    background-image: linear-gradient(rgba(4, 4, 4, 1), rgba(4, 4, 4, 0)),
      url(${background_img_tab});
    background-repeat: no-repeat;
    background-position: left 331px top 82px;
  }

  @media screen and (min-width: 768px) and (min-device-pixel-ratio: 2),
    screen and (min-width: 768px) and (min-resolution: 192dpi),
    screen and (min-width: 768px) and (min-resolution: 2dppx) {
    background-image: linear-gradient(rgba(4, 4, 4, 1), rgba(4, 4, 4, 0)),
      url(${background_img_tab_x2});
  }

  //---- desk
  @media screen and (min-width: 1440px) {
    padding-top: 200px;
    background-repeat: no-repeat;
    background-position: left 770px top 0;
    height: 800px;
    position: relative;
    background-image: linear-gradient(rgba(4, 4, 4, 0), rgba(4, 4, 4, 0)),
      url(${background_img_desktop});
  }

  @media screen and (min-width: 1440px) and (min-device-pixel-ratio: 2),
    screen and (min-width: 1440px) and (min-resolution: 192dpi),
    screen and (min-width: 1440px) and (min-resolution: 2dppx) {
    background-image: linear-gradient(rgba(4, 4, 4, 1), rgba(4, 4, 4, 0)),
      url(${background_img_desktop_x2});
  }
`;

export const Title = styled.h1`
  color: rgba(239, 237, 232, 1);
  font-size: 24px;
  line-height: 1.17;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.38;
  }
`;


export const Text = styled.p`
  font-size: 14px;
  line-height: 1.29;
  color: rgba(239, 237, 232, 0.3);
  margin-top: 14px;

  @media screen and (min-width: 768px) {
    width: 496px;
    font-size: 16px;
    line-height: 1.5;
    margin-top: 16px;
  }
`;


export const TextContainer = styled.div`
  display: flex;
  font-size: 12px;
  line-height: 1.5;
  padding-top: 12px;
  @media screen and (min-width: 768px) {
    padding-left: 15px;
  }
`;

export const TextB = styled.p`
  color: rgba(239, 237, 232, 0.3);

`;


export const StyledLink = styled(Link)`
  margin-left: 4px;
  color: #efede8;
  text-decoration: underline;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 35px;
  @media screen and (min-width: 768px) {
    padding-top: 39px;
    justify-content: left;
    padding-left: 299px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0px;
    position: absolute;
    left: 770px;
    top: 384px;
  }
`;

export const VideoTutorialContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 14px 18px;
  background-color: #303030;
  border-radius: 12px;
  @media screen and (min-width: 768px) {
    padding: 20px 38px 20px 23px;
  }
`;

export const TextContainerB = styled.div`
`

export const VideoTutorialTextA = styled.p`
  font-size: 16px;
  line-height: 1.13;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
  }
`;

export const VideoTutorialTextB = styled.p`
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.65);
  @media screen and (min-width: 768px) {
    margin-top: 8px;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const PlayIcon = styled.div`
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background-color: #ef8964;
  margin-right: 4px;
  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
    margin-right: 12px;
  }
`;


export const FlexContainerB = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  padding-top: 70px;
  @media screen and (min-width: 768px) {
    padding-top: 56px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 0px;
    position: absolute;
    top: 519px;
    left: 1228px;
  }
`;

export const CalorieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 37px 14px 18px;
  background-color: #ef8964;
  border-radius: 12px;
  @media screen and (min-width: 768px) {
    padding: 14px 38px 14px 28px;
  }
`;

export const TextContainerC = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
`;

export const CalorieTextA = styled.p`
  font-size: 24px;
  line-height: 1;
  font-weight: 700;
  color: #efede8;
  margin-right: 8px;
  @media screen and (min-width: 768px) {
    margin-right: 11px;
    font-size: 48px;
    line-height: 1.04;
  }
`;

export const CalorieTextB = styled.p`
  font-size: 12px;
  line-height: 1.33;
  color: rgba(239, 237, 232, 0.65);
  font-weight: 700;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const RunIcon = styled.div`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background-color: #efa082;
  margin-bottom: 4px;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    margin-bottom: 12px;
  }
`;