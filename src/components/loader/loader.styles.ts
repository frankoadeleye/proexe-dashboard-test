import styled from "styled-components";
import { PerfectlyCentered } from "utils/functions/";

export const LoaderBlock = styled.div`
  width: 120%;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  ${PerfectlyCentered};
  color: #fff;
  z-index: 999;
  left: -10%;
  top: -5%;

  height: 110vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .wave {
    width: 3px;
    height: 50px;
    background: linear-gradient(45deg, #fa8b0d, #fff);
    margin: 10px;
    animation: wave 1s linear infinite;
    border-radius: 20px;
  }

  .wave:nth-child(2) {
    animation-delay: 0.1s;
  }
  .wave:nth-child(3) {
    animation-delay: 0.2s;
  }
  .wave:nth-child(4) {
    animation-delay: 0.3s;
  }
  .wave:nth-child(5) {
    animation-delay: 0.4s;
  }
  .wave:nth-child(6) {
    animation-delay: 0.5s;
  }
  .wave:nth-child(7) {
    animation-delay: 0.6s;
  }
  .wave:nth-child(8) {
    animation-delay: 0.7s;
  }
  .wave:nth-child(9) {
    animation-delay: 0.8s;
  }
  .wave:nth-child(10) {
    animation-delay: 0.9s;
  }

  @keyframes wave {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
`;

export const LoaderErrorBlock = styled.div`
  display: flex;
  ${PerfectlyCentered}
  flex-direction: column;
  text-align: center;
`;
