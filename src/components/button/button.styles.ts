import styled from "styled-components";
import { PerfectlyCentered } from "utils/functions/";
import { FontSizeFor } from "utils/functions";

interface cProps {
  medium?: boolean;
  large?: boolean;
  roundBorder?: any;
  bgColor?: string;
}

export const ButtonBlock = styled.button<cProps>`
  text-align: center;
  ${PerfectlyCentered};
  outline-style: none;
  border: 1px solid transparent;
  color: #fff;
  background: ${(props) => (props.bgColor ? props.bgColor : "#800020")};
  box-shadow: ${({ theme }) => theme.boxShadow};
  cursor: pointer;

  &:focus {
    outline-style: none;
  }

  &:hover {
    filter: brightness(90%);
  }

  width: 120px;
  height: 30px;
  font-size: 16px;

  ${FontSizeFor.NormalText};

  ${(props) =>
    props.medium &&
    `
    width: 90px;
    height: 26px;

     @media (min-width: 1020px) {
      width: 130px;
      height: 38px;
     }

  `}

  ${(props) =>
    props.large &&
    `
    width: 100px;
    height: 30px;

     @media (min-width: 1020px) {
      width: 150px;
      height: 40px;
     }
  `};
`;
