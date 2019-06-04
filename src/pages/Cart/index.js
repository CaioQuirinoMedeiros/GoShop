import React, { Component } from "react";
import { Text, FlatList, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Icon from "react-native-vector-icons/FontAwesome";

import IntlCurrency from "../../services/currency";

import {
  Container,
  CartHeader,
  CartList,
  EmptyCartContainer,
  EmptyCartText,
  SubtotalContainer,
  SubtotalText,
  SubtotalValue
} from "./styles";
import CartItem from "../../components/CartItem";
import CartActions from "../../store/ducks/cart";

const CartIcon = ({ tintColor }) => (
  <Icon name="shopping-cart" size={20} color={tintColor} />
);

class Cart extends Component {
  static navigationOptions = {
    tabBarIcon: CartIcon
  };

  renderCartItem = ({ item }) => (
    <CartItem
      data={item}
      remove={this.props.removeToCart}
      updateQuantity={this.props.updateProductQuantity}
    />
  );

  renderEmptyCart = () => (
    <EmptyCartContainer>
      <Icon name="shopping-basket" color="#aaa" size={54} />
      <EmptyCartText>Seu carrinho está vazio</EmptyCartText>
    </EmptyCartContainer>
  );

  render() {
    const { cart, subTotal } = this.props;

    return (
      <Container>
        <CartList
          ListHeaderComponent={<CartHeader>Carrinho</CartHeader>}
          data={cart.products}
          keyExtractor={product => product.id.toString()}
          renderItem={this.renderCartItem}
          ListEmptyComponent={this.renderEmptyCart}
        />
        <SubtotalContainer>
          <SubtotalText>Subtotal</SubtotalText>
          <SubtotalValue>{subTotal}</SubtotalValue>
        </SubtotalContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state,
  subTotal: IntlCurrency.format(
    state.products.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
  )
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
