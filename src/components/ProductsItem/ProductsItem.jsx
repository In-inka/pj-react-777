import { useSelector } from 'react-redux';
import {
  ProductsItemContainer,
  ProductsItemTitle,
  ProductsItemInfoContainer,
  ProductsItemInfo,
  ProductsItemFunctional,
  ProductsItemDiet,
  ProductsItemDietPar,
  ProductsItemRecommendedContainer,
  Circle,
  RecommendedText,
  AddButton,
  SpanGrey,
  IconRunning,
} from './ProductsItem.styled';
import sprite from '../../sprite/sprite.svg';
import authSelectors from '../../redux/auth/auth-selectors';

const cutStringLength = (str, maxLength = 24) => {
  
  if (str.length > maxLength) {
    const lastSpaceIndex = str.lastIndexOf(' ', maxLength);

    if (lastSpaceIndex !== -1) {
      return capitalizeFirstLetter(str.substring(0, lastSpaceIndex)) + '...';
    }

    return capitalizeFirstLetter(str.substring(0, maxLength)) + '...';
  }
  return capitalizeFirstLetter(str);
};

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const ProductsItem = ({ product, addProductDetails, rf }) => {
  const handleAddProduct = () => {
    addProductDetails(product);
  };

  const bloodGroup = useSelector(authSelectors.getUserMetricData).blood;

  return (
    <ProductsItemContainer ref={rf}>
      <ProductsItemFunctional>
        <ProductsItemDiet>
          <ProductsItemDietPar>Diet</ProductsItemDietPar>
        </ProductsItemDiet>
        <div style={{ display: 'flex' }}>
          <ProductsItemRecommendedContainer>
            {product.groupBloodNotAllowed[bloodGroup] ? (
              <>
                <Circle style={{ backgroundColor: '#419B09' }} />
                <RecommendedText>Recommended</RecommendedText>
              </>
            ) : (
              <>
                <Circle style={{ backgroundColor: '#E9101D' }} />
                <RecommendedText>Not recommended</RecommendedText>
              </>
            )}
          </ProductsItemRecommendedContainer>
          <AddButton onClick={handleAddProduct}>
            Add
            <svg width={16} height={16} style={{ stroke: '#E6533C' }}>
              <use href={`${sprite}#icon-start`}></use>
            </svg>
          </AddButton>
        </div>
      </ProductsItemFunctional>
      <ProductsItemTitle>
        <IconRunning width={24} height={24}>
          <use href={`${sprite}#icon-running`}></use>
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
          {cutStringLength(product.category, 13)}
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
