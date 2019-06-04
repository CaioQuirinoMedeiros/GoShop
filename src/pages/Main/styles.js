import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductsPanel = styled.FlatList.attrs({
  numColumns: 2,
  columnWrapperStyle: { justifyContent: "space-evenly" }
})`
  background: #f1f1f1;
  width: 100%;
  display: flex;
`;
