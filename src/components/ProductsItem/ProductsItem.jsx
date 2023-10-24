import {
  ProductsItemContainer,
  ProductsItemTitle,
  ProductsItemInfoContainer,
  ProductsItemInfo,
  ProductsItemFunctional,
  ProductsItemDiet,
  ProductsItemDietPar,
  ProductsItemRecommendedContainer,
  CircleRec,
  RecommendedText,
  AddButton,
  SpanGrey
} from './ProductsItem.styled';

const ProductsItem = ({ product }) => {
  return (
    <ProductsItemContainer>
      <ProductsItemFunctional>
        <ProductsItemDiet>
          <ProductsItemDietPar>Diet</ProductsItemDietPar>
        </ProductsItemDiet>
        <div style={{display: 'flex'}}>
          <ProductsItemRecommendedContainer>
            <CircleRec />
            <RecommendedText>Recommended</RecommendedText>
          </ProductsItemRecommendedContainer>
          <AddButton>Add -</AddButton>
        </div>
      </ProductsItemFunctional>
      <ProductsItemTitle>{product.title}</ProductsItemTitle>
      <ProductsItemInfoContainer>
        <ProductsItemInfo>
          <SpanGrey>Calories: </SpanGrey>
          {product.calories}
        </ProductsItemInfo>
        <ProductsItemInfo>
          <SpanGrey>Category: </SpanGrey>
          {product.category}
        </ProductsItemInfo>
        <ProductsItemInfo>
          <SpanGrey>Weight: </SpanGrey>
          {product.weight}
        </ProductsItemInfo>
      </ProductsItemInfoContainer>
    </ProductsItemContainer>
  );
};

export { ProductsItem };
