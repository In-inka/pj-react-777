import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import background_img_mob_x2 from '../../img/background/main_bg_mob_welcome_x2.jpg';
import background_img_mob from '../../img/background/main_bg_mob_welcome.jpg';
import background_img_tab_x2 from '../../img/background/main_bg_tab_x2.jpg';
import background_img_tab from '../../img/background/main_bg_tab.jpg';
import background_img_desktop_x2 from '../../img/background/main_bg_desktop_x2.jpg';
import background_img_desktop from '../../img/background/main_bg_desktop.jpg';
import { ContainerStyled } from '../../Styled/ContainerStyled';

export const Container = styled.div`
  ${ContainerStyled}
  padding-top: 127px;
  padding-bottom: 40px;
  background-image: url(${background_img_mob});
  background-repeat: no-repeat;
  background-position: 77px 241px;
  background-size: 298px;
  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${background_img_mob_x2});
  }

  @media screen and (min-width: 768px) {
    height: inherit;
    padding-top: 189px;
    padding-bottom: 48px;
    background-image: url(${background_img_tab});
    background-repeat: no-repeat;
    background-position: 331px 131px;
    background-size: 437px;
  }

  @media screen and (min-width: 768px) and (min-device-pixel-ratio: 2),
    screen and (min-width: 768px) and (min-resolution: 192dpi),
    screen and (min-width: 768px) and (min-resolution: 2dppx) {
    background-image: url(${background_img_tab_x2});
  }

  @media screen and (min-width: 1440px) {
    padding-top: 200px;
    padding-bottom: 210px;
    background-repeat: no-repeat;
    background-position: 770px 0;
    background-size: 670px;
    height: 800px;
    position: relative;
    background-image: url(${background_img_desktop});
  }

  @media screen and (min-width: 1440px) and (min-device-pixel-ratio: 2),
    screen and (min-width: 1440px) and (min-resolution: 192dpi),
    screen and (min-width: 1440px) and (min-resolution: 2dppx) {
    background-image: url(${background_img_desktop_x2});
  }
`;

export const Title = styled.h1`
  color: rgba(239, 237, 232, 1);
  font-size: 38px;
  line-height: 1.05;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 70px;
    line-height: 1.11;
  }
  @media screen and (min-width: 1440px) {
    width: 598px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    margin-top: 64px;
  }
`;

export const ButtonYellow = styled(Link)`
  display: inline-block;
  margin-right: 14px;
  font-size: 16px;
  line-height: 1.17;
  background-color: #e6533c;
  color: #efede8;
  border-radius: 12px;
  border: none;
  padding: 12px 40px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #ef8964;
  }
  &:disabled {
    background-color: #e6533c;
    color: #efede899;
  }
  @media screen and (min-width: 768px) {
    padding: 16px 60px;
    font-size: 20px;
    line-height: 1.2;
  }
`;

export const ButtonBlack = styled(Link)`
  display: inline-block;
  font-size: 16px;
  line-height: 1.17;
  background-color: inherit;
  color: #efede8;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  padding: 11px 39px;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    border-color: rgba(230, 83, 60, 1);
  }
  &:disabled {
    border-color: rgba(230, 83, 60, 1);
  }
  @media screen and (min-width: 768px) {
    padding: 16px 60px;
    font-size: 20px;
    line-height: 1.2;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  padding-left: 101px;
  align-items: center;
  padding-top: 232px;
  @media screen and (min-width: 768px) {
    padding-top: 170px;
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

export const TextContainerB = styled.div``;

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
  line-height: 1.33;
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
  margin-right: 8px;
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