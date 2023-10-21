import { Wrapper, Title, SubTitle, AddProduct, ItemWrapper, ItemName, ItemField, WrapMobile, IconWrapper, StyledLink, WrapButton, Button } from "./DayProducts.styled"
import sprite from "../../assets/sprite.svg"

export const DayProducts = ({children}) => {
    
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
}

export const ProductsTable = ({ children }) => {
  // const dispatch = useDispatch();
  // const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <>
      <ItemProduct>Title</ItemProduct>
      <ItemProduct>Category</ItemProduct>
      <WrapMobile>
        <ItemProduct>Calories</ItemProduct>
        <ItemProduct>Weight</ItemProduct>
        <WrapButton>
          <ItemProduct>Recommend</ItemProduct>
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
    </>
  );
}

export const ItemProduct = ({ children }) => {
    // console.log(children);
    return (
        <ItemWrapper>
        <ItemName>{children}</ItemName>
        <ItemField width="auto" height="38px">{children}</ItemField>
        </ItemWrapper>
    );
}


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