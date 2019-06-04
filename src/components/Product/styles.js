import styled from "styled-components";
import { Dimensions } from "react-native";

export const Card = styled.View`
  background: #fff;
  padding: 20px;
  margin: 10px 0;
  width: ${Dimensions.get("screen").width / 2 - 20}px;
  border-radius: 3px;
`;

export const ProductImage = styled.Image`
  margin-bottom: 10px;
  height: 200px;
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
  margin-top: 7px;
  font-weight: bold;
  color: #0ab293;
`;
