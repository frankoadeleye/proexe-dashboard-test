import styled from "styled-components";
import { FontSizeFor } from "utils/functions";

interface fProps {
  errorBorder?: any;
}

export const FormInputBlock = styled.div<fProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${FontSizeFor.NormalText};
  flex-flow: row wrap;

  .label {
    width: 120px;
  }

  input {
    width: 250px;
    flex: 1 1 0;
    background: inherit;
    text-align: left;
    border: none;
    border: 1px solid #c5c7c9;
    color: black;
    height: 45px;
    transition: box-shadow 300ms ease-out;
    background: transparent;
    padding-left: 20px;
    ${FontSizeFor.NormalText};
    margin: 20px 0px;

    &:focus {
      outline-style: none;
      background: transparent;
      ${(props) =>
        props.errorBorder
          ? `  border: 1px solid red`
          : ` border: 1px solid lightgreen`};
    }

    &:active {
      background: transparent;
    }
  }
`;
