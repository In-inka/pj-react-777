import ProfileSettingsForm from '../../components/ProfileSettingsForm/ProfileSettingsForm';
import { TitlePage } from '../../components/TitlePage/TitlePage';
import { ContainerProfilePage } from './Profile.styled';
import UserCards from '../../components/UserCards/UserCards';

const Profile = () => {
  return (
    <ContainerProfilePage>
      <TitlePage text={'Profile Settings'} />
      <UserCards />
      <ProfileSettingsForm />
    </ContainerProfilePage>
  );
};

export default Profile;
