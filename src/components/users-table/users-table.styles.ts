import styled from "styled-components";
import { FontSizeFor } from "utils/functions";
import { PerfectlyCentered } from "utils/functions";
import { mediaDevices } from "utils/functions";

export const UsersTableHeadingBlock = styled.div`
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

export const UsersTableListBlock = styled.table`
  min-height: 30px;
  width: 99%;
  margin: auto;

  border: 1px solid #ccc;
  border-collapse: collapse;
  padding: 0;
  table-layout: fixed;

  thead tr {
    background: #e4e4e4;
    word-wrap: break-word;
    border: 1px solid #ccc;

    height: 60px;
  }

  tbody tr {
    background: #fff;
  }

  tr {
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    padding: 0.35em;
  }

  th,
  td {
    padding: 0.625em;
    text-align: center;
    word-wrap: break-word;
    height: 60px;
  }

  td:nth-child(6) {
    justify-content: space-between;
    .button {
      margin: auto;
    }
  }

  td:last-child {
    display: flex;
    ${PerfectlyCentered};
    justify-content: space-between;
    .button {
      margin: auto;
    }
  }

  @media screen and (max-width: 767.9px) {
    border: 0;

    td:nth-child(6) {
      ${PerfectlyCentered};
      justify-content: space-between;
      .button {
        margin: 0px;
      }
    }

    td:last-child {
      .button {
        margin: 0px;
      }
    }

    thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    tr {
      border-bottom: 3px solid #ddd;
      display: block;
      margin-bottom: 0.625em;
    }

    td {
      border-bottom: 1px solid #ddd;
      display: block;
      text-align: right;
    }

    td::before {
      content: attr(aria-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
      color: #1f1e37;
    }
  }
  ${FontSizeFor.NormalText};
`;

export const NoUsersBlock = styled.div`
  width: 100%;
  text-align: center;
  ${PerfectlyCentered};
  margin: auto;
  flex-direction: column;
`;

export const NoUsersFoundBlock = styled.div`
  width: 100%;
  text-align: center;
  ${PerfectlyCentered};
  margin: auto;
  flex-direction: column;
  width: 100%;
  border: 2px solid red;
  position: absolute;
  text-align: center;
`;
