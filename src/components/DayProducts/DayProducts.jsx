import styled from 'styled-components';
import {
  Container,
  TitleMain,
  SubTitle,
  AddProduct,
  TableList,
  ListItem,
  ItemWrapper,
  ItemName,
  ItemField,
  WrapMobile,
  // IconWrapper,
  DeleteIconWrapper,
  StyledLink,
  WrapItemProducts,
  Button,
  Indicator,
  NotFound,
  NormalText,
  SliceText,
  WrapTitleTable,
  Title,
  Category,
  Calories,
  Weight,
  Recommend,
} from './DayProducts.styled';
import sprite from '../../sprite/sprite.svg';
import {useSelector } from 'react-redux';
import diarySelectors from '../../redux/diary/diarySelectors';


const Icon = styled.svg`
  &.orange {
    stroke: ${({ theme }) => theme.acceptColor};
  }
`;

const DayProducts = ({ children }) => {
  const visibleProducts = useSelector(diarySelectors.getDiary).eatenProducts;

  return (
    <Container>
      <TitleMain>
        <SubTitle>Products</SubTitle>
        <StyledLink to="/products">
          <AddProduct>Add product</AddProduct>
          <Icon width={16} height={16} className="orange">
            <use href={`${sprite}#icon-start`}></use>
          </Icon>
        </StyledLink>
      </TitleMain>
      {!visibleProducts.length ? (
        <EmptyScreen />
      ) : (
        <ProductsTable products={visibleProducts}/>
      )}
    </Container>
  );
};

export const ProductsTable = ({ products }) => {

  
  return (
    <>
      <TableTitle />
      <TableList>
        {products.map(
          ({
            _id,
            calories,
            amount,
            recommend,
            productId: { category, title },
          }) => (
            <ListItem key={_id}>
              <ItemProduct value={title}>Title</ItemProduct>
              <ItemProduct value={category}>Category</ItemProduct>
              <WrapMobile>
                <WrapItemProducts>
                  <ItemProduct value={calories}>Calories</ItemProduct>
                  <ItemProduct value={amount}>Weight</ItemProduct>
                  <ItemProduct value={recommend}>Recommend</ItemProduct>
                </WrapItemProducts>
                <Button
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
                </Button>
              </WrapMobile>
            </ListItem>
          ),
        )}
      </TableList>
    </>
  );
};

export const ItemProduct = ({ width, value, children }) => {
  // console.log(children, value, width);
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
    <ItemWrapper name={children}>
      <ItemName>{children}</ItemName>
      <ItemField width={width}>
        {valueIsBoolean && <Indicator value={value} />}
        <NormalText>{displayValue}</NormalText>
        <SliceText>{sliceValue}</SliceText>
      </ItemField>
    </ItemWrapper>
  );
};

export const TableTitle = () => {
  return (
    <WrapTitleTable>
      <Title>Title</Title>
      <Category>Category</Category>
      <Calories>Calories</Calories>
      <Weight>Weight</Weight>
      <Recommend>Recommend</Recommend>
    </WrapTitleTable>
  );
};

export const EmptyScreen = () => <NotFound>Not found products</NotFound>;

// тестовый массив объектов
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

export { DayProducts };
