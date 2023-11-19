import {
  MobileLogoutButton,
  MobileMenuContainer,
  Container,
  MobileMenuLinks,
  StyledLink,
  CrossButton,
  IconCross,
  IconLogout,
} from './MobileMenu.styled.jsx';
import sprite from '../../sprite/sprite.svg';
import { debounce } from 'lodash';
import { useRef } from 'react';

const MobileMenu = ({ onHandleClick, toggleClickMenu }) => {
  const isClosedRef = useRef();

  const handleCloseClick = () => {
    isClosedRef.current.classList.add('is-closed');

    const debouncedClose = debounce(() => {
      toggleClickMenu();
    }, 400);

    debouncedClose();

    return () => {
      debouncedClose.cancel();
    };
  };

  return (
    <MobileMenuContainer onClick={handleCloseClick}>
      <Container ref={isClosedRef}>
        <CrossButton className="close-menu-button" onClick={handleCloseClick}>
          <IconCross>
            <use href={`${sprite}#icon-x`}></use>
          </IconCross>
        </CrossButton>
        <MobileMenuLinks>
          <StyledLink onClick={toggleClickMenu} to="/diary">
            Diary
          </StyledLink>
          <StyledLink onClick={toggleClickMenu} to="/products">
            Products
          </StyledLink>
          <StyledLink onClick={toggleClickMenu} to="/exercises/bodyparts">
            Exercises
          </StyledLink>
        </MobileMenuLinks>
        <MobileLogoutButton type="button" onClick={onHandleClick}>
          Logout
          <IconLogout>
            <use href={`${sprite}#icon-logout`}></use>
          </IconLogout>
        </MobileLogoutButton>
      </Container>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
