import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Container,
  PrivetRotesContainer,
  LogoContainer,
  LogoutButton,
  LogoutContainer,
  LogoutIcon,
  MenuIconButton,
  SettingsIcon,
  SettingsIconContainer,
  UserAvatarContainer,
  UserAvatar,
  UserIcon,
  MenuIcon,
  Logo,
} from './Header.styled';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/operations';

import MobileMenu from '../MobileMenu/MobileMenu';
import { useEffect, useState } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import sprite from '../../sprite/sprite.svg';

const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const avatarLink = useSelector(authSelectors.getUserAvatar);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();

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
    localStorage.removeItem('PowerPulsDate');
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
          <Logo className="logo-icon" width={36} height={13}>
            <use href={`${sprite}#icon-dumbbell-logo`}></use>
          </Logo>
          <Logo className="logo-text" width={82} height={12}>
            <use href={`${sprite}#icon-logoText`}></use>
          </Logo>
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
            <UserAvatarContainer>
              {avatarLink ? (
                <UserAvatar src={avatarLink} alt="user avatar" />
              ) : (
                <UserIcon className="setUser">
                  <use href={`${sprite}#icon-user`}></use>
                </UserIcon>
              )}
            </UserAvatarContainer>
            <MenuIconButton type="button" onClick={toggleClickMenu}>
              <MenuIcon className="setMenu">
                <use href={`${sprite}#icon-menu`}></use>
              </MenuIcon>
            </MenuIconButton>
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
