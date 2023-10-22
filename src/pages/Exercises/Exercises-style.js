import styled from "styled-components";
import { ContainerStyled } from "../../Styled/ContainerStyled";


export const ContainerExercisesPage = styled.div`
    ${ContainerStyled}
    `

export const BoxTitlePage = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
gap: 20px;
margin-bottom: 40px;
margin-top: 40px;
@media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 64px;
    margin-top: 72px;
}

`
