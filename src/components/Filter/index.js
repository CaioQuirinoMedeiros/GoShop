import React from "react";

import { FilterBar, Category } from "./styles";

const Filter = ({ categories, category, changeCategory }) => {
  renderCategory = ({ item }) => (
    <Category
      active={item.id === category}
      onPress={() => changeCategory(item.id)}
    >
      {item.title}
    </Category>
  );

  return (
    <FilterBar
      horizontal={true}
      data={categories}
      keyExtractor={category => category.id.toString()}
      renderItem={this.renderCategory}
    />
  );
};

export default Filter;
