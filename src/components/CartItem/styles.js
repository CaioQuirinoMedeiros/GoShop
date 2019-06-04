import styled from "styled-components";
import { Dimensions } from "react-native";

export const Card = styled.View`
  flex-direction: row;
  align-items: center;
  background: #fff;
  padding: 20px;
  margin: 10px 20px;
  border-radius: 3px;
`;

export const ProductImage = styled.Image`
  margin-right: 10px;
  height: 100px;
  width: 70px;
`;

export const ProductInfo = styled.View`
  flex-grow: 1;
`;

export const ProductName = styled.Text`
  color: #222;
  font-size: 16px;
  font-weight: bold;
`;
export const ProductBrand = styled.Text`
  color: #ccc;
`;
export const ProductPrice = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #0ab293;
  margin: 5px 0;
`;

export const CartOptions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RemoveButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})``;
