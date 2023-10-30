import styled from "styled-components";
import { glodalColor } from "../../Styled/GlobalColor";



export const Backdrop = styled.div`
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(4, 4, 4, 0.4);
    z-index: 10;
    `


// ============BOXES=============

export const ModalContainer = styled.div`
    position: absolute;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 32px;
    gap: 40px;
    width: 95%;
    height: 95%;
    /* margin-left: auto; */
    /* margin-right:auto ; */
    top: 50%;
    left: 50%;
    z-index: 11;
    transform: translate(-50%, -50%);
    border: 1px solid rgba(239, 237, 232, 0.2);
    border-radius: 12px;
    background-color: rgba(16, 16, 15, 1);
    z-index: 11;
    @media screen and (min-width: 1440px) {
        width: 694px;
        /* height: 550px; */
    }
`




export const IconClose = styled.svg`
    width: 26px;
    height: 26px;
    stroke: ${glodalColor.withe};
    display: none;

`


export const BoxGifTimer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    
`

// ============/BOXES=============
// ============GIF=============

export const BoxGif = styled.div`
    display: block;
    width: 270px;
    height: 226px;
    
`
export const GifExercises = styled.img`
    width: 100%;
    height: 100%;
    border: 1px solid rgba(239, 237, 232, 0.2);
    border-radius: 12px;
`


// ============/GIF=============
// ============TIMER=============

export const BoxTimer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const TextTime = styled.p`
    font-size: 10px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0px;
    text-align: left;
    color: ${glodalColor.itemTitleExercises};


`

export const BurnedCalories = styled.p`
font-size: 14px;
line-height: 1.2;
color: ${glodalColor.title};
`


export const ButtonPause = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0);
    border: none;
    outline: none;
    width: 32px;
    height: 32px;

`


export const IconPause = styled.svg`
    width: 24px;
    height: 24px;
    fill: ${glodalColor.acceptColor};
`

export const Number = styled.span`
    color: ${glodalColor.acceptColor};
`
    



// ============/TIMER=============
// ============CONTENT=============

export const BoxContentExercises = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 8px;
    column-gap: 8px;
    /* max-height: 210px; */

`


export const ItemContentExercises = styled.div`
    background-color: rgba(239, 237, 232, 0.2);
    border: 1px solid #EFEDE833;
    border-radius: 12px;
    padding: 12px 18px;
    min-height: 62px;
   width: 147px;
@media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 4px;

}
    `

export const ItemTitle = styled.p`
    font-size: 12px;
    line-height: 1.3;
    color: ${glodalColor.itemTitleExercises};
    letter-spacing: 0px;

    @media screen and (min-width: 1440px) {
    font-size: 12px;
    line-height: 1.5;
}

`

export const ItemContent = styled.p`
    font-size: 14px;
    line-height: 1.2;
    font-weight: 700;
    letter-spacing: 0px;
    text-align: left;
    color: ${glodalColor.withe};
@media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 1.5;
}

    `

// ============/CONTENT=============
// ============BUTTONS=============


export const ButtonAddDiary = styled.button`
    position: absolute;
    bottom: 48px;
    right: 32px;
    padding:14px 32px 14px 32px;
    border-radius: 12px;
    border: none;
    outline: none;
    color: ${glodalColor.withe};
    background-color: ${glodalColor.acceptColor};
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        background-color: ${glodalColor.secondaryOrange};
    }
    &:disabled {
        background-color: #e6533c;
        color: #efede899;
    }
    `
export const ButtonClose = styled.button`
border: none;
position: absolute;
top: 16px;
right: 16px;
background-color: rgba(0,0,0,0);


`


// ============/BUTTONS=============