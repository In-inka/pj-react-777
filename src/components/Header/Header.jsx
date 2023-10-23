import { NavLink } from 'react-router-dom';
import { Container } from './Header.styled';

const Header = () => {
  return (
<<<<<<< HEAD
    <HeaderContainer>
      <Navigation>
        <StyledLink to="/diary">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Dairy
        </StyledLink>
        <StyledLink to="/first">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          First
        </StyledLink>
        <StyledLink to="/second">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Second
        </StyledLink>
      </Navigation>
    </HeaderContainer>
=======
    <>
      <Container>
        <NavLink to="/signup">SignUp</NavLink>
        <NavLink to="/signin">SignIn</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/diary">Diary</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/exercises">Exercises</NavLink>
      </Container>
    </>
>>>>>>> main
  );
};

export { Header };
