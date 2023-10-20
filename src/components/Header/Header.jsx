import { NavLink } from 'react-router-dom';
import { Container } from './Header.styled';

const Header = () => {
  return (
    <Container>
      <NavLink to="/welcome">Welcome</NavLink>
      <NavLink to="/signup">SignUp</NavLink>
      <NavLink to="/signin">SignIn</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/diary">Diary</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/exercises">Exercises</NavLink>
    </Container>
  );
};

export { Header };
