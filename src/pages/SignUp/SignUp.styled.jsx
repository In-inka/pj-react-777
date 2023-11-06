import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import background_img_mob_x2 from '../../img/background/main_bg_mob_x2.jpg';
import background_img_mob from '../../img/background/main_bg_mob.jpg';
import background_img_tab_x2 from '../../img/background/main_bg_tab_x2.jpg';
import background_img_tab from '../../img/background/main_bg_tab.jpg';
import background_img_desktop_x2 from '../../img/background/main_bg_desktop_x2.jpg';
import background_img_desktop from '../../img/background/main_bg_desktop.jpg';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import { glodalColor } from '../../Styled/GlobalColor';


export const Section = styled.section`
  padding-top: 127px;
  padding-bottom: 40px;
  background: linear-gradient(168deg, #040404 14.75%, rgba(4, 4, 4, 0) 52.97%),
    linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
    url(${background_img_mob});
  background-repeat: no-repeat;
  background-position: calc(50% + 38.5px) calc(50% + 120.5px);
  background-size: 298px;
  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background: linear-gradient(168deg, #040404 14.75%, rgba(4, 4, 4, 0) 52.97%),
      linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
      url(${background_img_mob_x2});
    background-repeat: no-repeat;
    background-position: calc(50% + 38.5px) calc(50% + 120.5px);
    background-size: 298px;
  }

  @media screen and (min-width: 768px) {
    background: linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%),
      linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
      url(${background_img_tab});
      padding-bottom: 48px;
      padding-top: 189px;
    background-position: calc(50% + 165.5px) calc(50% + 65.5px);
    background-repeat: no-repeat;
    background-size: 437px;

    @media screen and (min-width: 768px) and (min-device-pixel-ratio: 2),
      screen and (min-width: 768px) and (min-resolution: 192dpi),
      screen and (min-width: 768px) and (min-resolution: 2dppx) {
      background: linear-gradient(
          170deg,
          #040404 3.66%,
          rgba(4, 4, 4, 0) 19.15%
        ),
        linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
        url(${background_img_tab_x2});
      background-position: calc(50% + 165.5px) calc(50% + 65.5px);
      background-repeat: no-repeat;
      background-size: 437px;
    }

    @media screen and (min-width: 1440px) {
      background: linear-gradient(
          80deg,
          #040404 -2.45%,
          rgba(4, 4, 4, 0) 68.17%
        ),
        url(${background_img_desktop});
      padding-top: 200px;
      padding-bottom: 114px;
      background-repeat: no-repeat;
      background-position: calc(50% + 385px) 50%;
      background-size: 670px;
    }

    @media screen and (min-width: 1440px) and (min-device-pixel-ratio: 2),
      screen and (min-width: 1440px) and (min-resolution: 192dpi),
      screen and (min-width: 1440px) and (min-resolution: 2dppx) {
      background: linear-gradient(
          80deg,
          #040404 -2.45%,
          rgba(4, 4, 4, 0) 68.17%
        ),
        url(${background_img_desktop_x2});
      background-repeat: no-repeat;
      background-position: calc(50% + 335px) calc(50% + 65.5px);
      background-size: 670px;
    }
  }
`;

export const Container = styled.div`
  ${ContainerStyled}
  position: relative;
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
    top: 319px;
    left: 1228px;
  }
`;

export const CalorieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 18px;
  background-color: #ef8964;
  border-radius: 12px;
  @media screen and (min-width: 768px) {
    padding: 14px 20px;
  }
`;

export const CalorieSpanText = styled.span`
  font-size: 20px;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 1.33;
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

export const RunIcon = styled.svg`
  fill: ${glodalColor.withe};
  width: 12px;
  height: 12px;
  @media screen and (min-width: 768px) {
    &.setRun {
      padding-left: 2px;
      width: 16px;
      height: 16px;
    }
  }
`;


export const RunIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
