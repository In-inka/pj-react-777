import styled from 'styled-components';

export const ModalWindow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(4, 4, 4, 0.4);
  z-index: 10;
`;

export const Container = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  outline: none;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
  padding: 48px 89px;
  background-color: #10100f;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  @media screen and (min-width: 768px) {
    padding: 64px 136px;
  }
`;

export const IconClose = styled.svg`
  width: 22px;
  height: 22px;
  fill: #efede8;
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
@media screen and (min-width: 768px) {
width: 26px;
height: 26px;
    }  
`;

export const ContainerImg = styled.div`
display: flex;
flex-direction: column;
align-items: center;
@media screen and (min-width: 768px) {
    }   
`;

export const Image = styled.img`
width:123px;
height:84px;
margin-bottom: 16px;
@media screen and (min-width: 768px) {
height:97px;
}   
`;

export const Title = styled.p`
    color: #efede8;
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    margin-bottom: 16px;
`;

export const Text = styled.p`
    color: rgba(239, 237, 232, 0.3);
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    display: flex;
    gap: 8px;
    align-items: center;
    margin-bottom:24px;
    
`;

export const Span = styled.span`
   color: #e6533c;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    display: flex;
    gap: 8px;
    align-items: center;
`;

export const Button = styled.button`
    border-radius: 12px;
    background: #e6533c;
    padding: 12px 32px;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
    color: #efede8;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    border: none;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    @media screen and (min-width: 768px) {
    padding: 16px 32px;
    }
  &:hover,
  &:focus {
    background-color:#EF8964;
    color: #efede8;
  }
`;


export const ArrowIcon = styled.svg`
    width: 16px;
    height: 16px;
    stroke: rgba(239, 237, 232, 0.3)`