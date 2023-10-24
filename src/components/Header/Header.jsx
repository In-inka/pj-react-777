import { BarbellIcon, ButtonBlack, ButtonYellow, Container, FlexContainer, LogoContainer, LogoText, LogoutButton, LogoutContainer, LogoutIcon, MenuIcon, SettingsIcon, UserIcon, UserIconContainer } from './Header.styled';

const Header = () => {
  return (
    <>
      <Container>
        <FlexContainer>
          <LogoContainer to="/">
            <BarbellIcon />
            <LogoText>PowerPulse</LogoText>
          </LogoContainer>
        </FlexContainer>
        <ButtonBlack to="/diary">Diary</ButtonBlack>
        <ButtonBlack to="/products">Products</ButtonBlack>
        <ButtonYellow to="/exercises">Exercises</ButtonYellow>
        <SettingsIcon />
        <UserIconContainer to="/profile">
          <UserIcon />
        </UserIconContainer>
        <MenuIcon type="button" />
        <LogoutContainer>
          <LogoutButton>Logout</LogoutButton>
          <LogoutIcon />
        </LogoutContainer>
      </Container>
    </>
  );
};

export { Header };
