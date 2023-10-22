import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  /* 320-375 */
  padding: 16px;
  border: 1px solid rgb(239, 237, 235, 0.2);
  border-radius: 12px;
  background-color: rgb(239, 237, 235, 0.05);

  @media screen and (min-width: 375px) {
    width: 375px
  }

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const Title = styled.div`
  /* 320-375 */
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const SubTitle = styled.div`
  /* 320-375 */
  font-size: 18px;
  color: rgb(239, 237, 232, 0.5);

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const AddProduct = styled.p`
  /* 320-375 */
  font-size: 18px;
  color: rgb(230, 83, 60);

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const WrapMobile = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const ItemWrapper = styled.div`
  /* 320-375 */
  font-size: 18px;
  color: rgb(230, 83, 60);

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const ItemName = styled.p`
  /* 320-375 */
  font-size: 18px;
  color: rgb(239, 137, 100);
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const ItemField = styled.div`
  /* 320-375 */
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  padding: 10px 14px;
  font-size: 18px;
  color: rgb(239, 237, 232);
  width: ${(prop) => prop.width || "auto"};
  height: ${(prop) => prop.height};
  border: 1px solid rgb(239, 237, 235, 0.2);
  border-radius: 12px;
  background-color: rgb(239, 237, 235, 0.05);

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;


export const IconWrapper = styled.svg`
  width: ${(props) => props.size || '13px'};
  height: ${(props) => props.size || '13px'};
  /* margin-top: ${(props) => props.margintop || '0'}; */
  fill: ${(props) => props.color || '#ffffff'};
  display: inline-block;
  margin-left: 9px;
`;

export const DeleteIconWrapper = styled(IconWrapper)`
  margin-top: 10px;
`;



// export const IconWrapper = styled.svg.attrs((props) => ({
//   width: props.size || '13px',
//   height: props.size || '13px',
//   marginTop: props.marginTop || '0',
//   fill: props.color || '#ffffff',}))`
//   display: inline-block;
//   margin-left: 9px;
// `;

 export const StyledLink = styled(Link)`
   display: flex;
   align-items: baseline;
   /* padding: 8px 16px; */
   color: rgb(230, 83, 60);
 `;

export const WrapButton = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 0; 
  background: none; 
  border: none; 
  cursor: pointer;
`;