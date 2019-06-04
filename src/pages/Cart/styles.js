import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1f1f1;
`;

export const CartHeader = styled.Text`
  width: 100%;
  color: #ee7777;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  background: #fff;
  padding: 15px 0;
  margin-bottom: 10px;
  elevation: 5;
`;

export const CartList = styled.FlatList`
  width: 100%;
`;

export const EmptyCartContainer = styled.View`
  flex: 1;
  height: 300px;
  align-items: center;
  justify-content: center;
`;

export const EmptyCartText = styled.Text`
  font-size: 23px;
  color: #aaa;
  text-align: center;
  margin-top: 15px;
`;

export const SubtotalContainer = styled.View`
  align-items: center;
  background: #fff;
  elevation: 10;
  width: 100%;
  padding: 18px 0;
`;

export const SubtotalText = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #aaa;
`;
export const SubtotalValue = styled.Text`
  font-size: 34px;
  font-weight: bold;
  color: #0ab293;
`;
