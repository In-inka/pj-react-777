import styled from 'styled-components';

export const Container = styled.div`
  /* background-color: #013624; */

  display: flex;
  max-width: 335px;
  justify-content: space-between;
  flex-wrap: wrap;

  column-gap: 13px;
  row-gap: 20px;

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
  border: 1px solid rgb(239, 237, 232, 0.2);
  border-radius: 12px;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;

  ${(props) => {
    // console.log(props.title);
    switch (true) {
      case props.title === 'The rest of the calories' && props.value === -100:
        return `
          border-color: #E9101D;          
        `;
      case props.title === 'The rest of sports' && props.value === 30:
        return `
          border-color:#419B09;          
        `;
    }

    switch (true) {
      case props.title === 'Daily calorie intake' ||
        props.title === 'Daily norm of sports':
        return `
          background-color: #E6533C;          
        `;
      default:
        return `            
            background-color: rgb(239,237,232, 0.05);          
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

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const TitleTextCard = styled.p`
  margin-left: 8px;
  font-size: 12px;
  white-space: ${(props) =>
    props.children === 'The rest of the calories' ? 'normal' : 'nowrap'};

  ${(props) => {
    // console.log(props.title);
    switch (true) {
      case props.children === 'Daily calorie intake' ||
        props.children === 'Daily norm of sports':
        return `
          color: rgb(239, 237, 232, 0.8)
        `;
      default:
        return `color: rgb(239, 237, 232, 0.4)`;
    }
  }}
`;

export const ValueTextCard = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #efede8;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;
