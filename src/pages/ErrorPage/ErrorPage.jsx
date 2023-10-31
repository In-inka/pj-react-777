import { Container, LeftContainer, LinkButton, Section, Text, Title } from "./ErrorPage.styled";

const ErrorPage = () => {
  return (
    <Section>
      <Container>
        <LeftContainer>
          <Title>404</Title>
          <Text>
            Sorry, you have reached a page that we could not find. It seems that
            you are lost among the numbers and letters of our virtual space.
            Perhaps this page went on vacation or decided to disappear into
            another dimension. We apologize for this inconvenience.
          </Text>
          <LinkButton to={"/"}>Go Home</LinkButton>
        </LeftContainer>
      </Container>
    </Section>
  );
};

export default ErrorPage ;
