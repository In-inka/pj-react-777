import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  /* 320-375 */
  box-sizing: border-box;
  padding: 16px;
  padding-right: 8px;
  border: 1px solid rgb(239, 237, 235, 0.2);
  border-radius: 12px;
  background-color: rgb(239, 237, 235, 0.05);
  /* max-height: 824px; */
  width: 375px;
  font-size: 12px;

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 234px;
    padding-top: 19px;
    
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const TitleMain = styled.div`
  /* 320-375 */
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
  padding-right: 8px;
  
  @media screen and (min-width: 768px) {
    margin-bottom: 19px;
    
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const SubTitle = styled.p`
  /* 320-375 */
  
  color: rgb(239, 237, 232, 0.5);
  margin: 0;
  font-size: 14px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const AddProduct = styled.p`
  /* 320-375 */
  font-size: 14px;
  color: rgb(230, 83, 60);
  margin: 0;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const WrapMobile = styled.div`
  display: flex;
  gap: 0;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    align-items: center;
    flex: 1.8;
    gap: 0px;
    justify-content: space-between;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const WrapItemProducts = styled.div`
  display: flex;
  flex: 1;
  gap: 16px;
  justify-content: space-between;
  
  @media screen and (min-width: 768px) {
    gap: 8px;
    flex: 1.1;
     
  }
`;

export const ItemWrapper = styled.div`
  /* 320-375 */
  flex: 1.2;
  color: rgb(230, 83, 60);

  @media screen and (min-width: 768px) {
    
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const ItemName = styled.p`
  /* 320-375 */
  font-size: 12px;
  color: rgb(239, 137, 100);
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    display: none;    
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const ItemField = styled.div`
  /* 320-375 */

  display: flex;
  align-items: center;
  margin-bottom: 16px;
  padding: 8px 14px;
  font-size: 16px;
  color: rgb(239, 237, 232);
  max-width: ${(prop) => prop.width || '100%'};
  height: ${(prop) => prop.height || 'auto'};
  border: 1px solid rgb(239, 237, 235, 0.2);
  border-radius: 12px;
  background-color: rgb(239, 237, 235, 0.05);

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    padding: 10px 14px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const NormalText = styled.div`
    font-size: 14px;
  @media screen and (min-width: 768px) {
    display: none;
   }
  @media screen and (min-width: 1440px) {
  }
`;
export const SliceText = styled.div`
    display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
  }
`;


export const IconWrapper = styled.svg`
  width: ${(props) => props.size || '13px'};
  height: ${(props) => props.size || '13px'};
  fill: ${(props) => props.color || '#ffffff'};
  display: inline-block;
  margin-left: 9px;
`;

export const DeleteIconWrapper = styled(IconWrapper)`
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;

 export const StyledLink = styled(Link)`
   display: flex;
   align-items: center;
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
  margin: 0;
  background: none;
  border: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    height: fit-content;
    
  }
`;

export const TableList = styled.ul`
  max-height: 752px;
  overflow-y: auto;
  padding-right: 8px;
  padding-bottom: 16px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background: rgb(239, 237, 232, 0.1);
    border-radius: 12px;
    height: 90px;
  }

  @media screen and (min-width: 768px) {
    max-height: 126px;
    }
`;

export const ListItem = styled.li`
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: nowrap;
    gap: 8px;
    margin-bottom: 8px;
  }
`;

export const Indicator = styled.div`
  width: 14px;
  height: 14px;
  margin-right: 8px;
  border-radius: 50%;
  background-color: ${(props) => (props.value ? "#419B09" : "#E9101D" )};
`;

export const NotFound = styled.div`
  height: 335px;
  width: 100%;
  color: rgb(239,237,232,0.5);
  font-size: 14;
  display: grid;
  place-items: center;
`;

export const WrapTitleTable = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    font-size: 12px;
    color: rgb(239, 137, 100);
    margin-bottom: 10px;
  }
`;
  
export const Title = styled.div`
`;
export const Category = styled.div`
  @media screen and (min-width: 768px) {
    margin-left: 190px;
  }
`;
export const Calories = styled.div`
  @media screen and (min-width: 768px) {
    margin-left: 165px;
  }
`;
export const Weight = styled.div`
  @media screen and (min-width: 768px) {
    margin-left: 50px;
  }
`;
export const Recommend = styled.div`
  @media screen and (min-width: 768px) {
    margin-left: 58px;
  }
`;