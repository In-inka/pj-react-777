import styled from "styled-components";
import { glodalColor } from "../../../Styled/GlobalColor";
import sprite from '../../../sprite/sprite.svg';


const FlexContainer = styled.div`
  display: flex;
  padding-left: 101px;
  align-items: center;
  padding-top: 232px;
  @media screen and (min-width: 768px) {
    padding-top: 171px;
    justify-content: left;
    padding-left: 299px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0px;
    position: absolute;
    left: 770px;
    top: 184px;
  }
  &.sign-in {
    padding-top: 117px;
    @media screen and (min-width: 768px) {
      padding-top: 135px;
    }
    @media screen and (min-width: 1440px) {
      padding: 0px;
    }
  }
  &.sign-up {
    padding-top: 35px;
    @media screen and (min-width: 768px) {
      padding-top: 39px;
    }
    @media screen and (min-width: 1440px) {
      padding: 0px;
    }
  }
`;

const VideoTutorialCon = styled.div`
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

const TextContainerB = styled.div``;

const VideoTutorialTextA = styled.p`
  font-size: 16px;
  line-height: 1.13;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
  }
`;

const VideoTutorialTextB = styled.p`
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

const PlayIcon = styled.svg`
  fill: ${glodalColor.withe};
  padding-left: 3px;
  width: 12px;
  height: 12px;
  @media screen and (min-width: 768px) {
    &.setPlay {
      padding-left: 5px;
      width: 20px;
      height: 20px;
    }
  }
`;

export const PlayIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

export const VideoTutorialContainer = ({cls, video}) => {
  return <FlexContainer className={cls}>
          <VideoTutorialCon>
            <PlayIconContainer>
              <PlayIcon className="setPlay">
                <use href={`${sprite}#icon-Polygon`}></use>
              </PlayIcon>
            </PlayIconContainer>
            <TextContainerB>
              <VideoTutorialTextA>{video?video:"350+"}</VideoTutorialTextA>
              <VideoTutorialTextB>Video tutorial</VideoTutorialTextB>
            </TextContainerB>
          </VideoTutorialCon>
        </FlexContainer>;
}