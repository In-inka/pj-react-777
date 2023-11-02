import styled from 'styled-components';
import {
  ContainerEx,
  TitleMainEx,
  SubTitleEx,
  AddProductEx,
  TableListEx,
  ListItemEx,
  ItemWrapperEx,
  ItemNameEx,
  ItemFieldEx,
  WrapMobileEx,
  StyledLinkEx,
  WrapItemProductsEx,
  ButtonEx,
  NotFoundEx,
  NormalTextEx,
  NormalTextNameEx,
  SliceTextEx,
  SliceTextNameEx,
  WrapTitleTableEx,
  WrapMainBlockEx,
  BodyEx,
  EquipmentEx,
  NameEx,
  TargetEx,
  BurnedEx,
  TimeEx,
  BurnedExTablet,
  DeleteIconWrapper,
} from './DayExercises.styled';
import sprite from '../../sprite/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import diarySelectors from '../../redux/diary/diarySelectors';
import diaryOperations from '../../redux/diary/diaryOperations';
import MyLoader from '../Loader/DiaryLoader';

const Icon = styled.svg`
  &.orange {
    stroke: ${({ theme }) => theme.acceptColor};
  }
`;

export const DayExercises = () => {
  const visibleExercises = useSelector(diarySelectors.getDiary).doneExercises;

  return (
    <ContainerEx>
      <TitleMainEx>
        <SubTitleEx>Execrcises</SubTitleEx>
        <StyledLinkEx to="/exercises/bodyParts">
          <AddProductEx>Add exercise</AddProductEx>
          <Icon width={16} height={16} className="orange">
            <use href={`${sprite}#icon-start`}></use>
          </Icon>
        </StyledLinkEx>
      </TitleMainEx>
      <ExercisesTable exercises={visibleExercises} />
    </ContainerEx>
  );
};

export const ExercisesTable = ({ exercises }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(diarySelectors.getIsLoading);

  return (
    <>
      {isLoading ? (
        <MyLoader display={'flex'} />
      ) : !exercises.length ? (
        <EmptyScreenEx />
      ) : (
        <>
          <TableTitleEx />
          <TableListEx>
            {exercises.map(
              ({
                burnedCalories,
                date,
                exerciseId: { bodyPart, equipment, name, target },
                time,
                _id,
              }) => (
                <ListItemEx key={_id}>
                  <WrapMainBlockEx>
                    <ItemProductEx value={bodyPart}>Body Part</ItemProductEx>
                    <ItemProductEx value={equipment}>Equipment</ItemProductEx>
                    <ItemProductEx value={name}>Name</ItemProductEx>
                  </WrapMainBlockEx>

                  <WrapMobileEx>
                    <WrapItemProductsEx>
                      <ItemProductEx value={target}>Target</ItemProductEx>
                      <ItemProductEx value={burnedCalories}>
                        Burned Calories
                      </ItemProductEx>
                      <ItemProductEx value={time}>Time</ItemProductEx>
                    </WrapItemProductsEx>

                    <ButtonEx
                      onClick={() => {
                        dispatch(
                          diaryOperations.deleteDiaryExercise({
                            exerciseId: _id,
                            date,
                          }),
                        );
                      }}
                    >
                      <DeleteIconWrapper>
                        <Icon width={20} height={20} className="orange">
                          <use href={`${sprite}#icon-trash`}></use>
                        </Icon>
                      </DeleteIconWrapper>
                    </ButtonEx>
                  </WrapMobileEx>
                </ListItemEx>
              ),
            )}
          </TableListEx>
        </>
      )}
    </>
  );
};

export const ItemProductEx = ({ width, value, children }) => {
  let displayValue = value;
  let sliceValue = displayValue;
  if (value.length > 8) {
    sliceValue = value.slice(0, 8) + '...';
  }

  let displayChild = children;
  let sliceChild = displayChild;
  if (children.length > 10) {
    sliceChild = children.slice(0, 10) + '...';
  }

  return (
    <ItemWrapperEx name={children}>
      <ItemNameEx>
        <NormalTextNameEx>{displayChild}</NormalTextNameEx>
        <SliceTextNameEx>{sliceChild}</SliceTextNameEx>
      </ItemNameEx>

      <ItemFieldEx width={width} name={children}>
        <NormalTextEx>{displayValue}</NormalTextEx>
        <SliceTextEx>{sliceValue}</SliceTextEx>
      </ItemFieldEx>
    </ItemWrapperEx>
  );
};

export const TableTitleEx = () => {
  return (
    <WrapTitleTableEx>
      <BodyEx>Body Part</BodyEx>
      <EquipmentEx>Equipment</EquipmentEx>
      <NameEx>Name</NameEx>
      <TargetEx>Target</TargetEx>
      <BurnedExTablet>Burned Calor...</BurnedExTablet>
      <BurnedEx>Burned Calories</BurnedEx>
      <TimeEx>Time</TimeEx>
    </WrapTitleTableEx>
  );
};

export const EmptyScreenEx = () => <NotFoundEx>Not found exercises</NotFoundEx>;
