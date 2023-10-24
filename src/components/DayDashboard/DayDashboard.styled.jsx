import styled from 'styled-components';

export const Container = styled.div`
  background-color: #013624;

  display: flex;
  max-width: fit-content;
  gap: 13px;
  
  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const ContentContainerCard = styled.div`
  width: 157px;
  height: 96px;
  padding: 14px;
  border-width: 1px;
  border-radius: 12px;

  ${(props) => {
        // console.log(props.title);
    switch (true) {
      case props.title === 'Daily calorie intake' ||
        props.title === 'Daily norm of sports':
        return `
          background-color: #E6533C;
          border-color: rgb(239,237,232, 0.2);
        `;
    }
  }}

  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const WrapperTitleCard = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const TitleTextCard = styled.p`
  font-size: 12px;
  color: rgb(239,237,232,0.8);
  white-space: nowrap;
`;

export const ValueTextCard = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #EFEDE8;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;






