import { useDispatch, useSelector } from 'react-redux';
import {
  BarbellIcon,
  ButtonBlack,
  ButtonYellow,
  Container,
  PrivetRotesContainer,
  LogoContainer,
  LogoText,
  LogoutButton,
  LogoutContainer,
  LogoutIcon,
  MenuIcon,
  SettingsIcon,
  UserIcon,
  UserIconContainer,
} from './Header.styled';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/operations';

const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const dispatch = useDispatch();

  
  
  const onHandleClick = () => {
    dispatch(authOperations.logOut());
  };

  return (
    <>
      <Container
        theme={
          isLoggedIn && {
            border: '1px solid rgba(239, 237, 232, 0.2)',
          }
        }
      >
        <LogoContainer to="/">
          <BarbellIcon />
          <LogoText>PowerPulse</LogoText>
        </LogoContainer>
        {isLoggedIn && (
          <PrivetRotesContainer>
            <ButtonBlack to="/diary">Diary</ButtonBlack>
            <ButtonBlack to="/products">Products</ButtonBlack>
            <ButtonYellow to="/exercises">Exercises</ButtonYellow>
            <SettingsIcon />
            <UserIconContainer to="/profile">
              <UserIcon />
            </UserIconContainer>
            <MenuIcon type="button" />
            <LogoutContainer>
              <LogoutButton type="button" onClick={onHandleClick}>
                Logout
              </LogoutButton>
              <LogoutIcon />
            </LogoutContainer>
          </PrivetRotesContainer>
        )}
      </Container>
    </>
  );
};

export { Header };
