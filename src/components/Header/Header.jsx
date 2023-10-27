import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
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
  SettingsIconContainer,
} from './Header.styled';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/operations';
import { LogoIcon } from '../icons/LogoIcon';

const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const dispatch = useDispatch();

  // const isLoggedIn = true;

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
          <LogoIcon />
          <LogoText>PowerPulse</LogoText>
        </LogoContainer>
        {isLoggedIn && (
          <PrivetRotesContainer>
            <Button to="/diary">Diary</Button>
            <Button to="/products">Products</Button>
            <Button to="/exercises/bodyParts">Exercises</Button>
            <SettingsIconContainer to="/profile">
              <SettingsIcon />
            </SettingsIconContainer>
            <UserIcon />
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
