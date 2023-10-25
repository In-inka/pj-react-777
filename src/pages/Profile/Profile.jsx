import ProfileSettingsForm from "../../components/ProfileSettingsForm/ProfileSettingsForm";
import { TitlePage } from "../../components/TitlePage/TitlePage";
import { ContainerProfilePage } from "./Profile.styled";

const Profile = () => {
  return (
    
    <ContainerProfilePage>
      <TitlePage text={'Profile Settings'}/>
      <ProfileSettingsForm/>
    </ContainerProfilePage>
  );
};

export default Profile;
