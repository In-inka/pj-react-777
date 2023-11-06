import { ButtonLink } from "../../components/PageComponents/AuthPage/ButtonLink";
import { Title } from "../../components/PageComponents/AuthPage/Title";
import { Container, LeftContainer, Section, Text } from "./ErrorPage.styled";

const ErrorPage = () => {
  return (
    <Section>
      <Container>
        <LeftContainer>
          <Title text={'404'} cls={'error-page'} />
          <Text>
            Sorry, you have reached a page that we could not find. It seems that
            you are lost among the numbers and letters of our virtual space.
            Perhaps this page went on vacation or decided to disappear into
            another dimension. We apologize for this inconvenience.
          </Text>
          <ButtonLink text={'Go Home'} cls={'error-page'} path={'/'} />
        </LeftContainer>
      </Container>
    </Section>
  );
};

export default ErrorPage ;
