import {
  Attention,
  Cards,
  ContainerCards,
  DataStatistic,
  Icon,
  Info,
  LogoutButton,
  Name,
  PositionCards,
  Post,
  Statistic,
  Title,
  User,
  UserAvatar,
  UserName,
} from './UserCards.styled';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/auth/operations';
import sprite from '../../sprite/sprite.svg';
import authSelectors from '../../redux/auth/auth-selectors';
import { useRef } from 'react';
import operations from '../../redux/auth/operations';

const UserCards = () => {
  const fileInputRef = useRef(null);
  const userName = useSelector(authSelectors.getUserName);
  const avatar = useSelector(authSelectors.getUserAvatar);
  const dispatch = useDispatch();

  //const [avatar, setAvatar] = useState();

  const handleChangePhoto = async (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const formData = new FormData();
      formData.append('avatar', selectedFile);

      console.log(formData);
      await dispatch(operations.updateUserAvatar(formData));
      dispatch(authOperations.fetchCurrentUser());
    }
  };

  /*   const handleFileInput = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const filesContent = [{ content: e.target.result }];
      handleChangePhoto(filesContent);
    };

    reader.readAsDataURL(file);
  }; */

  const onHandleClick = () => {
    dispatch(authOperations.logOut());
  };

  return (
    <ContainerCards>
      <PositionCards>
        <Cards>
          {avatar ? (
            <UserAvatar src={avatar} alt="Avatar" />
          ) : (
            <Icon width={61} height={62} className="user">
              <use href={`${sprite}#icon-user`}></use>
            </Icon>
          )}
        </Cards>
        <div>
          <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            ref={fileInputRef}
            onChange={handleChangePhoto}
          />
          <Post onClick={() => fileInputRef.current.click()}>
            {' '}
            <Icon width={24} height={24} className="lightOrange mark">
              <use href={`${sprite}#icon-check_mark`}></use>
            </Icon>
          </Post>
        </div>
      </PositionCards>
      <UserName>
        <Name>{userName}</Name>
        <User>User</User>
      </UserName>
      <Info>
        <Statistic>
          <Title>
            <Icon width={20} height={20} className="orange">
              <use href={`${sprite}#icon-fluent_food`}></use>
            </Icon>
            <p>Daily calorie intake</p>
          </Title>
          <DataStatistic>0</DataStatistic>
        </Statistic>
        <Statistic>
          <Title>
            {' '}
            <Icon width={20} height={20} className="orange">
              <use href={`${sprite}#icon-dumbbell`}></use>
            </Icon>
            <p>Daily norm of sports</p>
          </Title>
          <DataStatistic>0 min</DataStatistic>
        </Statistic>
      </Info>
      <Attention>
        <div>
          {' '}
          <Icon width={24} height={24} className="orange">
            <use href={`${sprite}#icon-exclamation-mark`}></use>
          </Icon>
        </div>
        <p>
          We understand that each individual is unique, so the entire approach
          to diet is relative and tailored to your unique body and goals.
        </p>
      </Attention>
      <LogoutButton type="button" onClick={onHandleClick}>
        Logout{' '}
        <Icon width={24} height={24} className="stroke">
          <use href={`${sprite}#icon-logout`}></use>
        </Icon>
      </LogoutButton>
    </ContainerCards>
  );
};

export default UserCards;