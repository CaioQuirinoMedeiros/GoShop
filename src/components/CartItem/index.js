import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import NumericInput from "react-native-numeric-input";

import IntlCurrency from "../../services/currency";

import {
  Card,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductBrand,
  ProductPrice,
  RemoveButton,
  CartOptions
} from "./styles";

const CartItem = ({ data: product, remove, updateQuantity }) => (
  <Card>
    <ProductImage source={{ uri: product.image }} resizeMode="contain" />
    <ProductInfo>
      <ProductName numberOfLines={1}>{product.name}</ProductName>
      <ProductBrand>{product.brand}</ProductBrand>
      <ProductPrice>{IntlCurrency.format(product.price)}</ProductPrice>

      <CartOptions>
        <NumericInput
          onChange={value => updateQuantity(product.id, value)}
          minValue={1}
          rounded={true}
          value={product.quantity}
          totalWidth={100}
          totalHeight={30}
          inputStyle={{ fontWeight: "bold", color: "#aaa" }}
          rightButtonBackgroundColor="#0ab293"
          leftButtonBackgroundColor="#0ab293"
          borderColor="transparent"
          iconStyle={{ color: "#fff" }}
        />
        <RemoveButton onPress={() => remove(product.id)}>
          <Icon name="times" color="#aaa" size={26} />
        </RemoveButton>
      </CartOptions>
    </ProductInfo>
  </Card>
);

export default CartItem;
