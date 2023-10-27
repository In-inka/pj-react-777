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
import MobileMenu from '../MobileMenu/MobileMenu';
import { useEffect, useState } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import sprite from '../../sprite/sprite.svg';
import { Icon } from '../UserCards/UserCards.styled';

const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();

  // const isLoggedIn = true;

  useEffect(() => {
    if (isMenuOpen) {
      disableBodyScroll(document.body);
    } else {
      enableBodyScroll(document.body);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1440px)');
    const closeMenuOnWideScreens = (e) => {
      if (e.matches) {
        setIsMenuOpen(false);
        enableBodyScroll(document.body);
      }
    };

    mediaQuery.addEventListener('change', closeMenuOnWideScreens);

    return () => {
      mediaQuery.removeEventListener('change', closeMenuOnWideScreens);
    };
  }, []);

  const onHandleClick = () => {
    dispatch(authOperations.logOut());
  };

  const toggleClickMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
              <SettingsIcon className="set">
                <use href={`${sprite}#icon-settings`}></use>
              </SettingsIcon>
            </SettingsIconContainer>
            <UserIcon />
            <MenuIcon type="button" onClick={toggleClickMenu} />
            <LogoutContainer>
              <LogoutButton type="button" onClick={onHandleClick}>
                Logout
              </LogoutButton>
              <LogoutIcon>
                <use href={`${sprite}#icon-logout`}></use>
              </LogoutIcon>
            </LogoutContainer>
          </PrivetRotesContainer>
        )}
      </Container>
      {isLoggedIn && isMenuOpen && (
        <MobileMenu
          toggleClickMenu={toggleClickMenu}
          onHandleClick={onHandleClick}
        />
      )}
    </>
  );
};

export { Header };
