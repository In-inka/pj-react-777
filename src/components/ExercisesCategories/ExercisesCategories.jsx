import { useLocation } from 'react-router-dom';
import { Links, BoxLinksCategories } from './ExercisesCategories.styled';

const ExercisesCategories = () => {
  const location = useLocation();
  return (
    <BoxLinksCategories>
      <Links to={`bodyparts`} state={{ from: location }}>
        Body parts
      </Links>

      <Links to={`muscles`} state={{ from: location }}>
        Muscles
      </Links>
      <Links to={`equipment`} state={{ from: location }}>
        Equipment
      </Links>
    </BoxLinksCategories>
  );
};

export default ExercisesCategories;
