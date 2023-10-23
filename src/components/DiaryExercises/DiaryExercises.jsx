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
  IconWrapperEx,
  DeleteIconWrapperEx,
  StyledLinkEx,
  WrapItemProductsEx,
  ButtonEx,
  IndicatorEx,
  NotFoundEx,
  NormalTextEx,
  SliceTextEx,
  WrapTitleTableEx,
  TitleEx,
  CategoryEx,
  CaloriesEx,
  WeightEx,
  RecommendEx,
} from './DiaryExercises.styled';
import sprite from '../../assets/sprite.svg';

export const DiaryExercises = ({ children }) => {
  return (
    <ContainerEx>
      <TitleMainEx>
        <SubTitleEx>Products</SubTitleEx>
        <StyledLinkEx to="/first">
          <AddProductEx>Add Product</AddProductEx>
          <IconWrapperEx color="#E6533C">
            <use href={`${sprite}#icon-logo`} />
          </IconWrapperEx>
        </StyledLinkEx>
      </TitleMainEx>
      {!products.length ? (
        <EmptyScreenEx />
      ) : (
        <ExercisesTable>{children}</ExercisesTable>
      )}
    </ContainerEx>
  );
};
// exercises;
export const ExercisesTable = ({ children }) => {
  // const dispatch = useDispatch();
  // const visibleContacts = useSelector(selectVisibleContacts);

  // const { _id: { $oid } } = products;
  // const {groupBloodNotAllowed} = products[0];
  // console.log($oid, ' ', groupBloodNotAllowed[1]);

  return (
    <>
      <TableTitleEx/>
      <TableListEx>
        {products.map(
          ({
            _id: { $oid },
            title,
            category,
            calories,
            weight,
            groupBloodNotAllowed,
          }) => (
            <ListItemEx key={$oid}>
              <ItemProductEx value={title}>Title</ItemProductEx>
              <ItemProductEx value={category}>Category</ItemProductEx>
              <WrapMobileEx>
                <WrapItemProductsEx>
                  <ItemProductEx value={calories}>Calories</ItemProductEx>
                  <ItemProductEx value={weight}>Weight</ItemProductEx>
                  <ItemProductEx value={groupBloodNotAllowed[1]}>
                    Recommend
                  </ItemProductEx>
                </WrapItemProductsEx>
                <ButtonEx
                  onClick={
                    () => console.log(' del btn ')
                    //   () => dispatch(deleteProduct(id))
                  }
                >
                  <DeleteIconWrapperEx size="20px" color="#EF8964">
                    <use href={`${sprite}#icon-logo`} />
                  </DeleteIconWrapperEx>
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
  console.log(children, value, width);
  let displayValue = value;
  const valueIsBoolean = typeof value === 'boolean';
  if (valueIsBoolean) {
    displayValue = value ? 'Yes' : 'No';
  }
  let sliceValue = displayValue;
  if (value.length > 18) {
    sliceValue = value.slice(0, 18) + '...';
  }

  return (
    <ItemWrapperEx name={children}>
      <ItemNameEx>{children}</ItemNameEx>
      <ItemFieldEx width={width}>
        {valueIsBoolean && <IndicatorEx value={value} />}
        <NormalTextEx>{displayValue}</NormalTextEx>
        <SliceTextEx>{sliceValue}</SliceTextEx>
      </ItemFieldEx>
    </ItemWrapperEx>
  );
};

export const TableTitleEx = () => {
  return (
    <WrapTitleTableEx>
      <TitleEx>Title</TitleEx>
      <CategoryEx>Category</CategoryEx>
      <CaloriesEx>Calories</CaloriesEx>
      <WeightEx>Weight</WeightEx>
      <RecommendEx>Recommend</RecommendEx>
    </WrapTitleTableEx>
  );
}

export const EmptyScreenEx = () => <NotFoundEx>Not found products</NotFoundEx>;

let choice = true;
// let choice = false;

const products = !choice
  ? []
  : [
      {
        _id: {
          $oid: '5d51694902b2373622ff5773',
        },
        weight: 100,
        calories: 340,
        category: 'dairy',
        title: 'Danbo cheese',
        groupBloodNotAllowed: {
          1: true,
          2: true,
          3: false,
          4: false,
        },
      },
      {
        _id: {
          $oid: '5d51694902b2373622ff5b7f',
        },
        weight: 100,
        calories: 112,
        category: 'fish',
        title: 'marlin',
        groupBloodNotAllowed: {
          1: false,
          2: false,
          3: false,
          4: false,
        },
      },
      {
        _id: {
          $oid: '5d51694902b2373622ff5e13',
        },
        weight: 100,
        calories: 17,
        category: 'vegetables and herbs',
        title: 'Salads Belaya Dacha Delicate root',
        groupBloodNotAllowed: {
          1: true,
          2: false,
          3: false,
          4: false,
        },
      },
      {
        _id: {
          $oid: '5d51694902b2373622ff5b6f',
        },
        weight: 100,
        calories: 160,
        category: 'fish',
        title: 'Cold smoked bream',
        groupBloodNotAllowed: {
          1: false,
          2: false,
          3: false,
          4: false,
        },
      },
      {
        _id: {
          $oid: '5d51694902b2373622ff5b8d',
        },
        weight: 100,
        calories: 281,
        category: 'fish',
        title: 'Pollock in batter',
        groupBloodNotAllowed: {
          1: false,
          2: false,
          3: false,
          4: false,
        },
      },
      {
        _id: {
          $oid: '5d51694902b2373622ff590d',
        },
        weight: 100,
        calories: 232,
        category: 'meat',
        title: 'Lamb ham',
        groupBloodNotAllowed: {
          1: true,
          2: true,
          3: false,
          4: true,
        },
      },
      {
        _id: {
          $oid: '5d51694902b2373622ff5f16',
        },
        weight: 100,
        calories: 38,
        category: 'soft drinks',
        title: 'Pepsi',
        groupBloodNotAllowed: {
          1: false,
          2: false,
          3: false,
          4: false,
        },
      },
    ];
