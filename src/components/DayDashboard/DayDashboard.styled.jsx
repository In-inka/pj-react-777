import styled from 'styled-components';
import { glodalColor } from '../../Styled/GlobalColor';

export const Container = styled.div`
  display: flex;
  max-width: 335px;
  justify-content: space-between;
  flex-wrap: wrap;

  column-gap: 13px;
  row-gap: 20px;

  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
    max-width: 593px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 390px;
    gap: 16px 16px;
  }
`;

export const ContentContainerCard = styled.div`
  height: 96px;
  padding: 14px;
  border: 1px solid ${glodalColor.bgCards};
  border-radius: 12px;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 374px) {
    min-width: 118px;
    max-width: 157px;
  }
  @media screen and (max-width: 767px) {
    &:nth-child(odd) {
      width: 157px;
    }
    &:nth-child(even) {
      width: 165px;
    }
  }
  @media screen and (min-width: 768px) {
    width: 187px;
    height: 116px;
    padding: 18px;
    order: ${(props) => {
      switch (props.title) {
        case 'Daily calorie intake':
          return 0;
        case 'Daily norm of sports':
          return 3;
        case 'Calories consumed':
          return 1;
        case 'Calories burned':
          return 4;
        case 'The rest of the calories':
          return 2;
        case 'The rest of sports':
          return 5;
      }
    }};
  }
  @media screen and (min-width: 1440px) {
    order: 0;
  }

  ${(props) => {
    // console.log(props.title);
    switch (true) {
      case props.title === 'The rest of the calories' && props.value < 0:
        return `
          border-color: ${glodalColor.red};          
        `;
      case props.title === 'The rest of sports' && props.value < 0:
        return `
          border-color:${glodalColor.green};          
        `;
    }

    switch (true) {
      case props.title === 'Daily calorie intake' ||
        props.title === 'Daily norm of sports':
        return `
          background-color: ${glodalColor.acceptColor};          
        `;
      default:
        return `            
            background-color: rgb(239,237,232, 0.05);          
        `;
    }
  }}
`;

export const WrapperTitleCard = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const TitleTextCard = styled.p`
  margin-left: 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  @media screen and (min-width: 375px) {
    white-space: ${(props) =>
    props.children === 'The rest of the calories' ? 'normal' : 'nowrap'};
  }

  @media screen and (min-width: 768px) {
    line-height: 18px;
  }
  @media screen and (min-width: 1440px) {

  }

  ${(props) => {
    // console.log(props.title);
    switch (true) {
      case props.children === 'Daily calorie intake' ||
        props.children === 'Daily norm of sports':
        return `
          color: ${glodalColor.dashboardTextAccept}
        `;
      default:
        return `color: rgb(239, 237, 232, 0.4)`;
    }
  }}
`;

export const ValueTextCard = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  color: #efede8;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
