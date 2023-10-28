import { ProgressBar } from 'react-loader-spinner';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 43px;
  width: 130px;
  background-color: #e6533c;
  border-radius: 12px;
  border: none;
  @media screen and (min-width: 768px) {
    height: 56px;
    width: 183px;
  }
`;

function Loader() {
  return (
    <Container>
      <ProgressBar
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="100%"
        visible={true}
      />
    </Container>
  );
}



export default Loader;

