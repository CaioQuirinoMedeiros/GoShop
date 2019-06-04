import styled from "styled-components";
import { Dimensions } from "react-native";

export const Container = styled.View`
  flex: 1;
  display: flex;
  background: #f1f1f1;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.View`
  flex: 1;
  width: 95%;
  justify-content: space-between;
  background: #fff;
  padding: 20px;
  margin: 20px 0;
  border-radius: 3px;
`;

export const ProductImage = styled.Image`
  margin-bottom: 20px;
  flex: 1;
`;

export const ProductInfo = styled.View`
  width: 100%;
  align-items: center;
`;

export const ProductName = styled.Text`
  color: #222;
  font-size: 22px;
  font-weight: bold;
`;

export const ProductBrand = styled.Text`
  color: #ccc;
  font-size: 17px;
`;

export const ProductPrice = styled.Text`
  font-size: 33px;
  font-weight: bold;
  color: #0ab293;
`;

export const AddToCart = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  margin-top: 25px;
  border-radius: 3px;
  background: ${({ isInCart }) => (isInCart ? "#aaa" : "#0ab293")};
  padding: 15px 0;
`;

export const AddToCartText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;
