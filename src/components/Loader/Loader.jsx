import { ProgressBar } from 'react-loader-spinner';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: none;
  &.yellowBtn {
    background-color: #e6533c;
    height: 43px;
    width: 130px;
    @media screen and (min-width: 768px) {
      height: 56px;
      width: 183px;
    }
  }
`;

function Loader({cls}) {
  return (
    <Container className={cls}>
      <ProgressBar
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="100%"
        visible={true}
        borderColor="#E6533C"
        barColor="#EFEDE8"
      />
    </Container>
  );
}



export default Loader;

