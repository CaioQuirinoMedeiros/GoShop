import styled from "styled-components";

export const FilterBar = styled.FlatList`
  width: 100%;
  background: #ee7777;
  flex-grow: 0;
  elevation: 2;
`;

export const Category = styled.Text`
  color: #fff;
  padding: 15px 0 10px;
  margin: 0 18px;
  border-bottom-width: 5px;
  border-color: ${({ active }) => (active ? "#fff" : "transparent")};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1.1px;
`;
