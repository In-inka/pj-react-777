import React from 'react'
import sprite from '../../sprite/sprite.svg';
import {  BoxBtn, BoxIcon, BtnBack, IconBack, TextBack } from './BoxBtnBack.style';

const BoxBtnBack = () => {
    
    const goBack = () => {
        window.history.back();
    };
  return (
    <BoxBtn>
        <BtnBack type='button' onClick={goBack}>
            <BoxIcon>
                <IconBack>
                <use href={`${sprite}#icon-start`}></use>
                </IconBack>
                <TextBack>Back</TextBack>
            </BoxIcon>
        </BtnBack>
    </BoxBtn>
  )
}

export default BoxBtnBack