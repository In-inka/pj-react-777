import { glodalColor } from '../../Styled/GlobalColor';
import { BoxLoading } from './Loading.style'
import { RotatingLines } from  'react-loader-spinner'



const Loading = () => {
  return (
    <BoxLoading>
      <RotatingLines
        strokeColor={glodalColor.title}
        strokeWidth="5"
        animationDuration="0.75"
        width="120"
        visible={true}
      />
    </BoxLoading>
  );
}

export default Loading