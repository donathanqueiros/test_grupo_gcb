import styled from "styled-components";

export const Container = styled.div`
  background-color: #fafafc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 768px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-top: 42px;
  margin-bottom: 32px;
  width: 510px;
  height: 104px;

  h1 {
    padding: 0;
    margin: 0;
    margin-bottom: 16px;
    font-size: 32px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.secondary};
  }
  span {
    padding: 0;
    margin: 0;
    font-size: 16px;
    color: #9e9baf;
    text-align: center;
  }
`;

export const Recipes = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: space-between;

  margin: 0 auto;
  width: 1092px;
  height: 486px;
`;

export const RecipeCard = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  box-shadow: 0px 15px 20px rgba(29, 22, 77, 0.08);

  width: 528px;
  height: 225px;

  img {
    width: 253px;
    height: 225px;
    border-radius: 5px 0 0 5px;
    padding-right: 32px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 187px;
    height: 127px;

    h1 {
      margin: 0;
      padding: 0;
      font-size: 24px;
      font-weight: bold;
      color: ${(props) => props.theme.colors.secondary};
    }

    Button {
      width: 134px;
      height: 48px;
      border-radius: 7px;
    }
  }
`;
