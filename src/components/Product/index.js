import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import IntlCurrency from "../../services/currency";

import {
  Card,
  ProductName,
  ProductBrand,
  ProductImage,
  ProductPrice
} from "./styles";

const Product = ({ data: product }) => (
  <Card>
    <ProductImage source={{ uri: product.image }} resizeMode="contain" />
    <ProductName numberOfLines={2}>{product.name}</ProductName>
    <ProductBrand>{product.brand}</ProductBrand>
    <ProductPrice>{IntlCurrency.format(product.price)}</ProductPrice>
  </Card>
);

export default Product;
