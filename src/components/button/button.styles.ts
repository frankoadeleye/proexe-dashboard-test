import styled from "styled-components";
import { PerfectlyCentered } from "utils/functions/";
import { FontSizeFor } from "utils/functions";

interface cProps {
  medium?: boolean;
  large?: boolean;
  roundBorder?: any;
  bgColor?: string;
  pealAnimation?: any;
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

  ${(props) =>
    props.pealAnimation &&
    `
    display: -webkit-box;
   display: -webkit-flex;
   display: -ms-flexbox;
   display: flex;
  -webkit-align-self: center;
  -ms-flex-item-align: center;

  background-position: 100%;
  background-size: 400%;

  &:hover,
  &:focus {
    outline: 0;
    background-position: 0;
  }

  transition: 300ms ease-in-out;
  background-color: #318ce7;
  border-color: transparent;
  background-image: linear-gradient(45deg, teal 50%, transparent 50%);
  background-image: -webkit-linear-gradient(45deg, teal 50%, transparent 50%);
   `}
`;
