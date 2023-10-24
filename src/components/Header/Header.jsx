import { NavLink } from 'react-router-dom';
import { Container } from './Header.styled';
import styled from 'styled-components';

const Icon = styled.svg`
  &.radio {
    fill: orange;
  }
`;

const Header = () => {
  return (
    <>
      <Container>
        <Icon width={24} height={24} className="radio">
          <use xlinkHref="/symbol-defs.svg#icon-eye" />
        </Icon>
        <Icon width={24} height={24} className="radio">
          <use xlinkHref="/symbol-defs.svg#icon-bubble" />
        </Icon>
        <Icon width={24} height={24} className="radio">
          <use xlinkHref="/symbol-defs.svg#icon-calories" />
        </Icon>
        <Icon width={24} height={24} className="radio">
          <use
            fill="orange"
            xlinkHref="/symbol-defs.svg#icon-exclamation_mark"
            stroke="white"
          />
        </Icon>
        <Icon width={24} height={24} className="radio">
          <use xlinkHref="/symbol-defs.svg#icon-user" />
        </Icon>
        <NavLink to="/signup">SignUp</NavLink>
        <NavLink to="/signin">SignIn</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/diary">Diary</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/exercises">Exercises</NavLink>
      </Container>
    </>
  );
};

export { Header };
