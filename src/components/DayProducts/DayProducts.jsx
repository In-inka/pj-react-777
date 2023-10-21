import {
  Wrapper,
  Title,
  SubTitle,
  AddProduct,
  ItemWrapper,
  ItemName,
  ItemField,
  WrapMobile,
  IconWrapper,
  StyledLink,
  WrapButton,
  Button,
} from './DayProducts.styled';
import sprite from '../../assets/sprite.svg';

export const DayProducts = ({ children }) => {
  return (
    <Wrapper>
      <Title>
        <SubTitle>Products</SubTitle>
        <StyledLink to="/first">
          <AddProduct>Add Product</AddProduct>
          <IconWrapper color="#E6533C">
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
        </StyledLink>
      </Title>
      <ProductsTable>{children}</ProductsTable>
    </Wrapper>
  );
};

export const ProductsTable = ({ children }) => {
  // const dispatch = useDispatch();
  // const visibleContacts = useSelector(selectVisibleContacts);

  const {
    _id: { $oid },
    groupBloodNotAllowed,
  } = products[0];
  // console.log($oid, ' ', groupBloodNotAllowed[1]);

  return (
    <ul>
      {products.map(
        ({
          _id: { $oid },
          title,
          category,
          calories,
          weight,
          groupBloodNotAllowed,
        }) => (
          <li key={$oid}>
            <ItemProduct value={title}>Title</ItemProduct>
            <ItemProduct value={category}>Category</ItemProduct>
            <WrapMobile>
              <ItemProduct width="80px" value={calories}>
                Calories
              </ItemProduct>
              <ItemProduct width="80px" value={weight}>
                Weight
              </ItemProduct>
              <WrapButton>
                <ItemProduct value={groupBloodNotAllowed[1]}>
                  Recommend
                </ItemProduct>
                <Button
                  onClick={
                    () => console.log(' del btn ')
                    //   () => dispatch(deleteProduct(id))
                  }
                >
                  <IconWrapper size="20px" color="#E6533C">
                    <use href={`${sprite}#icon-logo`} />
                  </IconWrapper>
                </Button>
              </WrapButton>
            </WrapMobile>
          </li>
        ),
      )}
    </ul>
  );
};

export const ItemProduct = ({ width, value, children }) => {
  console.log(children, value, width);
  let displayValue;
  if (typeof value === 'boolean') {
    displayValue = value ? 'true' : 'false';
  } else displayValue = value;

  return (
    <ItemWrapper>
      <ItemName>{children}</ItemName>
      <ItemField width={width} height="38px">
        {displayValue}
      </ItemField>
    </ItemWrapper>
  );
};

let products = [
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
      1: false,
      2: false,
      3: false,
      4: false,
    },
  },
];
