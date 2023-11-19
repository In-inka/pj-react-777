import styled from 'styled-components';
import { glodalColor } from '../../Styled/GlobalColor';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(4, 4, 4, 0.4);
  z-index: 10;
`;

// ============BOXES=============

export const ModalContainer = styled.form`
  position: relative;
  overflow-y: scroll;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 17px;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: rgba(16, 16, 15, 1);
  height: 90%;

  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
    height:initial;
    flex-direction: row;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background-color: rgba(239, 237, 232, 0.1);

    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #ef8964;
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background-color: #ec7246;
  }
`;

export const BoxGifTimer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  /* width: 100%; */
  @media screen and (min-width: 768px) {
    width: 270px;
    margin-right: 16px;
  }
`;

// ============/BOXES=============
// ============GIF=============

export const BoxGif = styled.div`
  display: block;
  width: 100%;
  height: 226px;

`;
export const GifExercises = styled.img`
  width: 270px;
  height: 100%;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  @media screen and (min-width: 768px) {
    width: 270px;
    height: 226px;
  }
`;

// ============/GIF=============

// ============CONTENT=============

export const BoxContentExercises = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  row-gap: 8px;
  column-gap: 8px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    max-width: 345px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 40px;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    margin-top: 0px;
margin-bottom:254px;  }
`;

export const ItemContentExercises = styled.div`
  width: 147px;
  background-color: rgba(239, 237, 232, 0.2);
  border: 1px solid #efede833;
  border-radius: 12px;
  padding: 12px 18px;
  min-height: 62px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;

export const ItemTitle = styled.p`
  font-size: 12px;
  line-height: 1.3;
  color: ${glodalColor.itemTitleExercises};
  letter-spacing: 0px;

  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 1.5;
  }
`;

export const ItemContent = styled.p`
  text-transform: capitalize;
  font-size: 14px;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: 0px;
  text-align: left;
  color: ${glodalColor.withe};
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

// ============/CONTENT=============
// ============BUTTONS=============

export const ButtonAddDiary = styled.button`
margin-right: auto;
  /* position: absolute; */

  padding: 14px 32px 14px 32px;
  border-radius: 12px;
  border: none;
  outline: none;
  color: ${glodalColor.withe};
  background-color: ${glodalColor.acceptColor};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 48px;
    right: 32px;
  }

  &:hover,
  &:focus {
    background-color: ${glodalColor.secondaryOrange};
  }
  &:disabled {
    background-color: #e6533c;
    color: #efede899;
  }
`;

export const ButtonClose = styled.button`
  border: none;
  z-index: 20;
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: rgba(0, 0, 0, 0);
`;

export const IconClose = styled.svg`
  display: block;
  width: 13px;
  height: 13px;
  stroke: ${glodalColor.withe};
  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`;

// ============/BUTTONS=============
