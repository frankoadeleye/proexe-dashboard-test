import styled from "styled-components";
import { FontSizeFor } from "utils/functions";
import { mediaDevices } from "utils/functions";

export const NewUserFormSection = styled.form`
  min-height: 30px;
  width: 96%;
  margin: 50px auto;
  position: relative;

  ${mediaDevices.tablet`
    width: 60%;
    left: 120px;
  `}

  ${mediaDevices.desktop`
    left: 200px;
  `}
`;

export const NewUserFormHeaderBlock = styled.div`
  width: 96%;
  margin: 0px auto;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .text {
    ${FontSizeFor.HeaderText};
  }

  ${mediaDevices.tablet`
    width: 98%;
  `}
`;

export const NewUserFormButtonsWrap = styled.div`
  width: 100%;
  margin: 20px 0px;
  display: flex;
  justify-content: flex-end;

  .button-cover {
    width: 200px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }

  ${mediaDevices.laptop`
    .button-cover {
      width: 300px;
    }
  `}
`;
