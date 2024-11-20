import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 20px;
`;

export const Card = styled.div`
  border: 1px solid;
  padding: 25px;
  margin: 30px;
  width: 180px;
`;

export const TextFieldsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;

  input {
    width: 200px;
    &:focus {
      border-color: #007bff;
    }
  }
`;

export const Dropdown = styled.select`
  padding: 0px 20px;
  width: 200px;
`;
