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
  SpanGrey,
  IconRunning,
} from './ProductsItem.styled';

const cutStringLength = (str) => {
  if (str.length > 26) {
    return str.substring(0, 26) + '...';
  }
  return str;
};

const ProductsItem = ({ product }) => {
  return (
    <ProductsItemContainer>
      <ProductsItemFunctional>
        <ProductsItemDiet>
          <ProductsItemDietPar>Diet</ProductsItemDietPar>
        </ProductsItemDiet>
        <div style={{ display: 'flex' }}>
          <ProductsItemRecommendedContainer>
            <CircleRec />
            <RecommendedText>Recommended</RecommendedText>
          </ProductsItemRecommendedContainer>
          <AddButton>
            Add
            <svg width={16} height={16} style={{ stroke: '#E6533C' }}>
              <use xlinkHref={'/symbol-defs.svg#icon-arrow'} />
            </svg>
          </AddButton>
        </div>
      </ProductsItemFunctional>
      <ProductsItemTitle>
        <IconRunning width={24} height={24}>
          <use xlinkHref={'/symbol-defs.svg#icon-running'} />
        </IconRunning>
        {cutStringLength(product.title)}
      </ProductsItemTitle>
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
