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
import { useSelector } from 'react-redux';
import diarySelectors from '../../redux/diary/diarySelectors';

const Icon = styled.svg`
  &.orange {
    stroke: ${({ theme }) => theme.acceptColor};
  }
`;

export const DayExercises = () => {
   const visibleExercises = useSelector(diarySelectors.getDiary).doneExercises;

  console.log('visibleExercises : ', visibleExercises);
  
  return (
    <ContainerEx>
      <TitleMainEx>
        <SubTitleEx>Execrcises</SubTitleEx>
        <StyledLinkEx to="/exercises">
          <AddProductEx>Add exercise</AddProductEx>
          <Icon width={16} height={16} className="orange">
            <use href={`${sprite}#icon-start`}></use>
          </Icon>
        </StyledLinkEx>
      </TitleMainEx>
      {!visibleExercises.length ? (
        <EmptyScreenEx />
      ) : (
        <ExercisesTable exercises={visibleExercises}/>
      )}
    </ContainerEx>
  );
};
// exercises;
export const ExercisesTable = ({ exercises }) => {
   
  console.log('exercises : ', exercises);
  

   // burnedCalories,
  //   exerciseId: { bodyPart, equipment, name, target,
  //     // _id
  //   },
  //   owner,
  //   time,
  //   _id

  return (
    <>
      <TableTitleEx />
      <TableListEx>
        {exercises.map(
          ({
            burnedCalories,
            exerciseId: { bodyPart, equipment, name, target,
              // _id
               },
              //  owner,
               time,
               _id
          }) => (
            <ListItemEx key={_id}>
              <ItemProductEx value={bodyPart}>Body Part</ItemProductEx>
              <ItemProductEx value={equipment}>Equipment</ItemProductEx>
              <ItemProductEx value={name}>name</ItemProductEx>

              <WrapMobileEx>
                <WrapItemProductsEx>
                  <ItemProductEx value={target}>Target</ItemProductEx>
                  <ItemProductEx value={burnedCalories}>
                    Burned Calories
                  </ItemProductEx>
                  <ItemProductEx value={time}>Time</ItemProductEx>
                </WrapItemProductsEx>

                <ButtonEx
                  onClick={
                    () => console.log(' del btn ')
                    //   () => dispatch(deleteProduct(id))
                  }
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
  );
};

export const ItemProductEx = ({ width, value, children }) => {
  // console.log(children, value, width);
  let displayValue = value;
  let sliceValue = displayValue;
  if (value.length > 10) {
    sliceValue = value.slice(0, 10) + '...';
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

let choice = true;
// let choice = false;

const exercises = !choice
  ? []
  : [
      {
        _id: {
          $oid: '64f2458d6f67bc34bae4f7f7',
        },
        bodyPart: 'chest',
        equipment: 'leverage machine',
        gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0009.gif',
        name: 'assisted chest dip (kneeling)',
        target: 'pectorals',
        burnedCalories: 329,
        time: 3,
      },
      {
        _id: {
          $oid: '64f2458d6f67bc34bae4f801',
        },
        bodyPart: 'upper arms',
        equipment: 'leverage machine',
        gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0019.gif',
        name: 'assisted triceps dip (kneeling)',
        target: 'triceps',
        burnedCalories: 233,
        time: 3,
      },
      {
        _id: {
          $oid: '64f2458d6f67bc34bae4f813',
        },
        bodyPart: 'upper arms',
        equipment: 'barbell',
        gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0038.gif',
        name: 'barbell drag curl',
        target: 'biceps',
        burnedCalories: 84,
        time: 3,
      },
      {
        _id: {
          $oid: '64f2458d6f67bc34bae4f7f4',
        },
        bodyPart: 'waist',
        equipment: 'body weight',
        gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0003.gif',
        name: 'air bike',
        target: 'abs',
        burnedCalories: 312,
        time: 3,
      },
      {
        _id: {
          $oid: '64f2458d6f67bc34bae4f819',
        },
        bodyPart: 'upper legs',
        equipment: 'barbell',
        gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0044.gif',
        name: 'barbell good morning',
        target: 'hamstrings',
        burnedCalories: 335,
        time: 3,
      },
      {
        _id: {
          $oid: '64f2458d6f67bc34bae4f7fe',
        },
        bodyPart: 'upper legs',
        equipment: 'assisted',
        gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0016.gif',
        name: 'assisted prone hamstring',
        target: 'hamstrings',
        burnedCalories: 316,
        time: 3,
      },
      {
        _id: {
          $oid: '64f2458d6f67bc34bae4f809',
        },
        bodyPart: 'upper legs',
        equipment: 'barbell',
        gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0028.gif',
        name: 'barbell clean and press',
        target: 'quads',
        burnedCalories: 272,
        time: 3,
      },
      {
        _id: {
          $oid: '64f2458d6f67bc34bae4f80e',
        },
        bodyPart: 'chest',
        equipment: 'barbell',
        gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0033.gif',
        name: 'barbell decline bench press',
        target: 'pectorals',
        burnedCalories: 129,
        time: 3,
      },
    ];
