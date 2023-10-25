import { useRef } from 'react';
import {
  Attention,
  Cards,
  ConteinerCards,
  DataStatistic,
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
    <ConteinerCards>
      <PositionCards>
        <Cards>
          <svg width={61} height={62}>
            <use xlinkHref="/symbol-defs.svg#icon-user" />
          </svg>
          <div>
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              ref={fileInputRef}
            />{' '}
            <Post onClick={handleUploadButtonClick}>
              <svg width={24} height={24} fill="#E6533C">
                <use xlinkHref="/symbol-defs.svg#icon-check_mark" />
              </svg>
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
            <svg width={20} height={20} fill="#EF8964">
              <use xlinkHref="/symbol-defs.svg#icon-fluent_food" />
            </svg>
            <p>Daily calorie intake</p>
          </Title>
          <DataStatistic>0</DataStatistic>
        </Statistic>
        <Statistic>
          <Title>
            {' '}
            <svg width={20} height={20} fill="#EF8964">
              <use xlinkHref="/symbol-defs.svg#icon-dumbbell" />
            </svg>
            <p>Daily norm of sports</p>
          </Title>
          <DataStatistic>0 min</DataStatistic>
        </Statistic>
      </Info>
      <Attention>
        <div>
          {' '}
          <svg width={24} height={24} fill="#EF8964">
            <use xlinkHref="/symbol-defs.svg#icon-exclamation-mark" />
          </svg>
        </div>
        <p>
          We understand that each individual is unique, so the entire approach
          to diet is relative and tailored to your unique body and goals.
        </p>
      </Attention>
      <LogoutButton type="button" onClick={onHandleClick}>
        Logout{' '}
        <svg width={24} height={24} stroke="#EF8964">
          <use xlinkHref="/symbol-defs.svg#icon-logout" />
        </svg>
      </LogoutButton>
    </ConteinerCards>
  );
};

export default UserCards;
