import { useRef } from 'react';
import {
  Attention,
  Cards,
  ContainerCards,
  DataStatistic,
  Icon,
  IconUser,
  Info,
  LogoutButton,
  Name,
  PositionCards,
  Post,
  Statistic,
  Title,
  User,
  UserName,
} from './UserCards.styled';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/operations';
import sprite from '../../sprite/sprite.svg';

const UserCards = () => {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  const onHandleClick = () => {
    dispatch(authOperations.logOut());
  };
  return (
    <ContainerCards>
      <PositionCards>
        <Cards>
          <IconUser href="#" />
          <div>
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              ref={fileInputRef}
            />{' '}
            <Post onClick={handleUploadButtonClick}>
              <Icon width={24} height={24} className="lightOrange user">
                <use href={`${sprite}#icon-check_mark`}></use>
              </Icon>
            </Post>
          </div>
        </Cards>
      </PositionCards>
      <UserName>
        <Name>Anna Rybachok</Name>
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
