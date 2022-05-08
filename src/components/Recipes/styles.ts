import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #fafafc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  min-height: 768px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-top: 42px;
  margin-bottom: 32px;
  max-width: 512px;
  height: 104px;

  h1 {
    margin-bottom: 16px;
    font-size: 32px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.secondary};
  }
  span {
    font-size: 16px;
    color: #9e9baf;
    text-align: center;
  }
`;

export const RecipeList = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: space-between;
  max-width: 1092px;
  width: 100%;
  height: 486px;
  padding: 0 8px;

  @media (max-width: 1072px) {
    flex-direction: column;
    align-content: center;
    height: 100%;

    > * {
      margin-bottom: 36px;
    }
  }
`;
