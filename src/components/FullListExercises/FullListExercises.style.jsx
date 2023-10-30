import styled from "styled-components";
import { glodalColor } from "../../Styled/GlobalColor";





export const ContainerFullExercises = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    align-items: center;
@media screen and (min-width: 768px){
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 16px;
    overflow-y: auto;
   
    height: 726px;
&::-webkit-scrollbar {
  width: 8px;
}


/* Track */
&::-webkit-scrollbar-track {
  background-color: rgba(239, 237, 232, 0.1);

  border-radius: 10px;
}
 
/* Handle */
&::-webkit-scrollbar-thumb {
  background: #EF8964; 
  border-radius: 10px;
}

/* Handle on hover */
&::-webkit-scrollbar-thumb:hover {
  background-color: #ec7246; 
}

}  

@media screen and (min-width: 1440px){
    width: 850px;
    height: 487px;
}


`




export const ListFullExercises = styled.div`
    position: relative;
    border-radius: 12px;
    border: 1px;
    padding: 16px;
    border: 1px solid #EFEDE833;
    background-color: rgba(239, 237, 232, 0.05);
    
@media screen and (min-width: 375px){
    width: 335px;
}  
@media screen and (min-width: 1440px){
    width: 405px;
}  

`

export const BtnStart = styled.button`
    position: absolute;
    right: 16px;
    top: 16px;
    width: 55px;
    height: 18px;
    border: none;
    outline: none;
    background-color: rgba(0,0,0,0);
`
export const BoxIconStart = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

export const TextStart = styled.p`
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0px;
    text-align: left;
    color: ${glodalColor.acceptColor};
`

export const IconStart = styled.svg`
    width: 16px;
    height: 16px;
    stroke: ${glodalColor.acceptColor};
`

export const BoxWorkout = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 73px;
    height: 24px;
    border-radius: 4px;
    background: rgba(239, 237, 232, 0.05);
    font-size: 12px;
    font-weight: 700;
    line-height: 1.16;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 33px;
`

export const BoxIconTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 8px;

`

export const IconRunning = styled.svg`
    width: 24px;
    height: 24px;

`

export const Title = styled.h3`
    max-width: 200px;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0px;
    text-align: left;
    color: ${glodalColor.withe};
@media screen and (min-width: 375px){
    max-width: 263px;
    gap: 16px;
}  

`

export const ContainerInfoExercises = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 4px;


`

export const BoxInfoExercises = styled.div`
    display: flex; 
    gap: 4px;
`

export const StaticContentInfoExercises = styled.p`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    text-align: left;
    color: rgba(239, 237, 232, 0.4);

`

export const DynamicContentInfoExercises = styled.p`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    text-align: left;
    text-transform: capitalize;
    color: ${glodalColor.withe};

`

