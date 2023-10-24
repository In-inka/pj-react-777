import ProfileSettingsForm from "../../components/ProfileSettingsForm/ProfileSettingsForm";
import { TitlePage } from "../../components/TitlePage/TitlePage";
import { ContainerProfilePage } from "./Profile-style";

const Profile = () => {
  return (
    
    <ContainerProfilePage>
      <TitlePage text={'Profile Settings'}/>
      <ProfileSettingsForm/>
    </ContainerProfilePage>
  );
};

export default Profile;
