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
          <span>Calories: </span>
          {product.calories}
        </ProductsItemInfo>
        <ProductsItemInfo>
          <span>Category: </span>
          {product.category}
        </ProductsItemInfo>
        <ProductsItemInfo>
          <span>Weight: </span>
          {product.weight}
        </ProductsItemInfo>
      </ProductsItemInfoContainer>
    </ProductsItemContainer>
  );
};

export { ProductsItem };
