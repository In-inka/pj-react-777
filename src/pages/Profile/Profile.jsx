import ProfileSettingsForm from '../../components/ProfileSettingsForm/ProfileSettingsForm';
import { TitlePage } from '../../components/TitlePage/TitlePage';
import { ContainerProfilePage, FlexContainer } from './Profile.styled';
import UserCards from '../../components/UserCards/UserCards';

const Profile = () => {
  return (
    <ContainerProfilePage>
      <TitlePage text={'Profile Settings'} />
      <FlexContainer>
        <UserCards />
        <ProfileSettingsForm />
      </FlexContainer>
    </ContainerProfilePage>
  );
};

export default Profile;
