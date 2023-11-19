import {
  Attention,
  Cards,
  ContainerCards,
  DataStatistic,
  Icon,
  IconPost,
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

import operations from '../../redux/auth/operations';
import { toast } from 'react-toastify';

const UserCards = () => {
  const userName = useSelector(authSelectors.getUserName);
  const avatar = useSelector(authSelectors.getUserAvatar);
  const dispatch = useDispatch();
  const { dailyIntakeCalories, dailyNormOfSport } = useSelector(
    authSelectors.getUserMetricData,
  );

  const handleChangePhoto = async (event) => {
    try {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        const formData = new FormData();
        formData.append('avatar', selectedFile);
        await dispatch(operations.updateUserAvatar(formData));
      }
    } catch (error) {
      toast.error('An error occurred while uploading the photo');
    }
  };

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
        <Post htmlFor="avatarUrls">
          <input
            type="file"
            name="avatar"
            id="avatarUrls"
            accept="image/*"
            onChange={handleChangePhoto}
          />{' '}
          <IconPost>
            <use href={`${sprite}#icon-check_mark`}></use>
          </IconPost>
        </Post>
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
          <DataStatistic>{dailyIntakeCalories}</DataStatistic>
        </Statistic>
        <Statistic>
          <Title>
            {' '}
            <Icon width={20} height={20} className="orange">
              <use href={`${sprite}#icon-dumbbell`}></use>
            </Icon>
            <p>Daily norm of sports</p>
          </Title>
          <DataStatistic>{dailyNormOfSport} min</DataStatistic>
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
