import ProfileSettingsForm from '../../components/ProfileSettingsForm/ProfileSettingsForm';
import { TitlePage } from '../../components/TitlePage/TitlePage';
import UserCards from '../../components/UserCards/UserCards';
import { ContainerProfilePage } from './Profile-style';

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
