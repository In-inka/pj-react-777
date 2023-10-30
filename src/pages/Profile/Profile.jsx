import ProfileSettingsForm from '../../components/ProfileSettingsForm/ProfileSettingsForm';
import { TitlePage } from '../../components/TitlePage/TitlePage';
import { ContainerProfilePage, FlexContainer } from './Profile.styled';
import UserCards from '../../components/UserCards/UserCards';
import AddProduct from '../../components/addProducts/addProducts';

const Profile = () => {
  return (
    <ContainerProfilePage>
      <TitlePage text={'Profile Settings'} />
      <FlexContainer>
        <UserCards />
        <ProfileSettingsForm />
      </FlexContainer>
      <AddProduct></AddProduct>
    </ContainerProfilePage>
  );
};

export default Profile;
