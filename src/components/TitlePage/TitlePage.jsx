import { Title } from './TitlePage.styled';

export const TitlePage = ({ text, className }) => {
  return <Title className={className}>{text}</Title>;
};
