import styled from "styled-components";

export const SearchbarInput = styled.input`
  width: 90%;
  border: 1px solid #c0c0c0;
  font-family: inherit;
  padding: 8px 10px;
  font-size: 14px;
  height: 40px;

  &:focus {
    outline-style: none;
    border: 1px solid #c0c0c0;
  }

  &:placeholder {
  }

  @media (min-width: 768px) {
    width: 60%;
  }

  @media (min-width: 1330px) {
    width: 50%;
  }
`;
