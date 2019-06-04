import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from "react-native";
import LottieView from "lottie-react-native";

import { Container, ProductsPanel } from "./styles";
import Filter from "../../components/Filter";
import Product from "../../components/Product";

import api from "../../services/api";

class Main extends Component {
  static navigationOptions = {
    title: "GoShop",
    headerTintColor: "#ee7777",
    headerTitleStyle: { alignSelf: "center" }
  };

  state = {
    categories: [],
    category: 1,
    products: [],
    error: "",
    loading: true,
    refreshing: false
  };

  loadCategories = async () => {
    const response = await api.get("categories");

    this.setState({ categories: response.data });
  };

  loadProducts = async () => {
    try {
      this.setState({ refreshing: true, error: "" });

      const { category } = this.state;
      const response = await api.get(`category_products/${category}`);

      this.setState({ products: response.data.products });
    } catch (err) {
      this.setState({ error: "Algo deu errado :(" });
    } finally {
      this.setState({ loading: false, refreshing: false });
    }
  };

  componentDidMount = async () => {
    await this.loadCategories();
    await this.loadProducts();
  };

  changeCategory = id => {
    this.setState({ category: id }, () => this.loadProducts());
  };

  viewDetails = id => {
    this.props.navigation.navigate("Details", { id });
  };

  renderProductItem = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => this.viewDetails(item.id)}
    >
      <Product data={item} />
    </TouchableOpacity>
  );

  render() {
    const { categories, category, products, refreshing, loading } = this.state;
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
          <>
            <Filter
              categories={categories}
              category={category}
              changeCategory={this.changeCategory}
            />
            <ProductsPanel
              data={products}
              keyExtractor={product => product.id.toString()}
              renderItem={this.renderProductItem}
              onRefresh={this.loadProducts}
              refreshing={refreshing}
            />
          </>
        )}
      </Container>
    );
  }
}

export default Main;
