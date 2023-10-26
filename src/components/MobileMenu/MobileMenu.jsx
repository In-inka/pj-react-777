import {
  MobileLogoutButton,
  MobileMenuContainer,
  Container,
  MobileMenuLinks,
  StyledLink,
  CrossButton,
  IconCross,
  IconLogout,
} from './MobileMenu.styled';
import sprite from '../../sprite/sprite.svg';

const MobileMenu = ({ onHandleClick, toggleClickMenu }) => {
  return (
    <MobileMenuContainer>
      <Container>
        <CrossButton className="close-menu-button" onClick={toggleClickMenu}>
          <IconCross>
            <use href={`${sprite}#icon-x`}></use>
          </IconCross>
        </CrossButton>
        <MobileMenuLinks>
          <StyledLink onClick={toggleClickMenu} to="/diary">Diary</StyledLink>
          <StyledLink onClick={toggleClickMenu} to="/products">Products</StyledLink>
          <StyledLink onClick={toggleClickMenu} to="/exercises">Exercises</StyledLink>
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