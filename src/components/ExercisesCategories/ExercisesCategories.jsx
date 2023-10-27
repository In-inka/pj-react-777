import { useLocation } from 'react-router-dom';
import { Links, BoxLinksCategories } from './ExercisesCategories.styled';

const ExercisesCategories = () => {
  const location = useLocation();
  // console.log('location', location)

  return (
    <BoxLinksCategories>
      <Links to={`bodyParts`} >
        Body parts
      </Links>
      <Links to={`muscles`} >
        Muscles
      </Links>
      <Links to={`equipment`} >
        Equipment
      </Links>
    </BoxLinksCategories>
  );
};

export default ExercisesCategories;
