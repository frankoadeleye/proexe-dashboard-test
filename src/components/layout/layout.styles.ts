import styled from "styled-components";
import { mediaDevices } from "utils/functions";

export const LayoutBlock = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 10px;
  display: flex;
  flex-direction: column;

  ${mediaDevices.tablet`
     padding: 20px;
  `}
`;

export const ContentLayout = styled.div`
  width: 100%;
  display: flex;
  box-shadow: ${({ theme }) => theme.boxShadow};
  min-height: 30vh;
  flex-direction: column;
  position: relative;
`;
