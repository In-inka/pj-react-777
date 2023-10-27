import { useRef, useState } from 'react';
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

const UserCards = () => {
  const userName = useSelector(authSelectors.getUserName);
  //const avatar = useSelector(authSelectors.getUserAvatar);
  const avatar = null;
  //const [uploadedImage, setUploadedImage] = useState(null);
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  /* const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setUploadedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }; */

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
          {avatar ? (
            <UserAvatar src={avatar} alt="Avatar" />
          ) : (
            <Icon width={61} height={62} className="user">
              <use href={`${sprite}#icon-user`}></use>
            </Icon>
          )}
          <div>
            <input
              className="hidden"
              type="file"
              accept="image/*"
              ref={fileInputRef}
              // onChange={handleFileChange}
            />{' '}
            <Post onClick={handleUploadButtonClick}>
              <Icon width={24} height={24} className="lightOrange mark">
                <use href={`${sprite}#icon-check_mark`}></use>
              </Icon>
            </Post>
          </div>
        </Cards>
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
