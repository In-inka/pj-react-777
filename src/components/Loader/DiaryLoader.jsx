
import { RotatingLines } from 'react-loader-spinner';
import { glodalColor } from '../../Styled/GlobalColor';

const MyLoader = ({ display }) => (
  <div
    style={{
      display: display,
      justifyContent: 'center',
      width: '100%',
    }}
  >
    <RotatingLines
      strokeColor={glodalColor.title}
      strokeWidth="5"
      animationDuration="0.75"
      width="20%"
      visible={true}
    />
  </div>
);

export default MyLoader;
