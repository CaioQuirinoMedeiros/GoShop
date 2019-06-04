import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import LottieView from "lottie-react-native";

import IntlCurrency from "../../services/currency";
import CartActions from "../../store/ducks/cart";

import {
  Container,
  Card,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductBrand,
  ProductPrice,
  AddToCart,
  AddToCartText
} from "./styles";

import api from "../../services/api";

class Details extends Component {
  static navigationOptions = {
    title: "Detalhe do produto",
    headerTintColor: "#ee7777",
    headerTitleStyle: { alignSelf: "center" }
  };

  state = {
    product: {},
    isInCart: null,
    loading: true,
    error: ""
  };

  componentDidMount = () => {
    this.loadProduct();

    this.willFocusSubscription = this.props.navigation.addListener(
      "willFocus",
      () => this.checkProductInCart()
    );
  };

  componentWillUnmount = () => {
    this.willFocusSubscription.remove();
  };

  checkProductInCart = () => {
    const { cart } = this.props;

    this.setState({
      isInCart: !!cart.products.find(
        product => product.id === this.state.product.id
      )
    });
  };

  loadProduct = async () => {
    try {
      this.setState({ loading: true });

      const id = this.props.navigation.getParam("id");

      const response = await api.get(`products/${id}`);

      this.setState({ product: response.data, error: "" }, () =>
        this.checkProductInCart()
      );
    } catch (err) {
      this.setState({ error: "Algo saiu errado :(" });
    } finally {
      this.setState({ loading: false });
    }
  };

  addToCart = async product => {
    if (this.state.isInCart) return;

    const { addToCart } = this.props;

    await addToCart(product);
    this.checkProductInCart();
  };

  render() {
    const { product, isInCart, loading } = this.state;
    return (
      <Container>
        {loading ? (
          <LottieView
            source={require("../../assets/data2.json")}
            style={{ width: 100, height: 100 }}
            autoPlay
            loop
          />
        ) : (
          <Card>
            <ProductImage
              source={{ uri: product.image }}
              resizeMode="contain"
            />
            <ProductInfo>
              <ProductName numberOfLines={1}>{product.name}</ProductName>
              <ProductBrand>{product.brand}</ProductBrand>
              <ProductPrice>{IntlCurrency.format(product.price)}</ProductPrice>
            </ProductInfo>
            <AddToCart
              isInCart={isInCart}
              onPress={() => this.addToCart(product)}
            >
              <AddToCartText>
                {isInCart ? "Adicionado ao carrinho" : "Adicionar ao carrinho"}
              </AddToCartText>
            </AddToCart>
          </Card>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
